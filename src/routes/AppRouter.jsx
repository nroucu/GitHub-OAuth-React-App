import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProfilePage from "../pages/ProfilePage";
import ReposPage from "../pages/ReposPage";
import UsersPage from "../pages/UsersPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/repos" element={<ReposPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}

export default AppRouter;
