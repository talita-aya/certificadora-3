import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

function AuthProvider ({children}) {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState("");
  return (
    <AuthContext.Provider value={{auth, setAuth, userId, setUserId}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider