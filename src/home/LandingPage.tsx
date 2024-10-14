import React from "react";
import Dog from "../components/Dog";
import TestimonialContainer from "../components/TestimonialContainer";
import Footer from "../components/Footer";
import testimonials from "./testimonial";
import backgroundImage from '../assets/glowbg.png'
import DogImage from "../components/DogImage";



const LandingPage = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-no-repeat min-h-screen pb-32 "
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'left center' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <div className="relative z-50">
          <DogImage/>
        </div>
        <TestimonialContainer testimonials={testimonials} />
      </div>
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
