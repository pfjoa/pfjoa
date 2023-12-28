import React from 'react'

export const CardObjectifs = ({image, imageAlt, title, desc}) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
        <img src={image} alt={imageAlt} className='w-16 h-16' loading='lazy'/>
        <p className='font-semibold text-lg text-[#272727] uppercase'>{title}</p>
        <p className='w-64'>{desc}</p>
    </div>
  )
}
