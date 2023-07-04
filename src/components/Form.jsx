import { useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/usePosition";
import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();
  const { fetchCity, singleCity, addNewCity, loading, error } =
    useFormContext();
  const { name, code } = singleCity;
  const [notes, setNotes] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    setCityName(name);
  }, [singleCity]);

  useEffect(() => {
    fetchCity(lat, lng);
  }, [lat, lng]);

  const handleAddCity = (e) => {
    e.preventDefault();
    addNewCity(notes, startDate);
    navigate("/app");
  };

  if (!lat && !lng) {
    navigate("/app");
    return null;
  }

  if (name === "") {
    return (
      <p className="max-w-[80%] mx-auto text-white text-center">
        City not found, please click the correct city
      </p>
    );
  }
  
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <form
      className="bg-lightDark rounded-lg p-7 flex flex-col gap-5"
      onSubmit={(e) => handleAddCity(e)}
    >
      <div className="flex flex-col relative">
        <label
          htmlFor="name"
          className="mb-1 capitalize text-white font-semibold"
        >
          City name
        </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName || ""}
          className="bg-veryLightDark focus:bg-white outline-none text-black p-2 rounded-md"
        />
        <img
          src={`https://flagcdn.com/16x12/${code
            ?.toString()
            .toLowerCase()}.png`}
          alt={code}
          className="w-5 h-auto absolute right-2 top-[2.5rem]"
        />
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="date"
          className="mb-1 capitalize text-white font-semibold"
        >
          When did you go to {cityName}
        </label>
        <DatePicker
          id="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="w-full bg-veryLightDark focus:bg-white outline-none text-black p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col ">
        <label
          htmlFor="note"
          className="mb-1 capitalize text-white font-semibold"
        >
          Notes about your trip to {cityName}
        </label>
        <textarea
          type="text"
          id="note"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className=" bg-veryLightDark focus:bg-white outline-none text-black p-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-greenBtn uppercase w-full py-1 font-bold text-strongDark max-w-[30%] mx-auto rounded-md
        hover:opacity-70 hover:text-white transition-all duration-150 ease-in"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
