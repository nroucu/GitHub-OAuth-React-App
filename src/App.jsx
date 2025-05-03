import React, { useEffect } from "react";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "./utils/auth";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      axios
        .post(
          `https://github.com/login/oauth/access_token`,
          {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
            redirect_uri: REDIRECT_URI,
          },
          {
            headers: { Accept: "application/json" },
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          window.location.href = "/";
        })
        .catch((err) => console.error("Ошибка при получении токена", err));
    }
  }, []);

  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  };

  return (
    <BrowserRouter>
      <Header />
      {!localStorage.getItem("token") ? (
        <button onClick={handleLogin}>Авторизоваться через GitHub</button>
      ) : (
        <AppRouter />
      )}
    </BrowserRouter>
  );
}

export default App;
