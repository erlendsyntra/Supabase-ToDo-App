import { createClient } from "@supabase/supabase-js";
import { createContext } from "react";

//create the supabase client or connection
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

//create the supabase context so we can use it everywhere
export const supabaseContext = createContext();

//provide the supabase (db) to the context, to be wrapped around all the components that need it.
const SupabaseProvider = ({ children }) => {
  return (
    <supabaseContext.Provider value={supabase}>
      {children}
    </supabaseContext.Provider>
  );
};
export default SupabaseProvider;
