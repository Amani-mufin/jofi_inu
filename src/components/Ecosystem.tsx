import Card from "./Card";

const Ecosystem = () => {
  const cards = [
    {
      content: (
        <div className="p-16 text-[27px] md:text-5xl font-[807]" data-aos="fade-up">
          <p className="w-full text-left text-[#F4E7DD]">The Jofi Ecosystem</p>
        </div>
      ),
      backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
      cardClassName:
        "border-[#D3A178] border-solid border-[1px] flex justify-center items-center",
    },
    {
      content: (
        <div className="p-4 md:p-[30px] text-left space-y-2" data-aos="fade-up">
          <h1 className="text-2xl md:text-[32px] font-[704] text-[#D3A178] leading-[30px] md:leading-[44.8px]">
            JOFIA
          </h1>
          <p className="text-sm md:text-xl text-[#F4E7DD] w-full md:w-[449px] font-[597]">
            A tradingBOT you can count on for boundless ROI
          </p>
        </div>
      ),
      backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
      cardClassName:
        "border-[#D3A178] border-solid border-2 flex justify-center items-center",
    },
    {
      content: (
        <div className="p-4 md:p-[30px] text-left space-y-2" data-aos="fade-up">
          <h1 className="text-2xl md:text-[32px] font-[704] text-[#D3A178] leading-[30px] md:leading-[44.8px]">
            JOFI CASINO
          </h1>
          <p className="text-sm md:text-xl text-[#F4E7DD] w-full md:w-[449px] font-[597]">
            The first Casino to ever offer you a win or a win!
          </p>
        </div>
      ),
      backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
      cardClassName:
        "border-[#D3A178] border-solid border-2 flex justify-center items-center",
    },
    {
      content: (
        <div className="p-4 md:p-[30px] text-left space-y-2" data-aos="fade-up">
          <h1 className="text-2xl md:text-[32px] font-[704] text-[#D3A178] leading-[30px] md:leading-[44.8px]">
            JOFI SensoryVerse
          </h1>
          <p className="text-sm md:text-xl text-[#F4E7DD] w-full md:w-[449px] font-[597]">
            An AI that offers mental health support like none before
          </p>
        </div>
      ),
      backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
      cardClassName:
        "border-[#D3A178] border-solid border-2 flex justify-center items-center",
    },
    {
      content: (
        <div className="p-4 md:p-[30px] text-left space-y-2" data-aos="fade-up">
          <h1 className="text-2xl md:text-[32px] font-[704] text-[#D3A178] leading-[30px] md:leading-[44.8px]">
            JOFI GAMING
          </h1>
          <p className="text-sm md:text-xl text-[#F4E7DD] w-full md:w-[449px] font-[597]">
            Unlimited Fun, Unlimited Wins!!!
          </p>
        </div>
      ),
      backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
      cardClassName:
        "border-[#D3A178] border-solid border-2 flex justify-center items-center",
    },
    {
      content: (
        <div className="p-4 md:p-[30px] text-left space-y-2" data-aos="fade-up">
          <h1 className="text-2xl md:text-[32px] font-[704] text-[#D3A178] leading-[30px] md:leading-[44.8px]">
            JOFI Foundation
          </h1>
          <p className="text-sm md:text-xl text-[#F4E7DD] w-full md:w-[449px] font-[597]">
            Continuing in the footsteps of JOFI INU, creating awareness for
            mental health + offering support in donations.
          </p>
        </div>
      ),
      backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
      cardClassName:
        "border-[#D3A178] border-solid border-2 flex justify-center items-center",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1040px] mx-auto py-10 px-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          backgroundColor={card.backgroundColor}
          cardClassName={card.cardClassName}
          data-aos="fade-up"
        >
          {card.content}
        </Card>
      ))}
    </div>
  );
};

export default Ecosystem;
