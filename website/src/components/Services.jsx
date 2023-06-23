import React from "react";
import portal from "../images/portal.svg";
import shopping from "../images/shopping.svg";
import { Link } from "react-router-dom";
const services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-15 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                <b>Awesome Services</b>
              </h1>
              <hr className="w-25 mx-auto"></hr>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card p-4 ">
                  <img className="card-img-top" alt="" src={portal} />
                  <div className="card-body">
                    <h5 className="card-title">Textile Products</h5>
                    <p className="card-text">
                      We are the Organization to make the Customer Satisfied
                      their daily needs and trust towards the materials
                    </p>
                    <Link to="/services/products" className="btn btn-primary">
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-4 ">
                  <img className="card-img-top" src={shopping} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Bill Tax Report</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="/services/bill" className="btn btn-primary">
                      View Tax Reports
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-4 ">
                  <img className="card-img-top" src={portal} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Invoice Client Report </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="https://example.com" className="btn btn-primary">
                      Go Somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default services;
