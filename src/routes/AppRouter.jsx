import { Routes, Route } from "react-router-dom";
import ProfilePage from "../components/ProfilePage";
import ReposPage from "../components/ReposPage";
import UsersPage from "../components/UsersPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/repos" element={<ReposPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}

export default AppRouter;
