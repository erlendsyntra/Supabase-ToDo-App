import TodoFormGeo from "./TodoFormGeo";
import TodoFormPic from "./TodoFormPic";

const TodoFormExtras = ({
  longitude,
  setLongitude,
  latitude,
  setLatitude,
  todoPicLabel,
  handleSelectTodoPic,
}) => {
  return (
    <div className="flex gap-2 mt-3 items-center">
      <TodoFormPic
        className="flex-auto"
        todoPicLabel={todoPicLabel}
        handleSelectTodoPic={handleSelectTodoPic}
      />
      <TodoFormGeo
        longitude={longitude}
        setLongitude={setLongitude}
        latitude={latitude}
        setLatitude={setLatitude}
      />
    </div>
  );
};
export default TodoFormExtras;
