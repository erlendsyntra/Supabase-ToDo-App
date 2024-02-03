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

const Home = () => {
  const supabase = useContext(supabaseContext);
  const [user, signOut] = useAuth(supabase);
  const [todos, setTodos] = useState([]);

  const handleSelectTodos = async () => {
    const data = await selectTodos(supabase);
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
    if (user.id) {
      handleSelectTodos();
    }
  }, [user]);
  return (
    <>
      <AddTodoForm
        user_id={user.id}
        supabase={supabase}
        handleInsertTodo={handleInsertTodo}
      />
      <Todos
        todos={todos}
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
