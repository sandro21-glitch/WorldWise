import { SUCCESS, LOADING_API, FAILED } from "../actions/Actions";

export const form_reducer = (state, action) => {
  if (action.type === SUCCESS) {
    // console.log(action.payload);
    return {
      ...state,
      singleCity: action.payload,
      loading: false,
    };
  }
  if (action.type === LOADING_API) {
    return { ...state, loading: true };
  }
  if (action.type === FAILED) {
    return { ...state, loading: false, error: true };
  }
  if (action.type === "ADD_CITY") {
    const uniqueCity = state.addedCities.find(
      (city) => city.name === state.singleCity.name
    );
    if (uniqueCity) {
      return state;
    } else {
      const newCity = {
        ...state.singleCity,
        note: action.payload.note,
        date: action.payload.date.toString(),
      };
      return {
        ...state,
        addedCities: [...state.addedCities, newCity],
      };
    }
  }
  if (action.type === "REMOVE_CITY") {
    const { addedCities } = state;
    const newCities = addedCities.filter(
      (city) => city.name !== action.payload
    );
    return { ...state, addedCities: newCities };
  }
  if (action.type === "CURRENT_CITY") {
    // console.log(action.payload.city)
    const findCity = state.addedCities.filter(
      (city) => city.name === action.payload.city
    );
    return { ...state, currentCity: findCity[0], currLoading: false };
  }
  if (action.type === "LOADING_CURR") {
    return { ...state, currError: false, currLoading: true };
  }
  if (action.type === "CURR_FAILED") {
    return { ...state, currError: true, currLoading: false };
  }
  if (action.type === "MAP_POS") {
    return {
      ...state,
      mapPos: { lat: action.payload.lat, lng: action.payload.lng },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
