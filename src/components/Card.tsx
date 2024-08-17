import React from "react";

interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  cardClassName?: string;
}

const Card = ({ children, backgroundColor, cardClassName }: CardProps) => {
  return (
    <div
      className={`w-full max-w-[500px] h-auto md:h-[213px] rounded-2xl ${cardClassName} flex items-center justify-center`}
      style={backgroundColor ? { background: backgroundColor } : {}}
    >
      <div className={`p-4 rounded-lg text-center`}>{children}</div>
    </div>
  );
};

export default Card;
