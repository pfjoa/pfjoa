import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({href="", normal}) => {
  return (
    <button>
       {normal==="no"?
          <a href={href} className="bg-[#3655FC] w-fit h-fit p-2 rounded-lg text-white uppercase font-semibold border border-[#3655FC] hover:bg-transparent hover:text-[#3655FC] hover:border hover:border-[#3655FC]">En savoir plus</a>
          :<Link to={href} className="bg-[#3655FC] w-fit h-fit p-2 rounded-lg text-white uppercase font-semibold border border-[#3655FC] hover:bg-transparent hover:text-[#3655FC] hover:border hover:border-[#3655FC]">En savoir plus</Link>
      }
    </button>
  )
}

export default Button