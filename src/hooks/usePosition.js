import { useSearchParams } from "react-router-dom";
import { latCoords, lngCoords } from "../utils";
export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [latCoords(lat), lngCoords(lng)];
}
