import catman from "../assets/catman.png";

const About = () => {
  return (
    <section className="pl-40">
      <div className="flex flex-col w-[1040px] gap-10">
        <div className="flex items-center justify-center py-5 px-[30px] h-[99px] w-[436px] border-solid border-[3px] rounded-[100px] whitespace-nowrap">
          <div className="h-3.5 w-3.5 bg-[#F4E7DD] rounded-full"></div>
          <p className="text-[40px] font-[597px] text-[#F4E7DD]">
            About JofiAI
          </p>{" "}
          <div className="h-3.5 w-3.5 bg-[#F4E7DD] rounded-full"></div>
        </div>
        <div className="flex items-center gap-5">
          <img src={catman} alt="" className="w-[248px] h-[401px]" />
          <div className="w-[776px]">
            <p className="text-2xl font-[597] leading-[33.6px] text-[#F4E7DD] ">
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
