import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { endurl } from "./url";
import axios from "axios";
function Navbar() {
  function loggedIn() {
    console.log("Navbar chk");
    axios
      .post(
        endurl + "/loggedIn",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data === "userloggedIn") {
          setStat(1);
        } else {
          console.log(res.data);
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
      <nav className="navbar navbar-expand-lg dark shadow pt-1">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item pt-3">
                <Link
                  className="nav-link active btn btn-outline-primary ms-2 px-4 solid-pill"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item pt-3">
                <Link
                  className="nav-link btn btn-outline-primary ms-2 px-4 solid-pill "
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item pt-3">
                <Link
                  className="nav-link btn btn-outline-primary ms-2 px-4 solid-pill"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item pt-3">
                <Link
                  className="nav-link btn btn-outline-primary ms-2 px-4 solid-pill"
                  to="/services"
                >
                  Services
                </Link>
              </li>
            </ul>
            <Link className="navbar-brand pt-3" to="#">
              <b>VGD TEXTILES</b>
            </Link>
            {stat === 1 ? (
              <Link
                to="/logout"
                className="btn btn-primary ms-auto px-4 solid-pill "
                type="submit"
              >
                :<i className="fa fa-sign-in me-2"></i>Logout
              </Link>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="btn btn-primary ms-auto px-4 solid-pill "
                  type="submit"
                >
                  <i className="fa fa-sign-in me-2"></i>Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline-primary ms-2 px-4 solid-pill "
                  type="submit"
                >
                  <i className="fa fa-user-plus me-2"></i>Register
                </Link>
              </div>
            )}

            {/* <Link
              to="/logout"
              className="btn btn-primary ms-auto px-4 solid-pill "
              type="submit"
            >
              :<i className="fa fa-sign-in me-2"></i>Logout
            </Link>

            <Link
              to="/login"
              className="btn btn-primary ms-auto px-4 solid-pill "
              type="submit"
            >
              <i className="fa fa-sign-in me-2"></i>Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline-primary ms-2 px-4 solid-pill "
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
