import lion from "../assets/glowbg.png";
import arrow from "../assets/right.png";
import arrowDown from "../assets/arrowDown.png";

const Hero = () => {
  return (
    <section className="flex gap-32 pl-40 h-screen items-center">
      <div className="w-[385px] flex flex-col gap-5">
        <h1 className="text-[101px] font-[807] text-[#F4E7DD] leading-[91.13px] uppercase font-travels">
          Jofi
          <br /> AI
        </h1>
        <h4 className="font-[598] w-[379px] text-base leading-[21.6px] text-[#F4E7DD] font-[author] uppercase">
          Join the revolution inspired by Sigmund Freud's loyal companion, Jofi.
          Invest in Jofi Coin and be part of a movement that merges history,
          innovation, and mental health awareness.
        </h4>
        <button className="w-[151.85px] py-5 px-[30px] bg-[#D3A178] flex items-center gap-1 text-black justify-center uppercase">
          <span className="text-[9px]">Buy $JOFI</span>{" "}
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="w-[681.19px] height-[696px]">
        <img src={lion} alt="" />
      <div className="flex flex-col items-center gap-3">
        <p className="text-[#F4E7DD] text-2xl font-[597] leading-[33.6px]">
          SCROLL
        </p>
        <div>
        <img src={arrowDown} alt="" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
