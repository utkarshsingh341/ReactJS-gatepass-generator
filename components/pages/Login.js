import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const onClickHandler = (e) => {
    e.preventDefault();
    const enteredPassword = document.getElementById("password-field").value;
    console.log(enteredPassword);
    if (enteredPassword === "admin1234") {
      history.push("/home");
    } else {
      alert("Invalid Username/Password");
    }
  };

  return (
    <div className="login-box py-5 border shadow">
      <form>
        <div class="form-group">
          <label for="exampleInputPassword1">
            Enter Authentication Password
          </label>
          <input type="password" class="form-control" id="password-field" />
        </div>
        <button className="btn btn-primary" onClick={(e) => onClickHandler(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
