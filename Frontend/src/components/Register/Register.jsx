import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  //get user name,email,address and password
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  //get the user data
  const setusername = (e) => {
    setUsername(e.target.value);
  };
  const seemail = (e) => {
    setEmail(e.target.value);
  };
  const setpassword = (e) => {
    setPassword(e.target.value);
  };
  const setaddress = (e) => {
    setAddress(e.target.value);
  };

  const passDataToDb = () => {
    axios({
      method: "post",
      url: "https://dashboard-api-backhend-production-f65b.up.railway.app/api/user/createuser",
      'Content-Type':'application/json',
      data: {
        username: username,
        email: email,
        address: address,
        password: password,
      },
    }).then(function (res) {
      window.stop();
      if (res.data.user) {
        return navigate("/login", { replace: true });
      } else {
        window.stop();
        setMessage(JSON.stringify(res.data.message));
        if (res.data.message === "Account Created Successfully") {
          window.stop();
          return navigate("/login", { replace: true });
        }
        window.stop();
      }
    });
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="card-title">Register</div>
        <div>{message}</div>
        <label for="fname" className="card-title">
          Name
        </label>
        <input
          type="text"
          id="email"
          name="firstname"
          placeholder="Your name.."
          value={username}
          onChange={setusername}
        />
        <label for="fname" className="card-title">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email.."
          value={email}
          onChange={seemail}
        />
        <label for="fname" className="card-title">
          Address
        </label>
        <input
          type="text"
          id="pass"
          name="address"
          placeholder="Your address .."
          value={address}
          onChange={setaddress}
        />
        <label for="fname" className="card-title">
          Password
        </label>
        <input
          type="text"
          id="pass"
          name="password"
          placeholder="Your password .."
          value={password}
          onChange={setpassword}
        />
        <a href="#" class="cart-button" onClick={passDataToDb}>
          Register
        </a>
      </div>
    </div>
  );
}

export default Register;
