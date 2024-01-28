import { Routes, Route } from "react-router-dom";
import SupabaseProvider from "./data/SupabaseProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <SupabaseProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </SupabaseProvider>
  );
};
export default App;
