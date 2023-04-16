import React, { useState } from "react";
import axios from "axios";
import loggedIn from "./LoggedIn";
import { endurl, fronturl } from "./url";
const Register = () => {
  const [prod, setProd] = useState({
    seller: "",
    productName: "",
    quantity: "",
    desc: "",
    url: "",
    type: "Dhoti",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProd({ ...prod, [name]: value });
  };
  function reg(e) {
    e.preventDefault();
    //chk for proper submission

    axios
      .post(endurl + "/addproduct", prod, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        //Change the location below to listing of all products
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
              {/*seller name */}
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
              {/*Product name */}
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
              {/*Quantity */}
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
              {/*Desc */}
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
              {/*Img upload */}
              <div className="mb-3 col-sm-10">
                <label for="formFile" className="form-label">
                  Upload The Image
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              {/*type and price */}
              <div>
                <div className="mb-6 col-sm-10" style={{}}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                      style={{ padding: "15px" }}
                    >
                      Type
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>Dhoti</option>
                      <option>Towel</option>
                      <option>Saree</option>
                    </select>
                  </div>

                  <div className="mb-6 col-sm-10">
                    <div
                      style={{ display: "flex", padding: "15px", gap: "15px" }}
                    >
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        <i className="fa fa-inr"></i>Price
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Pricing Details"
                        style={{ width: "fit-content" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*add prod */}
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
