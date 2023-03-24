import React from "react";
import axios from "axios";

const Logout = () => {
  function out() {
    console.log("Coming into logout");
    axios
      .post(
        "http://localhost:4000/app/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        window.location.href = "http://localhost:3000";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <>{out()}</>;
};

export default Logout;
