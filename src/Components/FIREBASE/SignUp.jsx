import React, { useState } from "react";
import { Link } from "react-router";
import { auth, provider } from "../firebase";  
// import { ref, set } from "firebase/database";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  // Manual Signup 
  const handleSignUp = (e) => {
    e.preventDefault();
    if (pswd.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, pswd)
      .then((userCredential) => {
        console.log("User Created:", userCredential.user);
        alert("Signup successful! You can now log in.");
      })
      .catch((error) => {
        console.error("Signup Error:", error);
        alert(error.message); 
      });
  };

  //   Google Sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert(`Welcome ${result.user.displayName}!`);
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  return (
    <div>
      <form className="w-50 mx-auto border m-4 p-4" onSubmit={handleSignUp}>
        <h2>Sign Up Form</h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-light border-secondary mt-2 me-3"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="btn btn-dark mt-2"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
        <br />
        <Link to="/login" className="text-decoration-none">
          Already have an account? Login now
        </Link>
      </form>
    </div>
  );
}
