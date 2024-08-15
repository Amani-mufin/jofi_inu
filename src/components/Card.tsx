import React from "react";
interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  cardClassName?: string;
}
const Card = ({ children, backgroundColor, cardClassName }: CardProps) => {
  return (
    <div
      className={`w-[500px] h-[213px] rounded-2xl ${cardClassName}`}
      style={backgroundColor ? { background: backgroundColor } : {}}
    >
      <div className={`p-4 rounded-lg text-center`}>{children}</div>
    </div>
  );
};

export default Card;
