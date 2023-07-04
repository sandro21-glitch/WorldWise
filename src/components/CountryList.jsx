import { useFormContext } from "../context/FormContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const splideOptions = {
  direction: "ttb",
  wheel: true,
  heightRatio: 1.2,
  perPage: 7,
  gap: "2em",
  updateOnMove: true,
  arrows: false,
  pagination: false,
  breakpoints: {
    1024: {
      perPage: 3,
      heightRatio: 0.6,
    },
    768: {
      perPage: 3,
      heightRatio: 0.6,
    },
    480: {
      perPage: 2,
      heightRatio: 0.5,
    },
  },
};
const CountryList = () => {
  const { addedCities } = useFormContext();
  const countryList = addedCities
    .map((city) => city.code)
    .reduce((acc, cur) => {
      if (!acc.includes(cur)) {
        acc.push(cur);
      }
      return acc;
    }, []);

  if (addedCities.length < 1) {
    return (
      <p className="max-w-[80%] mx-auto text-white text-center">
        👋 Add your first city by clicking on a city on the map
      </p>
    );
  }
  return (
    <Splide options={splideOptions} className="space-y-5">
      {countryList.map((code, index) => {
        return (
          <SplideSlide key={index} className="w-full flex items-center justify-between">
            <img
              key={index}
              src={`https://flagcdn.com/256x192/${code
                ?.toString()
                .toLowerCase()}.png`}
              alt={code}
              className="w-20 h-auto"
            />
            <h3>{code}</h3>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default CountryList;
