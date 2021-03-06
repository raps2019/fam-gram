import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase'

const AuthContext = React.createContext();

//Hook for Child Components to get auth object
//and re-render when it changes
export const useAuth = () => {
  return useContext(AuthContext)
}

//Provider component that wraps app and makes auth object
//Available to any child component that calls useAuth().
 export const AuthProvider = ({children}) => {

  const auth = useAuthProvider();

  return (
    auth.currentUser && <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

//Provider hook that creates auth object and handles state
const useAuthProvider = () => {
  const [ loading, setLoading ] = useState(true)
  const [ currentUser, setCurrentUser ] = useState(null);

  const signup = (email, password, username) => {
    return auth.createUserWithEmailAndPassword(email,password).then( (result) => {
      return result.user.updateProfile({
        displayName: username
      })
    })
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email)
  }

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( (user) => {
      setCurrentUser(user)
      setLoading(false);
    })
    return unsubscribe;
  }, [])

  return {
    currentUser,
    signup,
    login,
    resetPassword,
    loading,
  }
}