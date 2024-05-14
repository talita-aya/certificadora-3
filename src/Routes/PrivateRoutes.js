import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Screens/Home/Home';
import Login from '../Screens/Login/Login';
import MinicursosOficinas from '../Screens/MinicursosOficinas/MinicursosOficinas';
import SaibaMais from '../Screens/SaibaMais/SaibaMais';
import AdicionarNovo from '../Screens/AdicionarNovo/AdicionarNovo';
import Editar from '../Screens/Editar/Editar';

const PrivateRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/minicursos-oficinas" element={<MinicursosOficinas/>}/>
          <Route path="/saiba-mais" element={<SaibaMais/>}/>
          <Route path="/adicionar" element={<AdicionarNovo/>}/>
          <Route path='/editar' element={<Editar/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default PrivateRoutes