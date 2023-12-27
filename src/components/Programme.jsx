import React from "react";

const Programme = ({ img, alt, title, paragraph, color, url }) => {
  return (
    <div className="flex flex-col gap-y-5 w-12/12">
      <div className="relative overflow-hidden group w-fit">
        <img src={img} alt={alt}/>
        <div className="absolute bg-[#090b24]  bg-opacity-0 p-2 bottom-0 translate-y-[80%] transform text-white duration-500 group-hover:-translate-y-0 group-hover:bg-opacity-100 h-full hidden xl:flex flex-col gap-y-1 ">
          <h1 className="font-semibold uppercase group-hover:ml-[30%] transform duration-1000 border border-t-transparent w-fit border-l-transparent border-r-transparent border-b-2">
            {title}
          </h1>
          <div className="transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100">
            <p>{paragraph}</p>
            <a
              href={`http://www.indh.ma/${url}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit font-semibold hover:border-b hover:border-white"
            >
              Lire la suite...
            </a>
          </div>
        </div>
      </div>
      <div className="xl:hidden max-w-[350px] flex flex-col gap-y-5">
        <h1 className="font-semibold self-center uppercase border border-black border-t-transparent border-l-transparent border-r-transparent w-fit border-b-2">
          {title}
        </h1>
        <p>{paragraph}</p>
        <a
          href={`http://www.indh.ma/${url}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-semibold hover:border-b hover:border-[#0c1041] text-[#0c1041]"
        >
          Lire la suite...
        </a>
      </div>
    </div>
  );
};

export default Programme;
