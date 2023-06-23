import React from "react";
import Mobile from "../images/Mobile.svg";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Mobile} className="w-75 mt-5" alt="" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-10 mb-0 pt-5">About us</h3>
              <h1 className="display-5 mb-1 pt-1">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                The VGD Textiles Manufacturer was founded at 2020 by VG
                DURAI.The Owner Of the website has to taken the responsibilities
                to the provides better things for the customers to get the
                reputation for the company.
              </p>
              <button
                className="btn btn-primary me-4
                        rounded-pill px-4 py-2"
              >
                {" "}
                Get Started
              </button>
              <button
                className="btn btn-light 
                        rounded-pill px-4 py-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
