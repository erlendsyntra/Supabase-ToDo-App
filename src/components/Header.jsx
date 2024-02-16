import { useContext, useEffect, useState } from "react";
import { supabaseContext } from "../data/SupabaseProvider";
import { useNavigate } from "react-router-dom";
import { LuSun as Sun } from "react-icons/lu";
import { GrMapLocation as Map } from "react-icons/gr";

import { toggleDarkMode } from "../functions/helpers";
import Avatar from "./Avatar";

const Header = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkmode") ?? false
  );
  const navigate = useNavigate();

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
      <Map className="dark:text-white" onClick={() => navigate("/map")} />
      <Avatar onClick={() => navigate("/profile")} />
    </div>
  );
};
export default Header;
