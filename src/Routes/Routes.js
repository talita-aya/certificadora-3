import Login from "../Screens/Login/Login";
import MinicursosOficinas from "../Screens/MinicursosOficinas/MinicursosOficinas";
import Home from "../Screens/Home/Home";
import SaibaMais from "../Screens/SaibaMais/SaibaMais";
import AdicionarNovo from "../Screens/AdicionarNovo/AdicionarNovo";
import Editar from "../Screens/Editar/Editar";
import PrivateRoutes from "./PrivateRoutes";

import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "../Context/AuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/minicursos-oficinas"
          element={
            <PrivateRoutes>
              <MinicursosOficinas />
            </PrivateRoutes>
          }
        />
        <Route
          path="/adicionar"
          element={
            <PrivateRoutes>
              <AdicionarNovo />
            </PrivateRoutes>
          }
        />
        <Route
          path="/editar"
          element={
            <PrivateRoutes>
              <Editar />
            </PrivateRoutes>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
