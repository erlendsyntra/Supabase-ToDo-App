import { FaRegTrashAlt as Trash } from "react-icons/fa";
import { FaCheckCircle as Checked } from "react-icons/fa";
import { FaRegCheckCircle as Unchecked } from "react-icons/fa";

const Todo = ({
  id,
  task,
  checked,
  created_at,
  handleDeleteTodo,
  handleUpdateTodo,
}) => {
  return (
    <li className="text-l p-3 border-2 flex gap-2 bg-white mb-2 rounded-md shadow-sm">
      <div
        className={`flex-auto ${checked ? "line-through decoration-green-dark" : ""}`}
      >
        {task}
      </div>
      <Trash
        className={`${checked ? "text-gray-400" : "text-red-500"}`}
        onClick={() => handleDeleteTodo(id)}
      />
      {checked ? (
        <Checked
          className="text-green-dark "
          onClick={() => handleUpdateTodo(id, !checked)}
        />
      ) : (
        <Unchecked
          className="text-green-dark"
          onClick={() => handleUpdateTodo(id, !checked)}
        />
      )}
    </li>
  );
};
export default Todo;
