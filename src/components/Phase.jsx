import React from 'react'

const Phase = ({flex="row", img, alt, title, paragraph, date}) => {
  return (
    <div className={`flex flex-col xl:flex-${flex} gap-y-5 gap-x-10 w-fit mx-auto`}>
      <div>
        <img src={img} alt={alt} className='max-w-[300px] sm:max-w-[350px] mx-auto'/>
      </div>
      <div className='flex flex-col gap-y-5 uppercase'>
        <h1 className='font-bold text-center xl:text-start'>{title}</h1>
        <p className='text-[#343536] text-[14px] max-w-[650px] mx-auto xl:text-[15.3px] 2xl:text-[18px] ml-3 md:text-center xl:text-start'>
          {paragraph}
        </p>
        <h1 className='place-self-end self-end font-bold'>{date}</h1>
      </div>
    </div>
  );
}

// Phase.defaultProps = {
//   flex: "row"
// };

export default Phase