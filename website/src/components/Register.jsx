import React from "react";
import regs from "../images/Login-rafiki.svg";

const Register = () => {
  return (
    <>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white form order-2">
            <h2 className="display-4 fw-bolder text-white">
              Hello TexMarters,
            </h2>
            <p className="lead text-center">Enter Your details to Register</p>
            <h5 className="mb-4">OR</h5>
            <img src={regs} width="250px" alt="registeralt" />
            <a
              href={"../login"}
              className="btn btn-outline-light rounded-pill
                     w-50"
            >
              Login
            </a>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder text-center mb-4 ">Register</h1>
            <form>
              <div class="mb-3 col-sm-10">
                <label for="exampleFormControlInput1" class="form-label">
                  <h5>User Name</h5>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="username"
                  placeholder="yourname"
                />
              </div>
              <div class="mb-3 col-sm-10">
                <label for="exampleFormControlInput1" class="form-label">
                  <h5>Email Address</h5>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3 col-sm-10">
                <label for="name" class="form-label">
                  <h5>Company</h5>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Company Name"
                />
              </div>
              <div class="md-3">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  <h5>Password</h5>
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  <h5>ConfirmPassword</h5>
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
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

export default Register;
