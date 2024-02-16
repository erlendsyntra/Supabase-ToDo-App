import { useContext, useEffect, useState } from "react";
import { getProfile } from "../functions/queries";
import { supabaseContext } from "../data/SupabaseProvider";
import { useNavigate } from "react-router-dom";
import { CgProfile as Profile } from "react-icons/cg";
import { useAuth } from "../hooks";

const Avatar = () => {
  const supabase = useContext(supabaseContext);
  const [user, signOut] = useAuth(supabase);
  const [imagePath, setImagePath] = useState(
    `${import.meta.env.VITE_SUPABASE_STORAGE_PROFILE_BASE_URL}default-image.jpeg`
  );
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
  const handleGetProfile = async () => {
    if (user) {
      const data = await getProfile(supabase);
      setImagePath(
        `${import.meta.env.VITE_SUPABASE_STORAGE_PROFILE_BASE_URL}${data[0].imagePath}`
      );
      setFirstName(data[0].firstName);
    }
  };

  useEffect(() => handleGetProfile, [user]);

  return (
    <img
      className="rounded-full size-6 ring-2 ring-green-light ring-offset-2 object-cover"
      src={imagePath}
      alt=""
      onClick={() => navigate("/profile")}
      title={firstName}
    />
  );
};
export default Avatar;
