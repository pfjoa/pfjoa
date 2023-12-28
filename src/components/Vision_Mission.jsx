import React from "react";

const Vision_Mission = ({visionSmallTitle, visionTitle, visionContent, missionSmallTitle, missionTitle, missionContent, visionImage, missionImage, visionAlt, missionAlt}) => {
  
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center xl:items-start gap-y-10 xl:justify-center xl:gap-x-16 xl:flex-row">
        <div className="header w-fit items-center xl:items-start flex flex-col gap-y-5 text-center xl:text-start">
          <div className="w-fit">
            <h3 className="text-[#FFA336] text-xs tracking-widest uppercase">
              {visionSmallTitle}
            </h3>
            <h1 className="text-[#000667] tracking-widest font-[500] uppercase">
              {visionTitle}
            </h1>
          </div>
          <p className="text-[#363636] w-[22em] mx-auto xl:mx-0 text-justify">
            {visionContent}
          </p>
        </div>
        <div>
          <img src={visionImage} alt={visionAlt} loading="lazy"/>
        </div>
      </div>
      <div className="flex flex-col mt-10 xl:mt-0 items-center xl:items-start gap-y-10 xl:justify-center xl:gap-x-16 xl:flex-row-reverse">
        <div className="header w-fit flex flex-col gap-y-5 items-center xl:items-start text-center xl:text-start">
          <div className="w-fit">
            <h3 className="text-[#FFA336] text-xs tracking-widest uppercase">
              {missionSmallTitle}
            </h3>
            <h1 className="text-[#000667] tracking-widest font-[500] uppercase">
              {missionTitle}
            </h1>
          </div>
          <p className="text-[#363636] w-[22em] mx-auto xl:mx-0 text-justify">
            {missionContent}
          </p>
        </div>
        <div className="mt-0 xl:mt-[-3%]">
          <img src={missionImage} alt={missionAlt} loading="lazy"/>
        </div>
      </div>
    </section>
  );
};

export default Vision_Mission;
