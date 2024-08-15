import React from "react";
import Card from "./Card";

const Ecosystem = () => {
  const cards = [
    {
      content: (
        <div className="text-5xl font-[807]">
          <p className="w-[328px] text-left text-[#F4E7DD]">The Jofi Ecosystem</p>
        </div>
      ),
      backgroundColor: "transparent",
      cardClassName: "border-[#D3A178] border flex justify-center items-center",
    },
    {
      content: (
        <div className="p-[30px] text-left space-y-2">
          <h1
            className="text-[32px] font-[704] text-[#D3A178] leading-[44.8px]"
          >
            JOFIA
          </h1>
          <p className="text-xl text-[#F4E7DD] w-[449px] font-[597]">A tradingBOT you can count on for boundless ROI</p>
        </div>
      ),
      backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
      cardClassName:
        "border-[#D3A178] border-solid border-2 flex justify-center items-center ",
    },
    {
        content: (
            <div className="p-[30px] text-left space-y-2">
              <h1
                className="text-[32px] font-[704] text-[#D3A178] leading-[44.8px]"
              >
                JOFI CASINO
              </h1>
              <p className="text-xl text-[#F4E7DD] w-[449px] font-[597]">The first Casino to ever offer you a win or a win!</p>
            </div>
          ),
          backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
          cardClassName:
            "border-[#D3A178] border-solid border-2 flex justify-center items-center ",
    },
    {
        content: (
            <div className="p-[30px] text-left space-y-2">
              <h1
                className="text-[32px] font-[704] text-[#D3A178] leading-[44.8px]"
              >
              JOFI SensoryVerse
              </h1>
              <p className="text-xl text-[#F4E7DD] w-[449px] font-[597]">An AI that offers mental health support like none before </p>
            </div>
          ),
          backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
          cardClassName:
            "border-[#D3A178] border-solid border-2 flex justify-center items-center ",
    },
    {
        content: (
            <div className="p-[30px] text-left space-y-2">
              <h1
                className="text-[32px] font-[704] text-[#D3A178] leading-[44.8px]"
              >
              JOFI GAMING
              </h1>
              <p className="text-xl text-[#F4E7DD] w-[449px] font-[597]">Unlimited Fun, Unlimited Wins!!!</p>
            </div>
          ),
          backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
          cardClassName:
            "border-[#D3A178] border-solid border-2 flex justify-center items-center ",
    },
    {
        content: (
            <div className="p-[30px] text-left space-y-2">
              <h1
                className="text-[32px] font-[704] text-[#D3A178] leading-[44.8px]"
              >
                JOFI  Foundation
              </h1>
              <p className="text-xl text-[#F4E7DD] w-[449px] font-[597]">Continuing in the footsteps of JOFI INU, creating awareness for mental health + offering support in donations.</p>
            </div>
          ),
          backgroundColor: "linear-gradient(180deg, #19120B 0%, #2B1F16 100%)",
          cardClassName:
            "border-[#D3A178] border-solid border-2 flex justify-center items-center ",
    },
  ];

  return (
    <div className="gap-3 grid grid-cols-2 w-[1040px] mx-auto py-20">
      {cards.map((card, index) => (
        <Card
          key={index}
          backgroundColor={card.backgroundColor}
          cardClassName={card.cardClassName}
        >
          {card.content}
        </Card>
      ))}
    </div>
  );
};

export default Ecosystem;
