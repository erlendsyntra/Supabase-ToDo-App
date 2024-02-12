import { supabase } from "@supabase/auth-ui-shared";

export const selectTodos = async (supabase, filter) => {
  let query = supabase
    .from("todos")
    .select()
    .order("created_at", { ascending: false });
  if (filter) {
    query = query.eq("checked", false);
  }

  const { data } = await query;
  return data;
};

export const insertTodo = async (supabase, task, user_id, imagePath) => {
  return await supabase.from("todos").insert({ task, user_id, imagePath });
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

export const getProfile = async (supabase) => {
  const { data } = await supabase.from("profiles").select();
  return data;
};

export const updateProfile = async (
  supabase,
  id,
  first_name,
  last_name,
  imagePath
) => {
  return await supabase
    .from("profiles")
    .update({ first_name, last_name, imagePath })
    .eq("id", id);
};

export const uploadPicture = async (supabase, bucket, path, picture) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, picture);
  return data;
};

export const removePicture = async (supabase, bucket, path) => {
  const { data, error } = await supabase.storage.from(bucket).remove([path]);
};
