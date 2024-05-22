import React, {createContext, useEffect, useState, useContext} from 'react'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/config'

const UserAuthContext = createContext()

export function UserAuthContextProvider ({children}) {
  const [user, setUser] = useState("")

  function signIn (email, password) {
    return signInWithEmailAndPassword (auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <UserAuthContext.Provider value={{user, signIn}}>
      {children}
    </UserAuthContext.Provider>
  )
}

export function useUserAuth () {
  return useContext(UserAuthContext)
}