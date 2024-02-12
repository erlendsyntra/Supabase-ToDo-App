import { v4 as uuidv4 } from "uuid";
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
  uploadPicture,
} from "../functions/queries";
import AddTodoForm from "../components/AddTodoForm";
import MassHandlers from "../components/MassHandlers";
import Switch from "react-switch";
import { PiDotsThreeFill as Dots } from "react-icons/pi";

const Home = () => {
  const supabase = useContext(supabaseContext);
  const [user, signOut] = useAuth(supabase);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(false);
  const [todoPic, setTodoPic] = useState(null);
  const [todoPicLabel, setTodoPicLabel] = useState("");

  const handleSelectTodos = async () => {
    const data = await selectTodos(supabase, filter);
    setTodos(data);
  };

  const handleInsertTodo = async (task) => {
    const path = await handlePictureUpload();
    await insertTodo(supabase, task, user.id, path);
    setTodoPic(null);
    setTodoPicLabel("");
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

  const handleSelectTodoPic = (e) => {
    const fileName = e.target.files[0].name;
    setTodoPic(e.target.files[0]);
    setTodoPicLabel(fileName.substring(0, 20));
    console.log(e.target.files[0]);
  };

  const handlePictureUpload = async () => {
    const ext = todoPic.name.split(".").reverse()[0];
    const path = user.id + "/" + uuidv4() + "." + ext;
    const data = await uploadPicture(supabase, "todoPics", path, todoPic);
    return data.path;
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
        <label
          htmlFor="file-upload"
          className="flex cursor-pointer mt-3 items-center"
        >
          <p className="bg-green-light w-32 h-5 rounded-md px-1 py-0.5 text-xs text-white">
            {todoPicLabel}
          </p>
          <Dots className="text-2xl" />
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleSelectTodoPic}
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
