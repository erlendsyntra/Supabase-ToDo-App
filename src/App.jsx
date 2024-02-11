import { Routes, Route } from "react-router-dom";
import SupabaseProvider from "./data/SupabaseProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <SupabaseProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </SupabaseProvider>
  );
};
export default App;
