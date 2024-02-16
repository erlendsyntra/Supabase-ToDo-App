import { PiMapPinLineFill as Marker } from "react-icons/pi";

const TodoFormGeo = ({ longitude, setLongitude, latitude, setLatitude }) => {
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
