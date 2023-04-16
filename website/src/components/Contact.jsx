import React from "react";
import { useRef } from "react";
import contact from "../images/contact.svg";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wiu4s3i",
        "template_wayx3pw",
        form.current,
        "bplErjb-7j_HSvWNc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
              <form ref={form} onSubmit={sendEmail}>
                <h1>Contact Form</h1>
                <label>Name</label>
                <input type="text" name="user_name" className="form-control" />
                <br />
                <label>Email</label>
                <input type="text" name="user_email" className="form-control" />
                <br />
                <label>Message</label>
                <textarea type="text" name="message" className="form-control" />
                <br />
                <button type="submit" value="Send" className="btn btn-primary">
                  SEND<i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
