import { PiDotsThreeFill as Dots } from "react-icons/pi";

const TodoFormPic = ({ handleSelectTodoPic, todoPicLabel }) => {
  return (
    <>
      <label htmlFor="file-upload" className="flex cursor-pointer ">
        <p className="bg-green-light w-32 h-5 rounded-md px-1 py-0.5 text-xs text-white">
          {todoPicLabel}
        </p>
        <Dots className="text-2xl" />
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => handleSelectTodoPic(e)}
      />
    </>
  );
};
export default TodoFormPic;
