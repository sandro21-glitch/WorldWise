import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);
  // const notify = () => toast.error("Here is your toast.");

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");
    if (error) {
      toast.error(error);
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, position, error, getPosition };
}
