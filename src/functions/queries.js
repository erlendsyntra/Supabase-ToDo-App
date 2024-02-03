export const selectTodos = async (supabase) => {
  const { data } = await supabase
    .from("todos")
    .select()
    .order("created_at", { ascending: false });
  return data;
};

export const insertTodo = async (supabase, task, user_id) => {
  return await supabase.from("todos").insert({ task, user_id });
};

export const updateTodo = async (supabase, id, checked) => {
  return await supabase.from("todos").update({ checked }).eq("id", id);
};

export const deleteTodo = async (supabase, id) => {
  return await supabase.from("todos").delete().eq("id", id);
};

export const deleteAllTodos = async (supabase, user_id) => {
  return await supabase.from("todos").delete().eq("user_id", user_id);
};

export const updateAllTodos = async (supabase, checked, user_id) => {
  return await supabase
    .from("todos")
    .update({ checked })
    .eq("user_id", user_id);
};
