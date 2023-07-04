import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";
import { useGeolocation } from "../hooks/useGeolocation";
import { Toaster } from "react-hot-toast";
const ClickEvent = () => {
  const navigate = useNavigate();
  const map = useMap();
  useEffect(() => {
    function handleClick(e) {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    }

    map.on("click", handleClick);

    return () => {
      map.off("click", handleClick);
    };
  }, [map, navigate]);

  return null;
};

const Map = () => {
  const { addedCities, mapPos: cityPos } = useFormContext();
  const {
    isLoading,
    position: geoLocationPosition,
    error,
    getPosition,
  } = useGeolocation();
  const [mapPosition, setMapPosition] = useState([
    41.539935835691466, 45.00755310058594,
  ]);
  const mapRef = useRef();

  useEffect(() => {
    if (geoLocationPosition) {
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);

      if (mapRef.current) {
        const mapInstance = mapRef.current;
        mapInstance.setView(
          [geoLocationPosition.lat, geoLocationPosition.lng],
          mapInstance.getZoom(),
          {
            animate: true,
          }
        );
      }
    }
  }, [geoLocationPosition]);
  useEffect(() => {
    if (cityPos) {
      setMapPosition([cityPos.lat, cityPos.lng]);

      if (mapRef.current) {
        const mapInstance = mapRef.current;
        mapInstance.setView([cityPos.lat, cityPos.lng], mapInstance.getZoom(), {
          animate: true,
        });
      }
    }
  }, [cityPos]);

  return (
    <div className="flex-1 relative">
      <MapContainer
        ref={mapRef}
        center={[41.692398751628424, 44.80293273925781]}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ClickEvent />
        {addedCities.map((city) => (
          <Marker key={city.lat + city.lng} position={[city.lat, city.lng]}>
            <Popup>
              <div className="flex items-center gap-2 justify-center">
                <p className="mb-0 text-sm">{city.name}</p>
                <img
                  src={`https://flagcdn.com/16x12/${city.code
                    ?.toString()
                    .toLowerCase()}.png`}
                  alt={city.code}
                  className="mb-0"
                />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <button
        onClick={() => getPosition()}
        className={`z-[999] absolute bottom-10 left-[45%] bg-greenBtn w-[10rem] 
        p-2 text-sm text-lightDark uppercase font-semibold rounded-md `}
      >
        {isLoading
          ? "Loading..."
          : error
          ? "Use Your Position"
          : "Use Your Position"}
      </button>
      <Toaster position="top-center" />
    </div>
  );
};

export default Map;
