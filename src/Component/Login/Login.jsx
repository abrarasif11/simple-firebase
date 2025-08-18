import { GoogleAuthProvider } from 'firebase/auth/web-extension'
import React from 'react'

const Login = () => {
  const provider = new GoogleAuthProvider()
  const handleGoogleSignIn = () =>{

  }
  return (
    <div>
      Login page
      <button onClick={}>Login With Google..</button>
    </div>
  )
}

export default Login
