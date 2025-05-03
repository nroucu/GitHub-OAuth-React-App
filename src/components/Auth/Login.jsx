import { Button } from "@mui/material";
import { CLIENT_ID, REDIRECT_URI } from "../../utils/auth";

function Login() {
  return (
    <Button
      variant="contained"
      onClick={() =>
        window.location.assign(
          `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
        )
      }
    >
      Войти через GitHub
    </Button>
  );
}

export default Login;
