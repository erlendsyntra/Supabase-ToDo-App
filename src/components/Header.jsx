import { useContext, useEffect, useState } from "react";
import { supabaseContext } from "../data/SupabaseProvider";
import { useNavigate } from "react-router-dom";
import { LuSun as Sun } from "react-icons/lu";
import { GrMapLocation as Map } from "react-icons/gr";
import { CgProfile as Profile } from "react-icons/cg";
import { toggleDarkMode } from "../functions/helpers";

const Header = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkmode") ?? false
  );
  const supabase = useContext(supabaseContext);
  const navigate = useNavigate();
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  console.log("dark: ", isDark);

  useEffect(() => {
    localStorage.setItem("darkmode", isDark);
    toggleDarkMode(isDark);
  }, [isDark]);
  return (
    <div className="flex gap-5 text-2xl">
      <h1
        className="text-green-dark font-extrabold flex-auto"
        onClick={() => navigate("/home")}
      >
        TODOAPP
      </h1>
      <Sun className="dark:text-white" onClick={() => setIsDark(!isDark)} />
      <Map className="dark:text-white" />
      {/* <Profile onClick={signOut} /> */}
      <Profile
        className="dark:text-white"
        onClick={() => navigate("/profile")}
      />
      {/* <button onClick={signOut}></button> */}
    </div>
  );
};
export default Header;
