import React from 'react'

const Maintenance = () => {
  return (
    <main className='container mx-auto w-10/12 mt-16 flex flex-col xl:flex-row gap-x-14 gap-y-10 justify-center items-center xl:w-9/12'>
      <img src="images/maintenance.png" alt="maintenance" className="max-w-[350px] 2xl:max-w-[500px] mx-auto"/>
      <div className="max-w-[600px] self-center flex flex-col xl:text-justify text-[#383838] gap-y-6">
        <h1 className='text-[#040650] font-black uppercase text-base xl:text-2xl 2xl:text-3xl text-center xl:text-start'>En maintenance</h1>
        <p className='text-base 2xl:text-lg text-center xl:text-justify w-11/12'>Le site Web est en cours de maintenance. Désolé pour le dérangement. Veuillez réessayez plus tard . En attendant, vous pouvez <a href="https://www.facebook.com/profile.php?id=100064845486341" className='text-blue-900 font-semibold'>parcourez plutôt notre page Facebook</a>. Le fonctionnement normal reprendra dès que possible.</p> 
      </div>
    </main>
  )
}

export default Maintenance