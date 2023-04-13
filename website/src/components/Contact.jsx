import React from "react";
import contact from "../images/contact.svg";
const Contact = () => {
  return (
    <div>
      <section id="#contact">
        <div className="container my-5 pt-5">
          <div className="row my-5">
            <div className="col-12">
              <h3 className="fs-15 text-center mb-0">Contact us</h3>
              <h1 className="display-6 text-center mb-4">
                <b>
                  Having <b>Any Queries? </b>
                </b>
              </h1>
              <hr className="w-25 mx-auto"></hr>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={contact} className="w-75" alt="Image1" />
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-group pt-3">
                  <label htmlFor="exampleFormControlInput1">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group pt-3">
                  <label htmlFor="exampleyourname">Your Name:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name"
                  />
                </div>
                <div className="form-group pt-3">
                  <label htmlFor="exampleFormControlTextarea1">Message:</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group pt-4 text-center">
                  <button type="button" className="btn btn-primary">
                    SEND<i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
