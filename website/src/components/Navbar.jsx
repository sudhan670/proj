import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
function Navbar() {
  function loggedIn() {
    console.log("Navbar chk");
    axios
      .post(
        "http://localhost:4000/app/loggedIn",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data === "userloggedIn") {
          console.log(res.data === "userloggedIn,if");
          setStat(1);
        } else {
          console.log(res.data === "else");
          setStat(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return false;
  }
  const [stat, setStat] = useState(loggedIn);

  return (
    <>
      <nav class="navbar navbar-expand-lg dark shadow pt-1">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item pt-3">
                <Link
                  class="nav-link active btn btn-outline-primary ms-2 px-4 solid-pill"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item pt-3">
                <Link
                  class="nav-link btn btn-outline-primary ms-2 px-4 solid-pill "
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item pt-3">
                <Link
                  class="nav-link btn btn-outline-primary ms-2 px-4 solid-pill"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li class="nav-item pt-3">
                <Link
                  class="nav-link btn btn-outline-primary ms-2 px-4 solid-pill"
                  to="/services"
                >
                  Services
                </Link>
              </li>
            </ul>
            <Link class="navbar-brand pt-3" to="#">
              <b>VGD TEXTILES</b>
            </Link>
            {stat === 1 ? (
              <Link
                to="/logout"
                class="btn btn-primary ms-auto px-4 solid-pill "
                type="submit"
              >
                :<i className="fa fa-sign-in me-2"></i>Logout
              </Link>
            ) : (
              <div>
                <Link
                  to="/login"
                  class="btn btn-primary ms-auto px-4 solid-pill "
                  type="submit"
                >
                  <i className="fa fa-sign-in me-2"></i>Login
                </Link>
                <Link
                  to="/register"
                  class="btn btn-outline-primary ms-2 px-4 solid-pill "
                  type="submit"
                >
                  <i className="fa fa-user-plus me-2"></i>Register
                </Link>
              </div>
            )}

            {/* <Link
              to="/logout"
              class="btn btn-primary ms-auto px-4 solid-pill "
              type="submit"
            >
              :<i className="fa fa-sign-in me-2"></i>Logout
            </Link>

            <Link
              to="/login"
              class="btn btn-primary ms-auto px-4 solid-pill "
              type="submit"
            >
              <i className="fa fa-sign-in me-2"></i>Login
            </Link>
            <Link
              to="/register"
              class="btn btn-outline-primary ms-2 px-4 solid-pill "
              type="submit"
            >
              <i className="fa fa-user-plus me-2"></i>Register
            </Link> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
