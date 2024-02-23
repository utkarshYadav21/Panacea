// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleClick=async()=>{
    let contact=await fetch("http://localhost:3000/contactus",{
      body:JSON.stringify({name,email,subject,message}),
      method:"post",
      headers:{
        'Content-Type':'application/json'
      }
    });
    contact=await contact.json();
    setEmail("");
    setMessage("");
    setName("");
    setSubject("");
  }
  return (
    <div className="container">
      <div className="h-fit min-h-screen">
        <div className="box-2 p-[3%] w-fit rounded-[8px] md:m-[5%]">
          <div className="contact-form">
            <p style={{ fontSize: "25px", fontWeight: "400" }}>Get in Touch</p>
            <p
              style={{
                fontSize: "16px",
                color: "darkblue",
                margin: "10px 0px 20px 0px",
              }}
            >
              Quisque mattis tortor eu tristique sodales. Aenean sit amet justo
              nec sem vestibulum.
            </p>
            <p>Your Name</p>
            <input
              type="text"
              className="w-fit bg-transparent border-b-2 border-black mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Your Email</p>
            <input
              type="email"
              className="w-fit bg-transparent border-b-2 border-black mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Subject</p>
            <input
              type="text"
              className="w-fit bg-transparent border-b-2 border-black mb-4"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <p>Your Message</p>
            <textarea
              className="w-[34%] min-w-[210px] bg-transparent border-b-2 border-black mb-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="send rounded-full p-3 w-fit border-blue-500" onClick={handleClick}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
