import React from "react";
import login from "../images/login.svg";

const Login = () => {
  function log(e) {
    e.preventDefault();
    console.log(
      document.getElementById("mail").value,
      document.getElementById("pwd").value
    );
  }
  return (
    <>
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
                <label for="exampleFormControlInput1" class="form-label">
                  <h5>Email Address</h5>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="mail"
                  placeholder="name@example.com"
                />
              </div>
              <div class="md-3">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  <h5>Password</h5>
                </label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="pwd" />
                </div>
                <div class="col-12 pt-3">
                  <input
                    class="form-check-input gap"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember Me
                  </label>
                </div>
                <div class="col-12 text-center pt-5">
                  <button
                    class="btn btn-primary w-50 text-center"
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
