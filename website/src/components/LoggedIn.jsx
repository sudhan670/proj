import axios from "axios";
import endurl from "./endurl";
function loggedIn() {
  console.log("chk for cookie");
  axios
    .post(
      endurl + "/loggedIn",
      {},
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res);
      if (res.data === "userloggedIn") {
        window.location.href = "http://localhost:3000";
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
export default loggedIn;
