import { Routes, Route } from "react-router-dom";
import SupabaseProvider from "./data/SupabaseProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Map from "./components/Map";
import Avatar from "./components/Avatar";

const App = () => {
  return (
    <SupabaseProvider>
      <Layout className="container">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/avatar" element={<Avatar />} />
        </Routes>
      </Layout>
    </SupabaseProvider>
  );
};
export default App;
