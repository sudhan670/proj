import React from "react";
import axios from "axios";
import loggedIn from "./LoggedIn";
import { endurl, fronturl } from "./url";
const Register = () => {
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
      .post(endurl + "/signup", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        window.location.href = fronturl;
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
          <div className="col-md-12 p-10">
            <h1 className="display-6 fw-bolder text-center mb-4 ">
              Add New Product
            </h1>
            <form onSubmit={reg}>
              <div className="mb-6 col-sm-10">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <h5> Seller Name</h5>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  placeholder="yourname"
                />
              </div>
              <div className="mb-6 col-sm-10">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <h5>Product Name</h5>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  placeholder="yourname"
                />
              </div>
              <br />
              <div className="mb-6 col-sm-10">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <h5>Quantity</h5>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="email"
                  placeholder="enter the quantity"
                />
              </div>
              <br />
              <div className="mb-6 col-sm-10">
                <label htmlFor="exampleFormControlTextarea1">
                  Product Description:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div class="mb-3 col-sm-10">
                <label for="formFile" class="form-label">
                  Upload The Image
                </label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div>
                <div className="mb-6 col-sm-10">
                  <div style={{ float: "left" }}>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      <h5 style={{ padding: "10px" }}>Type</h5>
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option>Dhoti</option>
                      <option>Towel</option>
                      <option>Saree</option>
                    </select>
                  </div>
                  <div className="mb-6 col-sm-10">
                    <div style={{ float: "right" }}>
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        <i className="fa fa-inr"></i>Price
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        placeholder="Pricing Details"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center pt-10">
                <div className="col-12 text-center pt-5">
                  <button
                    className="btn btn-primary w-50 text-center"
                    type="submit"
                  >
                    Add This Product
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
