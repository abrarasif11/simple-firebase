import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      Login page
      {user ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <h4>{user.email}</h4>
          <img src={user.photoURL} alt="photoURL" />
        </div>
      )}
    </div>
  );
};

export default Login;
