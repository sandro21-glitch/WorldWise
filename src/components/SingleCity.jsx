import { useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/usePosition";
import { useFormContext } from "../context/FormContext";
import BackButton from "./BackButton";
import Loading from "./Loading";
import Error from "./Error";
import { formatDate } from "../utils";
const SingleCity = () => {
  const [lat, lng] = useUrlPosition();
  const { getSingleCity, currentCity, currLoading, currError } = useFormContext();

  useEffect(() => {
    getSingleCity(lat, lng);
  }, [lat, lng, currentCity]);
  
  if (currLoading) {
    return <Loading />;
  }
  if (currError) {
    return <Error />;
  }
  const { name, country, code, note, date } = currentCity;
  return (
    <section className="bg-lightDark rounded-lg p-7 space-y-7">
      <div>
        <h6 className="text-[#aaa] uppercase text-xs font-bold mb-2">
          City Name
        </h6>
        <div className="flex items-center gap-2">
          <img
            src={`https://flagcdn.com/16x12/${code
              ?.toString()
              .toLowerCase()}.png`}
            alt={name}
            className="w-5 h-auto"
          />
          <h5 className="mb-0">{name}</h5>
        </div>
      </div>
      <div>
        <h6 className="text-[#aaa] uppercase text-xs font-bold mb-2">
          YOU WENT TO ARLIT ON
        </h6>
        <h5 className="mb-0">{formatDate(date)}</h5>
      </div>
      <div>
        <h6 className="text-[#aaa] uppercase text-xs font-bold mb-2">
          YOUR NOTES
        </h6>
        <h5 className="mb-0 normal-case">{note}</h5>
      </div>
      <div>
        <h6 className="text-[#aaa] uppercase text-xs font-bold mb-2">
          learn more
        </h6>
        <a
          href={`https://en.wikipedia.org/wiki/${name}`}
          target="_blank"
          className="mb-0 text-orange-300 underline"
        >
          Check out {name} on Wikipedia →
        </a>
      </div>
      <BackButton />
    </section>
  );
};

export default SingleCity;
