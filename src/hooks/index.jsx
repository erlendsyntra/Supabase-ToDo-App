import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = (supabase, loginPath = "/") => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate(loginPath);
  };
  useEffect(() => {
    (async function getUserData() {
      const {
        data: { user: userData },
      } = await supabase.auth.getUser();
      if (userData) {
        setUser(userData);
      } else {
        navigate(loginPath);
      }
    })();
  }, []);
  return [user, signOut];
};
