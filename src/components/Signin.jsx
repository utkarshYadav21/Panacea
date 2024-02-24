import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem("jwt");
    if(auth) navigate("/")
  })
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      let curUser = await fetch("http://localhost:3000/register", {
        method: "post",
        body: JSON.stringify({ Name: name, Email: email, Password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!curUser.ok) {
        const errorMessage = await curUser.text();
        throw new Error(errorMessage);
      }
      curUser = await curUser.json();
      const { user, token } = curUser;
      localStorage.setItem("jwt", token);
      localStorage.setItem("user", JSON.stringify(user));
      setEmail("");
      setPassword("");
      setName("");
      navigate("/");
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };
  
  return (
    <>
      <div className="login-page">
        <div className="form">
          <h1 style={{ textAlign: "center" }} className="authorization-heading">
            Signin
          </h1>
          <form className="login-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <button onClick={registerUser}>Signin</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
