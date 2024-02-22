import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem("jwt");
    if(auth) navigate("/")
  })
  const loginUser = async (e) => {
    e.preventDefault();
    let user = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ Email: email, Password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    user = await user.json();
    const {currUser,token}=user;
    console.log(currUser);
    localStorage.setItem('jwt',token);
    localStorage.setItem('user',JSON.stringify(currUser));
    setEmail("");
    setPassword("");
    navigate("/");
  };
  return (
    <>
      <div className="login-page ">
        <div className="form">
          <h1 style={{ textAlign: "center" }} className="authorization-heading">
            Login
          </h1>
          <form className="login-form">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginUser}>Login</button>
            <p className="message">
              Not Registerd? <a href="/signin">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
