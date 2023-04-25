import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import "./Auth.css";
import { useSelector } from "react-redux";

const Auth = (e) => {
	const dispatch = useDispatch();
	
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const handleSubtmit = (e) => {
		e.preventDefault();
		console.log(1);
		
		dispatch(authActions.login());
		console.log(isLoggedIn);
	}
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubtmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
