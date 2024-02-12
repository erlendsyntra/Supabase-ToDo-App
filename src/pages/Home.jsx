import { useContext, useEffect, useState } from "react";
import { supabaseContext } from "../data/SupabaseProvider";
import { useAuth } from "../hooks";
import Todos from "../components/Todos";
import {
  deleteTodo,
  selectTodos,
  insertTodo,
  updateTodo,
  deleteAllTodos,
  updateAllTodos,
} from "../functions/queries";
import AddTodoForm from "../components/AddTodoForm";
import MassHandlers from "../components/MassHandlers";
import Switch from "react-switch";

const Home = () => {
  const supabase = useContext(supabaseContext);
  const [user, signOut] = useAuth(supabase);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(false);

  const handleSelectTodos = async () => {
    const data = await selectTodos(supabase, filter);
    setTodos(data);
  };

  const handleInsertTodo = async (task) => {
    await insertTodo(supabase, task, user.id);
    handleSelectTodos(supabase);
  };

  const handleUpdateTodo = async (id, checked) => {
    await updateTodo(supabase, id, checked);
    handleSelectTodos(supabase);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(supabase, id);
    handleSelectTodos(supabase);
  };

  const handleDeleteAll = async () => {
    await deleteAllTodos(supabase, user.id);
    handleSelectTodos(supabase);
  };

  const handleToggleAll = async (checked) => {
    await updateAllTodos(supabase, checked, user.id);
    handleSelectTodos(supabase);
  };
  useEffect(() => {
    handleSelectTodos();
  }, [filter]);
  useEffect(() => {
    if (user.id) {
      handleSelectTodos();
    }
  }, [user]);
  return (
    <>
      <div className="rounded-lg bg-green-dark px-2 py-3 relative mb-3">
        <label htmlFor="filter-switch">
          <span className="text-white mr-2 align-top">Hide completed</span>
          <Switch
            id="filter-switch"
            checked={filter}
            onChange={() => setFilter(!filter)}
            handleDiameter={20}
            height={20}
            width={48}
            onColor="#65c4ae"
            className=""
          />
        </label>
        <AddTodoForm
          user_id={user.id}
          supabase={supabase}
          handleInsertTodo={handleInsertTodo}
        />
      </div>
      <Todos
        todos={todos}
        filter={filter}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
      {todos.length > 1 && (
        <MassHandlers
          todos={todos}
          handleDeleteAll={handleDeleteAll}
          handleToggleAll={handleToggleAll}
        />
      )}
    </>
  );
};
export default Home;
