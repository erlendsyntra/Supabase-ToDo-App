import { useContext } from "react";
import { supabaseContext } from "../data/SupabaseProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const supabase = useContext(supabaseContext);
  const navigate = useNavigate();
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  return (
    <div className="text-xl text-red-300">
      <h1>Header</h1>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
};
export default Header;
