
import  { useState } from "react";
import { useParams } from "react-router-dom";


const SaleCardDetail = () => {
  const { title } = useParams();
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const price = 60000;

  
  const uniqueImages = {
    SocialMedia: [
      "social_media_image1.jpg",
      "social_media_image2.jpg",
      "social_media_image3.jpg",
    ],
    Entertainment: ["entertainment_image.jpg"],
    HealthAndFitness: ["health_and_fitness.jpg"],
    Education: ["education.jpg"],
    TravelAndNavigation: ["travel_and_navigation.jpg"],
    Shopping: ["shopping.jpg"],
    MedicalAndHealth: ["medical_and_health.jpg"],
    FoodAndDrink: ["food_and_drink.jpg"]
  };

  // Access the array of images for the specific salecard
  const salecardImages = uniqueImages[title] || [];



  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSave = () => {
    console.log("Color:", selectedColor);
    console.log("Selected Image:", selectedImage);
    setIsButtonVisible(true);
  };

  return (
    <div className="salecard-detail m-auto w-[50%] p-10 h-fit min-h-[100vh] min-w-[300px] max-w-[500px]">
      <h1 className="text-white">{title}</h1>
      <h2 className="text-white text-4xl my-10 text-center font-bold">Select Themes</h2>
      <div className="theme-images">
        
        {salecardImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} Theme ${index + 1}`}
            className={selectedImage === image ? "selected" : ""}
            onClick={() => handleImageClick(image)}
          />
        ))}
        
      </div>
      <h2 className="text-white"> Select Color Theme</h2>
      <input
        className="w-half text-center w-full border-gray cursor-pointer border-slate-800"
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <div className="color-display border-gray" style={{ backgroundColor: selectedColor }}></div>
      <textarea placeholder="Enter Your Recommendations here" className="decor w-full h-[10vh] my-5 rounded-[1px] py-1 px-2 border-zinc-100"></textarea>
      <button onClick={handleSave} className="text-green-950 border-1px rounded-3xl py-2 mt-5 w-full type font-semibold">Save</button>  
      {isButtonVisible && <><p className="text-blue-500 m-2 mt-4 text-center">₹ {price}</p><button className="type w-full mb-5 rounded-3xl py-2 font-black">PAY NOW</button></>}
    </div>
  );
};

export default SaleCardDetail;