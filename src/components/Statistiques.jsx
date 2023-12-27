import React from 'react'

const Statistiques = ({img, alt, title, subTitle }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-0.5'>
        <div className='bg-[#F77F00] w-[120px] h-[120px] rounded-full grid place-content-center'>
          <img src={img} alt={alt}/>
        </div>
        <h1 className='text-3xl font-extrabold uppercase'>{title}</h1>
        <span className='uppercase tracking-wider text-center'>{subTitle}</span>
    </div>
  )
}

export default Statistiques