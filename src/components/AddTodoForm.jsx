import { useEffect, useState } from "react";

const AddTodoForm = ({ user_id, supabase, handleInsertTodo }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    !task && submit ? setError(true) : setError(false);
  }, [task, submit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (task) {
      handleInsertTodo(task);
      setError(false);
      setTask("");
      setSubmit(false);
    } else {
      setError(true);
    }
  };
  return (
    <form
      className="rounded-lg bg-green-dark px-2 py-3 relative mb-3"
      action=""
      onSubmit={handleSubmit}
    >
      <input
        className={`rounded-lg ${error ? "bg-red-400" : "bg-green-light"} text-white placeholder-white h-10 p-4 pr-8 border-none outline-none w-[calc(100%-20px)]`}
        type="text"
        placeholder="Enter an activity"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button className="absolute right-2 top-3 w-10 h-10 rounded-full bg-white text-green-dark text-2xl">
        +
      </button>
    </form>
  );
};
export default AddTodoForm;
