import React from 'react'
import Image from 'next/image'

const CardStadistica = () => {
  return (
    <div className='bg-white p-6 rounded-3xl shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto'>
      <div>
        <div className='flex justify-between'>
          <p className='text-black text-lg sm:text-xl md:text-2xl font-semibold'>Stats</p>
          <p className='text-black text-sm sm:text-base font-light border border-gray-300 rounded-xl px-2 py-1'>Week</p>
        </div>
        <div className='flex justify-start'>
          <h2 className='text-black text-4xl sm:text-5xl md:text-6xl font-bold'>
            +35%
          </h2>
        </div>
        <div className='mt-4'>
          <Image 
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTM8zmx4sbY4-ByvnZCnDlhT2TVleGt_G3Dx-Jz38vNjQkssP-m"
            height={500}
            width={600} 
            alt="ejercicoseminario"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default CardStadistica
