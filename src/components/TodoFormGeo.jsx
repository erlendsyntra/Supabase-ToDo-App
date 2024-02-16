import { useEffect } from "react";
import { PiMapPinLineFill as Marker } from "react-icons/pi";

const TodoFormGeo = ({ longitude, setLongitude, latitude, setLatitude }) => {
  const handleLocation = () => {
    if (navigator.geolocation) {
      console.log("in geo");
      navigator.geolocation.getCurrentPosition(
        successCallback,
        failureCallback
      );
    }
  };

  const successCallback = (position) => {
    setLongitude(position.coords.longitude);
    setLatitude(position.coords.latitude);
    console.log("both: ", longitude, latitude);
  };
  const failureCallback = () => {
    console.error("error");
  };

  useEffect(() => handleLocation(), []);

  return (
    <>
      <input
        id="longitude"
        type="text"
        className="bg-green-light w-1/4 h-5 rounded-md px-1 py-0.5 text-xs text-white placeholder-white outline-none"
        value={longitude}
        placeholder="longitude"
        maxLength={12}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <input
        id="latitude"
        type="text"
        className="bg-green-light w-1/4 h-5 rounded-md px-1 py-0.5 text-xs text-white placeholder-white outline-none"
        value={latitude}
        placeholder="latitude"
        maxLength={12}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <Marker />
    </>
  );
};
export default TodoFormGeo;
