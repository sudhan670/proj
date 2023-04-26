import React, { useState } from "react";
import axios from "axios";
import { endurl, fronturl } from "./url";
const Register = () => {
  const [url, setUrl] = useState("");
  const [prod, setProd] = useState({
    seller: "",
    productName: "",
    quantity: "",
    desc: "",
    type: "Dhoti",
    price: "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "url") {
      //Read files in the browser from client side with filereeader api
      // const reader = new FileReader();
      // reader.onload = () => {
      //   const url = reader.result;
      //   setProd({ ...prod, [name]: url });
      //   console.log(url);
      // };
      // reader.readAsDataURL(e.target.files[0]);

      await setUrl(e.target.files[0]);
      return;
    }

    setProd({ ...prod, [name]: value });
  };
  async function reg(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", url);
    formData.append("upload_preset", "m0kouswk");
    await axios
      .post("https://api.cloudinary.com/v1_1/dcfzrzzyx/upload", formData)
      .then((res) => (prod.url = res.data.url))
      .catch((err) => console.log(err));
    prod.quantity = parseInt(prod.quantity);
    prod.price = parseInt(prod.price);
    // //chk proper submission Done
    // Send product to backend
    console.log("product adding");
    await axios
      .post(endurl + "/addproduct", prod, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("in then");
        //Change the location below to listing of all products
        window.location.href = fronturl;
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
    console.log("product after added");
  }
  return (
    <>
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
                  name="seller"
                  type="text"
                  className="form-control"
                  placeholder="Seller Name"
                  onChange={handleChange}
                  required
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
                  name="productName"
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="yourname"
                  onChange={handleChange}
                  required
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
                  name="quantity"
                  type="number"
                  className="form-control"
                  placeholder="enter the quantity"
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              {/*Desc */}
              <div className="mb-6 col-sm-10">
                <label htmlFor="exampleFormControlTextarea1">
                  Product Description:
                </label>
                <textarea
                  name="desc"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {/*Img upload */}
              <div className="mb-3 col-sm-10">
                <label htmlFor="formFile" className="form-label">
                  Upload The Image
                </label>
                <input
                  name="url"
                  className="form-control"
                  type="file"
                  accept="image/png,image/jpg,image/jpeg"
                  onChange={handleChange}
                  required
                />
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
                      name="type"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={handleChange}
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
                        name="price"
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Pricing Details"
                        style={{ width: "fit-content" }}
                        onChange={handleChange}
                        required
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
