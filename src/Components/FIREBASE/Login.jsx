import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {  signInWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  // Manual Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert(`Welcome back, ${userCredential.user.email}!`);
      navigate("/dashboard");  
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome, ${result.user.displayName}!`);
      navigate("/dashboard");  
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <form className="w-50 mx-auto border m-4 p-4" onSubmit={handleLogin}>
        <h2>Login Form</h2>

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>

        <button type="button" className="btn btn-danger mt-2 ms-2" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>

        <br />
        <Link to="/" className="text-decoration-none">
          Don't have an account? SignUp now
        </Link>
      </form>
    </div>
  );
}
