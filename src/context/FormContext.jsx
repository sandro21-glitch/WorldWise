import React, { useContext, useEffect, useReducer, useState } from "react";
import { form_reducer } from "../reducers/form_reducer";
import { SUCCESS, LOADING_API, FAILED } from "../actions/Actions";
import axios from "axios";
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
const getLocalStorage = () => {
  let cart = localStorage.getItem("cities");
  if (cart) {
    return JSON.parse(localStorage.getItem("cities"));
  } else {
    return [];
  }
};
const FormContextProvider = React.createContext();
const initialState = {
  singleCity: {},
  addedCities: getLocalStorage(),
  loading: false,
  error: false,
  currentCity: {},
  currLoading: false,
  currError: false,
  mapPos: {
    lat: 41.539935835691466,
    lng: 45.007553100585945,
  },
};
const FormContext = ({ children }) => {
  const [state, dispatch] = useReducer(form_reducer, initialState);
  const fetchCity = async (lat, lng) => {
    dispatch({ type: LOADING_API });
    try {
      const res = await axios.get(
        `${BASE_URL}?latitude=${lat}&longitude=${lng}`
      );
      const data = await res.data;
      const newCity = {
        name: data.city,
        country: data.countryName,
        code: data.countryCode,
        lat: lat,
        lng: lng,
      };
      dispatch({ type: SUCCESS, payload: newCity });
    } catch (error) {
      dispatch({ type: FAILED });
    }
  };
  const getSingleCity = async (lat, lng) => {
    dispatch({ type: "LOADING_CURR" });
    try {
      const res = await axios.get(
        `${BASE_URL}?latitude=${lat}&longitude=${lng}`
      );
      const data = await res.data;
      dispatch({ type: "CURRENT_CITY", payload: data });
    } catch (error) {
      dispatch({ type: "CURR_FAILED" });
    }
  };

  const setMapPos = (lat, lng) => {
    dispatch({ type: "MAP_POS", payload: { lat, lng } });
  };

  const addNewCity = (note, date) => {
    dispatch({ type: "ADD_CITY", payload: { note, date } });
  };

  const removeCity = (name) => {
    dispatch({ type: "REMOVE_CITY", payload: name });
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(state.addedCities));
  }, [state.addedCities]);

  return (
    <FormContextProvider.Provider
      value={{
        ...state,
        fetchCity,
        addNewCity,
        removeCity,
        getSingleCity,
        setMapPos,
      }}
    >
      {children}
    </FormContextProvider.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContextProvider);
};
export default FormContext;
