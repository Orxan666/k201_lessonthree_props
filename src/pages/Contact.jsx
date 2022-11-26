import React from "react";
import MySlider from "../components/slider/MySlider";
const img1 = "https://cdn.pixabay.com/photo/2014/08/15/21/40/snake-419043_960_720.jpg";
const img2 = "https://cdn.pixabay.com/photo/2014/08/15/21/40/snake-419043_960_720.jpg";
const img3 = "https://cdn.pixabay.com/photo/2014/08/15/21/40/snake-419043_960_720.jpg";
const img4 = "https://cdn.pixabay.com/photo/2016/11/29/02/53/python-1866944_960_720.jpg";
const images = [img1, img2, img3, img4];
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <MySlider photos={images} kama={1}/>
    </div>
  );
};

export default Contact;
