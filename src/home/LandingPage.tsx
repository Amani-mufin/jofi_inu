import React from "react";
import Dog from "../components/Dog";
import TestimonialContainer from "../components/TestimonialContainer";
import Footer from "../components/Footer";
import testimonials from "./testimonial";



const LandingPage = () => {
  return (
    <div>
      <Dog />
      <TestimonialContainer testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default LandingPage;
