import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import "./Register.css";
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, seterror] = useState(null);
  const [length, setlength] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setlength("Your password need 6 length");
      return;
    } else {
      setlength(null);
    }

    if (password !== confirm) {
      seterror("your pass did not match");
      return;
    } else {
      seterror(null);
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2 className="title">Registration</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <h2 className="title">Email</h2>
          <input
            className="email"
            type="email"
            name="email"
            id=""
            placeholder="email"
          />
          <h2 className="title">Password</h2>
          <input
            type="password"
            className="password"
            placeholder="password"
            name="password"
            id=""
          />
          <h2 className="title">Confirm Password</h2>
          <input
            type="password"
            className="password"
            placeholder="password"
            name="confirm"
            id=""
          />
        </div>
        <button className="login-btn">Registration</button>

        <Link className="new" to="/login">
          {" "}
          <small> Already Have an account Login Here</small>
        </Link>
        <h4>{error}</h4>
        <h4>{length}</h4>

        <h3 className="google">Registration with Google</h3>
      </form>
    </div>
  );
};

export default Register;
