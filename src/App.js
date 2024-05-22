import Login from "./Screens/Login/Login";
import MinicursosOficinas from "./Screens/MinicursosOficinas/MinicursosOficinas";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/minicursos-oficinas" element={<MinicursosOficinas />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
