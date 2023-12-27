import React from 'react'
import CardEvents from '../components/Card-events'

const Events = () => {
  const images = [{},{},{}];
  return (
    <div className='container mx-auto w-10/12 mt-10'>
      <div className='flex flex-col items-center space-y-10 justify-between xl:flex-row'>
        <div className='flex flex-col gap-[2vh] justify-evenly'>
          <h1 className='text-[#040650] font-bold text-4xl lg:w-[450px]'>Events</h1>
          <p className='text-[#717171] max-w-[450px] min-w-[250px] text-base'>
          La Plateforme des Jeunes organise une variété d'événements visant à soutenir l'entrepreneuriat des jeunes, l'emploi et le développement. Ces événements comprennent des ateliers, des expositions et des sessions de formation. <br /><br />
          De plus, la plateforme collabore avec d'autres organisations pour fournir une formation et un soutien aux jeunes entrepreneurs, en mettant l'accent sur des domaines tels que le soutien à la pré-création et l'entrepreneuriat. Les événements visent à fournir aux jeunes les compétences et les connaissances dont ils ont besoin pour réussir sur le marché du travail et en tant qu'entrepreneurs.
          </p>
        </div>
        <div><img src="images/presentation.png" alt="events-illustration" className='w-[350px] lg:w-[450px]'/></div>
      </div>
      <div className='flex gap-[4vw] flex-wrap mt-16 justify-center md:justify-start'>
        {
          images.length? images.map((e, index)=>{return <CardEvents key={index}/> }): <p className='text-red-500 uppercase'>aucun event</p>
        }
      </div>
    </div>
  )
}

export default Events