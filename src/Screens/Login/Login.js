import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Snackbar, Alert, styled } from "@mui/material";
import { useUserAuth } from "../../Context/AuthContext";

import "./Login.css";
import LoginImg from "../../Assets/login-img.svg";

const Input = styled(TextField)`
  & label {
    color: #e6e6e6;
    font-family: "Ubuntu";
  }

  & label.Mui-focused {
    color: #e6e6e6;
  }

  & .MuiOutlinedInput-root {
    color: #e6e6e6;
    & fieldset {
      border-color: #e6e6e6;
      border-radius: 10px;
    }
    &:hover fieldset {
      border-color: #e6e6e6;
    }
    &.Mui-focused fieldset {
      border-color: #e6e6e6;
    }
  }
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/minicursos-oficinas");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <div className="login-container">
      <h1>BEM - VINDAS!</h1>
      <img src={LoginImg} alt="logo do projeto Meninas Digitais" />
      <div className="login-info">
        <Input
          fullWidth
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          margin="normal"
          onChange={handleEmailChange}
        />
        <Input
          fullWidth
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          margin="normal"
          onChange={handlePasswordChange}
          type="password"
        />
        <Button
          onClick={handleSignIn}
          //onClick={() => navigate("/minicursos-oficinas")}
          variant="contained"
          sx={[
            {
              borderRadius: "50px",
              width: "100%",
              height: "50px",
              margin: "25px 0",
              fontFamily: "Ubuntu",
              fontSize: "18px",
              fontWeight: "normal",
              textTransform: "none",
              backgroundColor: "#772AAE",
              color: "#fff",

              ":hover": {
                backgroundColor: "#97538B",
              },
            },
          ]}
        >
          Entrar
        </Button>
        <Snackbar
          open={!!error}
          autoHideDuration={3000}
          onClose={() => setError("")}
        >
          <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Login;
