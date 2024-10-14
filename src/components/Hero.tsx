import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import lion from "../assets/glowbg.png";
import arrow from "../assets/right.png";
import arrowDown from "../assets/arrowDown.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: false,
    });
  }, []);

  return (
    <section className="flex flex-col md:flex-row gap-10 md:gap-32 md:pl-40 pl-5 h-screen items-center w-full pt-20 max-w-[1440px]  mx-auto">
      <div
        className="order-2 md:order-1 w-full md:w-[385px] flex flex-col gap-5 text-center md:text-left"
        data-aos="fade-right"
      >
        <h1 className="text-[48px] md:text-[101px] font-[807] text-[#F4E7DD] leading-[50px] md:leading-[91.13px] uppercase font-travels">
          Jofi AI
        </h1>
        <h4 className="font-[598] w-full md:w-[379px] text-sm md:text-base leading-[18px] md:leading-[21.6px] text-[#F4E7DD] font-[author] uppercase px-8 md:px-0">
          Join the revolution inspired by Sigmund Freud's loyal companion, Jofi.
          Invest in Jofi Coin and be part of a movement that merges history,
          innovation, and mental health awareness.
        </h4>
        <button className="w-[120px] md:w-[151.85px] py-3 md:py-5 px-[20px] md:px-[30px] bg-[#D3A178] flex items-center gap-1 text-black justify-center uppercase mx-auto md:mx-0">
          <span className="text-[8px] md:text-[9px]">Buy $JOFI</span>
          <img src={arrow} alt="arrow" />
        </button>
      </div>

      <div
        className="order-1 md:order-2 w-[300px] md:w-[681.19px] md:h-[696px] flex flex-col items-center"
        data-aos="fade-up"
      >
        <img src={lion} alt="Lion" className="w-full" />
        <div className="flex flex-col items-center gap-3 mt-5">
          <p className="text-[#F4E7DD] text-lg md:text-2xl font-[597] leading-[28px] md:leading-[33.6px]">
            SCROLL
          </p>
          <div>
            <img src={arrowDown} alt="arrow down" className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
