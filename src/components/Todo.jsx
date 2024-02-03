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
    <li className="p-8 border-2 flex gap-2">
      <div
        className={`flex-auto ${checked ? "line-through decoration-green-500" : ""}`}
      >
        {task}
      </div>
      <Trash className="" onClick={() => handleDeleteTodo(id)} />
      {checked ? (
        <Checked
          className="text-green-500"
          onClick={() => handleUpdateTodo(id, !checked)}
        />
      ) : (
        <Unchecked
          className="text-green-500"
          onClick={() => handleUpdateTodo(id, !checked)}
        />
      )}
    </li>
  );
};
export default Todo;
