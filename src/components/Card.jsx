import React from "react";
import Button from "./Button";

const Card = ({ cardTitle, cardDesc, title }) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="uppercase font-medium text-[#424686] hidden lg:block">
        {title}
      </h1>
      <h1 className="text-[#0A0F6A] text-2xl leading-7 font-bold uppercase">
        {cardTitle}
      </h1>
      <p className="text-[#585858]">{cardDesc}</p>
      <Button />
    </div>
  );
};

export default Card;
