
import catman from "../assets/catman.png";

const About = () => {
  return (
    <section className="md:pl-40 p-8 max-w-[1440px] mt-[150px] lg:mt-0  mx-auto" data-aos="fade-up">
      <div className="flex flex-col w-full md:w-[1040px] gap-10 items-center md:items-start">
        <div className="flex items-center justify-center py-3  md:py-5 px-[15px] md:px-[30px] h-[99px] w-[300px] md:w-[436px] border-solid border-[3px] rounded-[100px] whitespace-nowrap">
          <div className="h-3.5 w-3.5 bg-[#F4E7DD] rounded-full"></div>
          <p className="text-[28px] md:text-[40px] font-[597px] text-[#F4E7DD]">
            About JofiAI
          </p>{" "}
          <div className="h-3.5 w-3.5 bg-[#F4E7DD] rounded-full"></div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-5">
          <img src={catman} alt="" className="w-[248px] h-[401px]" />
          <div className="w-full md:w-[776px]">
            <p className="text-lg md:text-2xl font-[597] leading-[33.6px] text-[#F4E7DD] text-center md:text-left">
              Inspired by Sigmund Freud's beloved Chow Chow, Jofi, our meme
              token celebrates the profound bond between humans and animals.
              Jofi inu isn't just a token; it's a tribute to history and a leap
              into the future of crypto.
              <br />
              <br /> Join the pack and be part of a revolutionary journey where
              heritage meets innovation. Invest in JofiAI today and let’s make
              history together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;









