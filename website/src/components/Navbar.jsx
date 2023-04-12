import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { endurl } from "./url";
import axios from "axios";
import { But } from "./But";
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
        if (res.data === "userloggedIn") {
          setStat(1);
        } else {
          setStat(0);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return false;
  }
  const [stat, setStat] = useState(loggedIn);
  const [burger, setBurger] = useState(true);
  function ham() {
    setBurger(!burger);
  }
  function hide() {
    document.getElementById("ham").click();
  }
  return (
    <>
      <div className="d-flex justify-content-center VGD">
        <Link className="navbar-brand pt-3 " to="#">
          <b>VGD TEXTILES</b>
        </Link>
      </div>
      <nav className="navbar navbar-expand-lg dark shadow pt-1">
        <div className="container-fluid">
          <But ham={ham} burger={burger} />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item pt-3">
                <Link
                  className="nav-link btn btn-outline-primary ms-2 px-4 solid-pill rmBor"
                  aria-current="page"
                  to="/"
                  onClick={hide}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item pt-3">
                <Link
                  className="nav-link btn btn-outline-primary ms-2 px-4 solid-pill rmBor"
                  to="/about"
                  onClick={hide}
                >
                  About
                </Link>
              </li>
              <li className="nav-item pt-3">
                <Link
                  className="nav-link btn btn-outline-primary ms-2 px-4 solid-pill rmBor"
                  to="/contact"
                  onClick={hide}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item pt-3">
                <Link
                  className="nav-link btn btn-outline-primary ms-2 px-4 solid-pill rmBor"
                  to="/services"
                  onClick={hide}
                >
                  Services
                </Link>
              </li>
            </ul>

            {stat === 1 ? (
              <Link
                to="/logout"
                className="btn btn-primary ms-auto px-4 solid-pill "
                type="submit"
                onClick={hide}
              >
                :<i className="fa fa-sign-in me-2"></i>Logout
              </Link>
            ) : (
              <div>
                <Link
                  to="/login"
                  onClick={hide}
                  className="btn btn-primary ms-auto px-4 solid-pill "
                  type="submit"
                >
                  <i className="fa fa-sign-in me-2"></i>Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline-primary ms-2 px-4 solid-pill "
                  type="submit"
                  onClick={hide}
                >
                  <i className="fa fa-user-plus me-2"></i>Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
