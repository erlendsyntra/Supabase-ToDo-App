import { FaRegTrashAlt as Trash } from "react-icons/fa";
import { FaCheckCircle as Checked } from "react-icons/fa";
import { FaRegCheckCircle as Unchecked } from "react-icons/fa";
import { IoCameraOutline as Camera } from "react-icons/io5";

const Todo = ({
  id,
  task,
  checked,
  created_at,
  imagePath,
  handleDeleteTodo,
  handleUpdateTodo,
}) => {
  return (
    <li className="text-l p-3 border-2 flex bg-white mb-2 rounded-md shadow-sm items-center">
      {imagePath ? <Camera className="mr-1" /> : ""}
      <div
        className={`flex-auto ${checked ? "line-through decoration-green-dark" : ""} max-w-90%`}
      >
        {task}
      </div>
      <div className="flex gap-2">
        <Trash
          className={`${checked ? "text-gray-400" : "text-red-500"} text-2xl`}
          onClick={() => handleDeleteTodo(id)}
        />
        <div className="bg-neutral-200 w-[1px]"></div>
        {checked ? (
          <Checked
            className="text-green-dark text-2xl"
            onClick={() => handleUpdateTodo(id, !checked)}
          />
        ) : (
          <Unchecked
            className="text-green-dark text-2xl"
            onClick={() => handleUpdateTodo(id, !checked)}
          />
        )}
      </div>
    </li>
  );
};
export default Todo;
