import { v4 as uuidv4 } from "uuid";
import { useContext, useState, useEffect } from "react";
import { supabaseContext } from "../data/SupabaseProvider";
import { useAuth } from "../hooks";
import {
  getProfile,
  removePicture,
  updateProfile,
  uploadPicture,
} from "../functions/queries";

const Profile = () => {
  const supabase = useContext(supabaseContext);
  const [user, signOut] = useAuth(supabase);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleGetProfile = async () => {
    const data = await getProfile(supabase);
    setFirstName(data[0].first_name);
    setLastName(data[0].last_name);
    setImagePath(data[0].imagePath);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentImagePath = profilePic ? await handlePicture() : imagePath;
    await updateProfile(
      supabase,
      user.id,
      firstName,
      lastName,
      currentImagePath
    );
    handleGetProfile();
  };

  const handlePicture = async () => {
    const newImagePath =
      imagePath === "default-image.jpeg"
        ? await handlePictureUpload()
        : await handlePictureUpdate();
    setProfilePic(null);
    return newImagePath;
  };

  const handlePictureUpload = async () => {
    const ext = profilePic.name.split(".").reverse()[0];
    const path = user.id + "/" + uuidv4() + "." + ext;
    const data = await uploadPicture(supabase, "profilePics", path, profilePic);
    return data.path;
  };

  const handlePictureUpdate = async () => {
    await removePicture(supabase, "profilePics", imagePath);
    const newImagePath = await handlePictureUpload();
    return newImagePath;
  };

  useEffect(() => {
    if (user.id) {
      handleGetProfile();
    }
  }, [user]);

  return (
    <div>
      <form
        className="bg-green-dark rounded-md p-3 text-white"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="font-bold text-sm mb-4 text-right">
          <button
            type="submit"
            className="bg-white text-green-dark py-1 px-2 rounded-xl mr-3"
          >
            Submit
          </button>
          <button
            className="bg-green-light text-white py-1 px-2 rounded-xl mr-2"
            onClick={signOut}
          >
            Signout
          </button>
        </div>
        <div>
          <label className="font-semibold" htmlFor="firstName">
            First name:{" "}
          </label>
          <input
            className="bg-green-light border-green-dark rounded-md px-1 outline-none"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            // onBlur={handleSubmit}
          />
        </div>
        <div className="mt-2">
          <label className="font-semibold" htmlFor="lastName">
            Last name:{" "}
          </label>
          <input
            className="bg-green-light border-green-dark rounded-md px-1 outline-none"
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            // onBlur={handleSubmit}
          />
        </div>
        <div className="mt-2">
          {imagePath && (
            <img
              src={`${import.meta.env.VITE_SUPABASE_STORAGE_PROFILE_BASE_URL}${imagePath}`}
              alt=""
              className="object-cover object-center h-107 w-96"
            />
          )}
          <input
            type="file"
            onChange={(e) => {
              setProfilePic(e.target.files[0]);
            }}
            className="rounded-sm mt-3"
          />
        </div>
      </form>
    </div>
  );
};
export default Profile;
