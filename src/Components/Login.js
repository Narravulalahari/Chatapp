// import React from 'react'
// import logo from '../Images/live-chat_512px.png'
// import './myStyle.css'
// import { Button, TextField } from '@mui/material'
// import { useSelector } from 'react-redux'
// const Login = () => {
//   const lighttheme=useSelector(state=>state.themekey)
//   return (
//     <div className={'login-container'+((lighttheme)?"":" dark")}>
//         <div className='image-container'>
//             <img src={logo} alt="logo" className='welcome-logo'/>
//         </div>
//         <div className='login-box'>
//             <p>Login  to your Account</p>
//             <TextField id="standard-basic" label="Enter username" variant="outlined" />
//             <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         <Button variant="outlined">Login</Button>
//         </div>
//     </div>
//   )
// }

// export default Login
import React, { useState } from "react";
import logo from "../Images/live-chat_512px.png";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toaster from "./Toaster";

function Login() {
  const [showlogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post("http://localhost:8080/user/login/", data, config);
      console.log("Login : ", response);
      localStorage.setItem("userData", JSON.stringify(response.data)); // Storing only necessary data
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      navigate("/app/welcome");
    } catch (error) {
      setLogInStatus({
        msg: "Invalid User name or Password",
        key: Math.random(),
      });
      setLoading(false);
    }
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post("http://localhost:8080/user/register/", data, config);
      console.log(response);
      localStorage.setItem("userData", JSON.stringify(response.data)); // Storing only necessary data
      setSignInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      navigate("/app/welcome");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 405) {
        setSignInStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response && error.response.status === 406) {
        setSignInStatus({
          msg: "User Name already Taken, Please take another one",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="Logo" className="welcome-logo" />
        </div>
        {showlogin ? (
          <div className="login-box">
            <p className="login-text">Login to your Account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
            />
            <Button variant="outlined" color="secondary" onClick={loginHandler}>
              Login
            </Button>
            <p>
              Don't have an Account ?{" "}
              <span className="hyper" onClick={() => setShowLogin(false)}>
                Sign Up
              </span>
            </p>
            {logInStatus ? <Toaster key={logInStatus.key} message={logInStatus.msg} /> : null}
          </div>
        ) : (
          <div className="login-box">
            <p className="login-text">Create your Account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
            />
            <TextField
              onChange={changeHandler}
              id="standard-email-input"
              label="Enter Email Address"
              variant="outlined"
              color="secondary"
              name="email"
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
            />
            <Button variant="outlined" color="secondary" onClick={signUpHandler}>
              Sign Up
            </Button>
            <p>
              Already have an Account ?
              <span className="hyper" onClick={() => setShowLogin(true)}>
                Log in
              </span>
            </p>
            {signInStatus ? <Toaster key={signInStatus.key} message={signInStatus.msg} /> : null}
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
