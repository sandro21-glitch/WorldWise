import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useFormContext } from "../context/FormContext";
import Loading from "./Loading";
import Error from "./Error";
import { formatDate } from "../utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const splideOptions = {
  direction: "ttb",
  wheel: true,
  heightRatio: 1.2,
  perPage: 10,
  gap: "2em",
  updateOnMove: true,
  arrows: false,
  pagination: false,
  breakpoints: {
    1024: {
      perPage: 3,
      heightRatio: 0.4,
    },
    768: {
      perPage: 3,
      heightRatio: 0.4,
    },
    480: {
      perPage: 3,
      heightRatio: 0.4,
    },
    380: {
      perPage: 2,
      heightRatio: 0.3,
    },
  },
};
const CityList = () => {
  const { addedCities, removeCity, currentCity, loading, error, setMapPos } =
    useFormContext();

  if (addedCities.length < 1) {
    return (
      <p className="max-w-[80%] mx-auto text-white text-center">
        👋 Add your first city by clicking on a city on the map
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
    <Splide
      options={splideOptions}
      className="space-y-3 max-h-[10rem] md:max-h-[35rem]"
    >
      {addedCities.map((city) => {
        const { name, country, code, lat, lng, note, date } = city;
        return (
          <SplideSlide key={name}>
            <div
              className={`w-full flex items-center justify-between bg-lightDark border-l-greenBtn ${
                currentCity.name === name ? "border-greenBtn border-2" : ""
              } border-l-[6px] rounded-lg px-5 py-3`}
            >
              <Link
                to={`${name}?lat=${lat}&lng=${lng}`}
                className="flex items-center gap-5"
                onClick={() => setMapPos(lat, lng)}
              >
                <img
                  src={`https://flagcdn.com/16x12/${code
                    ?.toString()
                    .toLowerCase()}.png`}
                  alt={name}
                  className="w-5 h-auto"
                />
                <h3 className="mb-0 text-white font-bold">{name}</h3>
              </Link>
              <div className="flex gap-3 md:gap-10">
                <time className="text-white">({formatDate(date)})</time>
                <button
                  type="button"
                  onClick={() => removeCity(name)}
                  className="text-white rounded-full w-7 h-7 flex items-center justify-center bg-strongDark hover:bg-orange-400 transition-colors ease-in duration-150"
                >
                  <MdOutlineClose className="text-lg text-white" />
                </button>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default CityList;
