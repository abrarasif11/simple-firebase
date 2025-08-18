import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import auth from '../../firebase/firebase.init'

const Login = () => {
  const provider = new GoogleAuthProvider()
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch(error => {
      console.log('Error', error)

    })

  }
  return (
    <div>
      Login page
      <button onClick={handleGoogleSignIn}>Login With Google..</button>
    </div>
  )
}

export default Login
