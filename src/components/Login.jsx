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
  try {
    let user = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ Email: email, Password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!user.ok) {
      const errorMessage = await user.text();
      throw new Error(errorMessage);
    }
    user = await user.json();
    const { currUser, token } = user;
    localStorage.setItem("jwt", token);
    localStorage.setItem("user", JSON.stringify(currUser));
    setEmail("");
    setPassword("");
    navigate("/");
  } catch (error) {
    console.log(error)
    let errorMessage;
    if (error === "Invalid credentials") {
      errorMessage = "Invalid email or password. Please try again.";
    } else if (error) errorMessage=error
    alert(errorMessage);
  }
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
