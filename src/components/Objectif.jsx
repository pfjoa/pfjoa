import React, { useEffect } from "react";

const Objectif = ({ image, alt, borderColor, text, deg }) => {
  
  return (
    <div className="text-center">
      <div
      style={{ borderColor: borderColor, borderRightColor:"transparent", rotate:deg}}
        className={`circles border-[25px] w-fit rounded-full`}
      >
        <img src={image} className={`w-[200px]`} style={{rotate: `-${deg}`}} alt={alt} />
      </div>
      <h1 className="text-lg font-normal tracking-wider uppercase leading-10 text-[#333333]">
        {text}
      </h1>
    </div>
  );
};

export default Objectif;
