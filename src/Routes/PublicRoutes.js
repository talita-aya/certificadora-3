import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Screens/Home/Home';
import Login from '../Screens/Login/Login';
import MinicursosOficinas from '../Screens/MinicursosOficinas/MinicursosOficinas';
import SaibaMais from '../Screens/SaibaMais/SaibaMais';

const PublicRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/minicursos-oficinas" element={<MinicursosOficinas/>}/>
          <Route path="/saiba-mais" element={<SaibaMais/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default PublicRoutes