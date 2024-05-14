import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, TextField, styled} from "@mui/material"; 

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/config'

import "./Login.css";
import LoginImg from '../../Assets/login-img.svg'

const Input = styled(TextField)`
  & label {
    color: #E6E6E6;
    font-family: 'Ubuntu';
  }

  & label.Mui-focused {
    color: #E6E6E6;
  }

  & .MuiOutlinedInput-root {
    color: #E6E6E6;
    & fieldset {
      border-color: #E6E6E6;
      border-radius: 10px;
    }
    &:hover fieldset {
      border-color: #E6E6E6;
    }
    &.Mui-focused fieldset {
      border-color: #E6E6E6;
    }
  }
`
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();

  const autenticarUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userLogged) => {
        console.log("Usuário autenticado com sucesso: " + JSON.stringify(userLogged))
      })

      .catch((error) => {
        console.log("Erro ao autenticar usuário: " + JSON.stringify(error))
      })
  }

  return (
    <div className="login-container">
      <h1>BEM - VINDAS!</h1>
      <img
        src={LoginImg}
        alt="logo do projeto Meninas Digitais"
      />
      <div className="login-info">
        <Input
          fullWidth
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          margin="normal"
          onChange={setEmail}
        />
        <Input
          fullWidth
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          margin="normal"
          onChange={setPassword}
        />
        <Button 
          onClick={autenticarUser}
          variant="contained" 
          sx={[
            { 
            borderRadius: '50px',
            width: '100%',
            height: '50px',
            margin: '25px 0',
            fontFamily: 'Ubuntu', 
            fontSize: '18px',
            fontWeight: 'normal',
            textTransform: 'none',
            backgroundColor: '#772AAE',
            color: '#fff',

            ":hover": {
              backgroundColor: "#97538B",
            }
            }
          ]}
        >
          Entrar
        </Button>
      </div>
    </div>
  )
}

export default Login