import React from "react";

const Process = ({img, alt, paragraph, color, display}) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-3">
        <div className="h-[120px] w-[120px] bg-[#262740] rounded-full grid place-content-center z-10" style={{backgroundColor : color}}>
          <img src={img} alt={alt} />
        </div>
        <p className="text-center">{paragraph}</p>
        <span className={`bdr h-32 border border-dashed border-[#999] ${display}`}></span>
      </div>
      
    </div>
  );
};

export default Process;
