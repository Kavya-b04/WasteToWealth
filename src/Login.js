import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// import { auth } from "./firebase";
function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const login = (event) => {
    event.preventDefault();
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     history.push("/");
    //   })
    //   .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     history.push("/"  );
    //   })
    //   .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="../wtwlogo.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <h5 className="login__input__label">E-mail or phone number</h5>
          <input
            onChange={emailChangeHandler}
            className="login__input"
            type="text"
            value={email}
          />
          <h5 className="login__input__label">Password</h5>
          <input
            onChange={passwordChangeHandler}
            className="login__input"
            type="password"
            value={password}
          />
          <button type="submit" onClick={login} className="login__button">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's{" "}
          <Link className="amazon__condition">Conditions of Use</Link> and{" "}
          <Link className="amazon__condition">Privacy </Link> Notice.
        </p>
      </div>
      <button type="submit" onClick={register} className="signup__button">
        Create you Amazon account
      </button>
    </div>
  );
}

export default Login;