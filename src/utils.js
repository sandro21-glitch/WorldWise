export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const latCoords = (lat) => {
  return Math.max(Math.min(lat, 90), -90);
}
export const lngCoords = (lng) => {
  return (((lng % 360) + 540) % 360) - 180;
}
