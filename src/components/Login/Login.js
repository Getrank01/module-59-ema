import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, seterror] = useState();
  const navigate = useNavigate();
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(seterror("wrong password or email")));
  };
  return (
    <div className="form-container">
      <h2 className="title">Login</h2>
      <hr />
      <form onSubmit={handlelogin}>
        <div className="input-field">
          <h2 className="title">Email</h2>
          <input
            className="email"
            type="email"
            name="email"
            id=""
            placeholder="email"
            required
          />
          <h2 className="title">Password</h2>

          <input
            type="password"
            className="password"
            placeholder="password"
            name="password"
            id=""
            required
          />
        </div>
        <button className="login-btn">Login</button>

        <Link className="new" to="/register">
          {" "}
          <small> New To Create Account Here</small>
        </Link>
        <p className="forget">FORGET PASSWORD</p>
        <p>{error}</p>

        <h3 className="google">Login with Google</h3>
      </form>
    </div>
  );
};

export default Login;
