import { useState } from "react";
import { json, useParams } from "react-router-dom";
import socialMediaImage1 from "../../images/social_media_image1.png";
import socialMediaImage2 from "../../images/social_media_image2.png";
import entertainmentImage1 from "../../images/entertainment_image1.png";
import entertainmentImage2 from "../../images/entertainment_image2.png";
import healthAndFitnessImage1 from "../../images/health_and_fitness1.png";
import healthAndFitnessImage2 from "../../images/health_and_fitness2.png";
import educationImage1 from "../../images/education1.png";
import educationImage2 from "../../images/education2.png";
import travelAndNavigationImage1 from "../../images/travel_and_navigation1.png";
import travelAndNavigationImage2 from "../../images/travel_and_navigation2.png";
import shoppingImage1 from "../../images/shopping1.png";
import shoppingImage2 from "../../images/shopping2.png";
import medicalAndHealthImage1 from "../../images/medical_and_health1.png";
import medicalAndHealthImage2 from "../../images/medical_and_health2.png";
import foodAndDrinkImage1 from "../../images/food_and_drink1.png";
import foodAndDrinkImage2 from "../../images/food_and_drink2.png";

const SaleCardDetail = () => {
  const { title } = useParams();
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [description, setDescription] = useState("");
  const price = 60000;

  const uniqueImages = {
    SocialMedia: [socialMediaImage1, socialMediaImage2],
    Entertainment: [entertainmentImage1, entertainmentImage2],
    HealthAndFitness: [healthAndFitnessImage1, healthAndFitnessImage2],
    Education: [educationImage1, educationImage2],
    TravelAndNavigation: [travelAndNavigationImage1, travelAndNavigationImage2],
    Shopping: [shoppingImage1, shoppingImage2],
    MedicalAndHealth: [medicalAndHealthImage1, medicalAndHealthImage2],
    FoodAndDrink: [foodAndDrinkImage1, foodAndDrinkImage2],
  };

  // Access the array of images for the specific salecard
  const salecardImages = uniqueImages[title] || [];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSave = async() => {
    const {Name,Email}=JSON.parse(localStorage.getItem('user'))
    const choiceOfService=localStorage.getItem('serviceChoice');
    console.log(Name,Email);
    console.log("Color:", selectedColor);
    console.log("Selected Image:", selectedImage);
    console.log(selectedColor,selectedImage,description,Name,Email,choiceOfService);
    let request=await fetch("http://localhost:3000/requestOrder",{
      body:JSON.stringify({selectedColor,selectedImage,description,Name,Email,choiceOfService}),
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    request=await request.json();
    console.log(request);
    setIsButtonVisible(true);
  };
  return (
    <div className="salecard-detail m-auto w-[50%] p-10 h-fit min-h-[100vh] min-w-[300px] max-w-[500px]">
      <h1 className="text-white">{title}</h1>
      <h2 className="text-white text-4xl my-10 text-center font-bold">
        Select Themes
      </h2>
      <div className="theme-images">
        {/* Map through your themes and display images */}
        {salecardImages.map((image, index) => {
          return (
            <div key={index}>
              <img
                src={image}
                alt={`${title} Theme ${index + 1}`}
                className={selectedImage === image ? "selected" : ""}
                onClick={() => handleImageClick(image)}
              />
            </div>
          );
        })}
      </div>
      <h2 className="text-white"> Select Color Theme</h2>
      <input
        className="w-half text-center w-full border-gray cursor-pointer border-slate-800"
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <div
        className="color-display border-gray"
        style={{ backgroundColor: selectedColor }}
      ></div>
      <textarea
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
        placeholder="Enter Your Recommendations here"
        className="decor w-full h-[10vh] my-5 rounded-[1px] py-1 px-2 border-zinc-100"
      ></textarea>
      <button
        onClick={handleSave}
        className="text-green-950 border-1px rounded-3xl py-2 mt-5 w-full type font-semibold "
      >
        Save
      </button>
      {isButtonVisible && (
        <>
          <p className="text-blue-500 m-2 mt-4 text-center">₹ {price}</p>
          <button className="type w-full mb-5 rounded-3xl py-2 font-black">
            PAY NOW
          </button>
        </>
      )}
    </div>
  );
};

export default SaleCardDetail;
