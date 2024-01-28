import { useContext, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabaseContext } from "../data/SupabaseProvider";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const supabase = useContext(supabaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (e) => {
      e === "SIGNED_IN" ? navigate("/home") : "";
    });
  }, []);
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={["github", "slack"]}
    />
  );
};

export default Login;
