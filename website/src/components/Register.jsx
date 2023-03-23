import React from "react";
import regs from "../images/Login-rafiki.svg";
import axios from "axios";

const Register = () => {
  function loggedIn() {
    console.log("logged In chk");
    axios
      .post(
        "https://inventory-manager-70zs.onrender.com/app/loggedIn",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data === "userloggedIn") {
          window.location.href = "http://localhost:3000";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function reg(e) {
    e.preventDefault();
    if (
      document.getElementById("pwd1").value !==
      document.getElementById("pwd2").value
    ) {
      document.getElementById("passwordmatch").textContent =
        "Passwords does not match, Please try again";
      return;
    }
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      company: document.getElementById("companyname").value,
      password: document.getElementById("pwd1").value,
      pwd2: document.getElementById("pwd2").value,
    };
    axios
      .post("https://inventory-manager-70zs.onrender.com/app/signup", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        // window.location.href = "http://localhost:3000/login";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      {loggedIn()}
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
            <form onSubmit={reg}>
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
                  id="email"
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
                  id="companyname"
                  placeholder="Company Name"
                />
              </div>
              <div class="md-3">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  <h5>Password</h5>
                </label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="pwd1" />
                </div>
                <label for="inputPassword2" class="col-sm-2 col-form-label">
                  <h5>ConfirmPassword</h5>
                </label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="pwd2" />
                </div>
                <div class="col-12 text-center pt-5">
                  <button
                    class="btn btn-primary w-50 text-center"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div>
                  <h3 id="passwordmatch"> </h3>
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
