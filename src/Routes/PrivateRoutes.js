import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../Context/AuthContext';

const PrivateRoutes = ({children}) => {
  let { user } = useUserAuth()

  // se não tiver o user (não logado), pede o login 
  if(!user) {
    return <Navigate to="/login"/>
  }

  return children
}

export default PrivateRoutes