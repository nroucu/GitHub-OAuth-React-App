import axios from "axios";

export const getUserData = (token) =>
  axios.get("https://api.github.com/user", {
    headers: { Authorization: `token ${token}` },
  });
