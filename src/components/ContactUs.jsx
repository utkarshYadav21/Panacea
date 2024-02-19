// eslint-disable-next-line no-unused-vars
import React from "react"


const ContactUs = () =>{
    return(
        <div className="container">
            <div className="h-fit min-h-screen">
          <div className="box-2 p-[3%] w-fit rounded-[8px] md:m-[5%]">
            <div className="contact-form">
              <p style={{ fontSize: "25px", fontWeight: "400" }}>
                Get in Touch
              </p>
              <p style={{ fontSize: "16px", color: "darkblue", margin: "10px 0px 20px 0px" }}>
                Quisque mattis tortor eu tristique sodales. Aenean sit amet
                justo nec sem vestibulum.
              </p>
              <p>Your Name</p>
              <input type="text" className="w-fit bg-transparent border-b-2 border-black mb-4"/>
              <p>Your Email</p>
              <input type="email" className="w-fit bg-transparent border-b-2 border-black mb-4" />
              <p>Subject</p>
              <input type="text" className="w-fit bg-transparent border-b-2 border-black mb-4" />
              <p>Your Message</p>
              <textarea className="w-[34%] min-w-[210px] bg-transparent border-b-2 border-black mb-4"></textarea>
            </div>
            <button className="send rounded-full p-3 w-fit border-blue-500">Send Message</button>
          </div>
        </div>
        </div>
    );
}

export default ContactUs