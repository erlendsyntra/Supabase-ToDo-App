import { useState } from "react";

const AddTodoForm = ({ user_id, supabase, handleInsertTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleInsertTodo(task);
    setTask("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter an activity"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button>+</button>
    </form>
  );
};
export default AddTodoForm;
