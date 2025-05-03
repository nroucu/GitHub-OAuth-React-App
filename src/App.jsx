import { useEffect } from "react";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "./utils/auth";

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
          },
          {
            headers: { Accept: "application/json" },
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
