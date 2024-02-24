// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Image from "./globe.png";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const serviceChoice=localStorage.getItem('serviceChoice');
    if(serviceChoice) localStorage.removeItem('serviceChoice');
  },[])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = async (sectionId) => {
    const jwt = localStorage.getItem("jwt");
    try {
      let response = await fetch("http://localhost:3000/verifyToken", {
        method: "get",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to verify token");
      }
      const data = await response.json();
      if (data.message === "Token is valid.") {
        scrollToSection(sectionId);
      } else {
        throw new Error(data.error || "Please Login");
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
      alert("An error occurred. Please login.");
      navigate("/login");
    }
  };
  const handleServiceChoice=async(sectionId,chosenService)=>{
    const jwt = localStorage.getItem("jwt");
    try {
      let response = await fetch("http://localhost:3000/verifyToken", {
        method: "get",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to verify token");
      }
      const data = await response.json();
      if (data.message === "Token is valid.") {
        localStorage.setItem('serviceChoice',chosenService);
        scrollToSection(sectionId);
      } else {
        throw new Error(data.error || "Please Login");
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
      alert("An error occurred. Please login.");
      navigate("/login");
    }
  }
  const handleSalecardClick=(sectionId,path)=>{
    const serviceChoice=localStorage.getItem('serviceChoice');
    if(serviceChoice){
      navigate(path)
    }
    else{
      alert("Choose a service...");
      scrollToSection(sectionId)
    }
  }
  return (
    <div className="container">
      <div className="introductory mb-14">
        <div className="intro-text">
          <h1 className=" text-white md:text-6xl text-5xl font-bold mx-8 my-10">
            <span className="decor text-7xl font-extrabold">Panacea</span>{" "}
            Welcomes, Explore faster freelancing solutions
          </h1>
          <button
            className="started text-white mx-8 rounded-full p-4"
            onClick={() => handleGetStarted("section1")}
          >
            Get Started
          </button>
        </div>
        <img src={Image} alt="Image" className="client" />
      </div>
      <div className="mb-[25%]" id="section1">
        <h1 className="text-5xl text-white text-center font-bold mb-[8%]">
          Select Your Service
        </h1>
        <div className="type-box flex mb-[20%] text-3xl">
          <p
            className="type text-black text-center m-3 md:w-[30%] p-[5%] rounded-full"
            onClick={() => handleServiceChoice("section2","Web Application")}
          >
            Web Application
          </p>
          <p
            className="type text-black text-center m-3 md:w-[30%] p-[5%] rounded-full"
            onClick={() => handleServiceChoice("section2","Android Application")}
          >
            Android Application
          </p>
          <p
            className="type text-black text-center m-3 md:w-[30%] p-[5%] rounded-full"
            onClick={() => handleServiceChoice("section2","Android and Web Applications")}
          >
            Both
          </p>
        </div>
      </div>
      <h1 className="text-5xl text-white text-center font-bold" id="section2">
        Project Repository
      </h1>
      <div className="all-cards">
        <div className="salecard" onClick={()=>handleSalecardClick("section1","/details/Social Media")}>
            <img
              src="../../../images/social media.png"
              alt="cardImage"
              className="card-image"
            />
          <div className="card-content">
            <h4 className="text-3xl my-2">Social Media</h4>
            <p className="my-3">
              Examples: Facebook, Instagram, Twitter, LinkedIn, Snapchat
            </p>
          </div>
          <button className="add-to-cart fill">KNOW MORE</button>
        </div>
        <div className="salecard" onClick={()=>handleSalecardClick("section1","/details/Entertainment")} >
          <img
            src="../../../images/entertainment.png"
            alt="cardImage"
            className="card-image"
          />
          <div className="card-content">
            <h4 className="text-3xl my-2">Entertainment</h4>
            <p className="my-3">Examples: Netflix, Spotify, YouTube, Twitch</p>
          </div>
          <button className="add-to-cart">KNOW MORE</button>
        </div>

        <div className="salecard" onClick={()=>handleSalecardClick("section1","/details/HealthAndFitness")} >
          <img
            src="../../../images/Health and fitness.png"
            alt="cardImage"
            className="card-image"
          />
          <div className="card-content">
            <h4 className="text-3xl my-2">Health and Fitness</h4>
            <p className="my-3">
              Examples: Fitbit, MyFitnessPal, Headspace, Nike Training Club
            </p>
          </div>
          <button className="add-to-cart">KNOW MORE</button>
        </div>

        <div className="salecard" onClick={()=>handleSalecardClick("section1","/details/Education")} >
          <img
            src="../../../images/education.png"
            alt="cardImage"
            className="card-image"
          />
          <div className="card-content">
            <h4 className="text-3xl my-2">Education</h4>
            <p className="my-3">
              Examples: Duolingo, Khan Academy, Quizlet, Google Classroom
            </p>
          </div>
          <button className="add-to-cart">KNOW MORE</button>
        </div>

        <div className="salecard" onClick={()=>handleSalecardClick("section1","/details/TravelAndNavigation")} >
          <img
            src="../../../images/travel and navigation.png"
            alt="cardImage"
            className="card-image"
          />
          <div className="card-content">
            <h4 className="text-3xl my-2">Travel and Navigation</h4>
            <p className="my-3">
              Examples: Google Maps, Uber, Airbnb, TripAdvisor
            </p>
          </div>
          <button className="add-to-cart">KNOW MORE</button>
        </div>

        <div className="salecard" onClick={()=>handleSalecardClick("section1","/details/Shopping")} >
          <img
            src="../../../images/shopping.png"
            alt="cardImage"
            className="card-image"
          />
          <div className="card-content">
            <h4 className="text-3xl my-2">Shopping</h4>
            <p className="my-3">Examples: Amazon, eBay, Etsy, Walmart</p>
          </div>
          <button className="add-to-cart">KNOW MORE</button>
        </div>

        <div className="salecard" onClick={()=>handleSalecardClick("section1","/details/MedicalAndHealth")} >
          <img
            src="../../../images/medical and health.png"
            alt="cardImage"
            className="card-image"
          />
          <div className="card-content">
            <h4 className="text-3xl my-2">Medical and Health</h4>
            <p className="my-3">
              Examples: WebMD, Medscape, HealthTap, MyChart
            </p>
          </div>
          <button className="add-to-cart">KNOW MORE</button>
        </div>

        <div className="salecard" onClick={()=>handleSalecardClick("section1","/details/FoodAndDrink")} >
          <img
            src="../../../images/food and drink.png"
            alt="cardImage"
            className="card-image"
          />
          <div className="card-content">
            <h4 className="text-3xl my-2">Food and Drink</h4>
            <p className="my-3">
              Examples: Uber Eats, Starbucks, MyFitnessPal, Yummly
            </p>
          </div>
          <button className="add-to-cart">KNOW MORE</button>
        </div>

      </div>
      <hr style={{ color: "1px solid gray" }} className="mt-20 mb-10"></hr>
    </div>
  );
};

export default Body;
