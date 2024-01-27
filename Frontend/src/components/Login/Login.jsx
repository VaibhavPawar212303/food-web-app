import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  //get user name,email,address and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //get the user data
  const setemail = (e) => {
    setEmail(e.target.value);
  };
  const setpassword = (e) => {
    setPassword(e.target.value);
  };

  const passDataToDb = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/api/user/loginuser",
      data: {
        email: email,
        password: password,
      },
    }).then(function (res) {
      window.stop();
      if (res.data.user) {
        localStorage.setItem("token", res.data.token);
        return navigate("/dishes", { replace: true });
      } else {
        window.stop();
        setMessage(JSON.stringify(res.data.message));
      }
    });
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="card-title">Login</div>
        <label for="fname" className="card-title">
          Email
        </label>
        <div>{message}</div>
        <input
          type="text"
          id="email"
          name="firstname"
          placeholder="Your email.."
          value={email}
          onChange={setemail}
        />
        <label for="fname" className="card-title">
          Password
        </label>
        <input
          type="text"
          id="pass"
          name="firstname"
          placeholder="Your password .."
          value={password}
          onChange={setpassword}
        />
        <a href="#" class="cart-button" onClick={passDataToDb}>
          Login
        </a>
      </div>
    </div>
  );
}

export default Login;
