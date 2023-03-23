import React from "react";
import login from "../images/login.svg";
import axios from "axios";
import loggedIn from "./LoggedIn";
import endurl from "./endurl";
const Login = () => {
  function log(e) {
    e.preventDefault();
    const user = {
      username: document.getElementById("username").value,
      password: document.getElementById("pwd").value,
    };
    axios
      .post(endurl + "/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.data === "home") {
          window.location.href = "http://localhost:3000";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {loggedIn()}
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white form">
            <h2 className="display-4 fw-bolder text-white">Welcome Back</h2>
            <img src={login} width="250px" alt="loginimage" />
            <p className="lead text-center">Enter Your Credentials</p>
            <h5 className="mb-4">OR</h5>
            <a
              href="../register"
              className="btn btn-outline-light rounded-pill
                     w-50"
            >
              Register
            </a>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder text-center mb-4 ">Login</h1>
            <form onSubmit={log}>
              <div className="mb-3 col-sm-10">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <h5>Email Address</h5>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  placeholder="name@example.com"
                />
              </div>
              <div className="md-3">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  <h5>Password</h5>
                </label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="pwd" />
                </div>
                <div className="col-12 text-center pt-5">
                  <button
                    className="btn btn-primary w-50 text-center"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
