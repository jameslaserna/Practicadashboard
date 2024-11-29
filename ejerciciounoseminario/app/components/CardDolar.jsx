import React from 'react'
import { RiMoneyEuroCircleLine } from "react-icons/ri";

const CardDolar = () => {
  return (
    <div className='bg-white p-16 rounded-xl shadow-lg w-96 text-center '>
      <div className='pt-7'>
        <button className=' bg-red-400 px-2 py-2 rounded-full'>
        <RiMoneyEuroCircleLine
        className='text-red-100' 
        size={50}/>
        </button>
      </div>
      <div>
        <p className='text-gray-500 pt-10'>Estimated revenue</p>
        <h1 className='text-black text-center text-5xl font-extrabold pt-4'>
            $ 10M
        </h1>
        <button className='text-green-600 bg-green-200 px-2 border border-white rounded-full '>
            $615K
        </button>
      </div>
    </div>
  )
}

export default CardDolar
