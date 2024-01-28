import { createClient } from "@supabase/supabase-js";
import { useContext, useEffect, useState } from "react";
import { supabaseContext } from "../data/SupabaseProvider";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_KEY
// );

const Home = () => {
  const [todos, setTodos] = useState([]);
  const supabase = useContext(supabaseContext);
  const selectTodos = async () => {
    const { data } = await supabase
      .from("todos")
      .select()
      .order("created_at", { ascending: false });
    setTodos(data);
  };

  const getUser = async () => {
    const data = await supabase.auth.getUser();
    console.log(data);
  };
  useEffect(() => {
    selectTodos();
    getUser();
  }, []);
  return (
    <>
      <h1>Home</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
};
export default Home;
