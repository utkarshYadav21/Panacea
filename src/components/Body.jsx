// eslint-disable-next-line no-unused-vars
import React from "react"
import Image from "./globe.png";

const Body = () =>{

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

    return(
        <div className="container">
            <div className="introductory mb-14">
                <div className="intro-text">
                    <h1 className=" text-white md:text-6xl text-5xl font-bold mx-8 my-10"><span className="decor text-7xl font-extrabold">Panacea</span> Welcomes, Explore faster freelancing solutions</h1>
                    <button className="started text-white mx-8 rounded-full p-4" onClick={() => scrollToSection("section1")}>Get Started</button>
                </div>
                <img src={Image} alt="Image" className="client" />
            </div>
            <div className="mb-[25%]" id="section1">
                <h1 className="text-5xl text-white text-center font-bold mb-[8%]">Select Your Service</h1>
                <div className="type-box flex mb-[20%] text-3xl">
                <p className="type text-black text-center m-3 md:w-[30%] p-[5%] rounded-full" onClick={() => scrollToSection("section2")}>Web Application</p>
                <p className="type text-black text-center m-3 md:w-[30%] p-[5%] rounded-full" onClick={() => scrollToSection("section2")}>Android Application</p>
                <p className="type text-black text-center m-3 md:w-[30%] p-[5%] rounded-full" onClick={() => scrollToSection("section2")}>Both</p>
                </div>
            </div>
            <h1 className="text-5xl text-white text-center font-bold" id="section2">Project Repository</h1>
            <div className="all-cards">
            <div className="salecard"> 
                <img src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" alt="cardImage" className="card-image" />
                <div className="card-content">
                    <h4 className="text-3xl my-2">Social Media</h4>
                    <p className="my-3">Examples: Facebook, Instagram, Twitter, LinkedIn, Snapchat</p>
                </div>
                <button className="add-to-cart fill">KNOW MORE</button>
            </div>
            <div className="salecard">
                <img src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" alt="cardImage" className="card-image" />
                <div className="card-content">
                    <h4 className="text-3xl my-2">Entertainment</h4>
                    <p className="my-3">Examples: Netflix, Spotify, YouTube, Twitch</p>
                </div>
                <button className="add-to-cart">KNOW MORE</button>
            </div>
            <div className="salecard">
                <img src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" alt="cardImage" className="card-image" />
                <div className="card-content">
                    <h4 className="text-3xl my-2">Health and Fitness</h4>
                    <p className="my-3">Examples: Fitbit, MyFitnessPal, Headspace, Nike Training Club</p>
                </div>
                <button className="add-to-cart">KNOW MORE</button>
            </div>
            <div className="salecard">
                <img src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" alt="cardImage" className="card-image" />
                <div className="card-content">
                    <h4 className="text-3xl my-2">Education</h4>
                    <p className="my-3">Examples: Duolingo, Khan Academy, Quizlet, Google Classroom</p>
                </div>
                <button className="add-to-cart">KNOW MORE</button>
            </div>
            <div className="salecard">
                <img src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" alt="cardImage" className="card-image" />
                <div className="card-content">
                    <h4 className="text-3xl my-2">Travel and Navigation</h4>
                    <p className="my-3">Examples: Google Maps, Uber, Airbnb, TripAdvisor</p>
                </div>
                <button className="add-to-cart">KNOW MORE</button>
            </div>
            <div className="salecard">
                <img src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" alt="cardImage" className="card-image" />
                <div className="card-content">
                    <h4 className="text-3xl my-2">Shopping</h4>
                    <p className="my-3">Examples: Amazon, eBay, Etsy, Walmart</p>
                </div>
                <button className="add-to-cart">KNOW MORE</button>
            </div>
            <div className="salecard">
                <img src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" alt="cardImage" className="card-image" />
                <div className="card-content">
                    <h4 className="text-3xl my-2">Medical and Health</h4>
                    <p className="my-3">Examples: WebMD, Medscape, HealthTap, MyChart</p>
                </div>
                <button className="add-to-cart">KNOW MORE</button>
            </div>
            <div className="salecard">
                <img src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" alt="cardImage" className="card-image" />
                <div className="card-content">
                    <h4 className="text-3xl my-2">Food and Drink</h4>
                    <p className="my-3">Examples: Uber Eats, Starbucks, MyFitnessPal, Yummly</p>
                </div>
                <button className="add-to-cart">KNOW MORE</button>
            </div>
            </div>
            <hr style={{color:"1px solid gray"}} className="mt-20 mb-10"></hr>
        </div>
    );
}

export default Body