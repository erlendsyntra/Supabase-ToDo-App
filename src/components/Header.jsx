import { useContext } from "react";
import { supabaseContext } from "../data/SupabaseProvider";
import { useNavigate } from "react-router-dom";
import { LuSun as Sun } from "react-icons/lu";
import { GrMapLocation as Map } from "react-icons/gr";
import { CgProfile as Profile } from "react-icons/cg";

const Header = () => {
  const supabase = useContext(supabaseContext);
  const navigate = useNavigate();
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  return (
    <div className="flex gap-5 text-2xl">
      <h1
        className="text-green-dark font-extrabold flex-auto"
        onClick={() => navigate("/home")}
      >
        TODOAPP
      </h1>
      <Sun className="" />
      <Map />
      {/* <Profile onClick={signOut} /> */}
      <Profile onClick={() => navigate("/profile")} />
      {/* <button onClick={signOut}></button> */}
    </div>
  );
};
export default Header;
