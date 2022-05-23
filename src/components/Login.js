import React, { useState, useRef, useContext } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

import classes from "./Login.module.css";

const Login = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModelHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitUserHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;
    if (isLogin) {
      url =
        " https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAD_uZb0FW_vsCd_dg0M-RWVx3WIhKHv8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAD_uZb0FW_vsCd_dg0M-RWVx3WIhKHv8";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            const errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/user-profile");
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className={classes.login}>
      <div className="d-flex justify-content-center">
        <form className={classes.formItem} onSubmit={submitUserHandler}>
          <h2 className={classes.loginItem}>
            Please {isLogin ? "Login" : "Sing Up"}
          </h2>
          <div className={classes.inputs}>
            <input
              className={classes.inp}
              id="email"
              type="email"
              placeholder="Enter Your Email Address..."
              ref={emailInputRef}
            />
          </div>
          <div className={classes.inputs}>
            <input
              className={classes.inp}
              id="password"
              type="password"
              placeholder=" Enter Your Password..."
              ref={passwordInputRef}
              
            />
          </div>

          <p className={classes.verify} onClick={switchAuthModelHandler}>
            {" "}
            {isLogin ? " Don't you have an account ?" : " Login "}{" "}
          </p>
          <div className="d-flex justify-content-center">
            <button className={classes.loginBtn} type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
