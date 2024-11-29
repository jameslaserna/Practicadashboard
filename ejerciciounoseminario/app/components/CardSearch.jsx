import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineClockCircle } from 'react-icons/ai';

const CardSearch = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full sm:max-w-md mx-auto ">
      {/* Contenedor de búsqueda */}
      <div className="flex items-center space-x-2">
        {/* Input de búsqueda */}
        <CiSearch size={22} className="text-gray-500" />
        <input
          type="text"
          placeholder="Music Video"
          className="flex-grow text-gray-700 placeholder-gray-500 bg-transparent outline-none"
        />
      </div>

      {/* Línea divisora */}
      <hr className="my-3 border-gray-300" />

      {/* Contenedor de historial */}
      <div className="flex items-center space-x-2 text-gray-500">
        <AiOutlineClockCircle size={22} />
        <span className="text-sm">Top 100 music videos 2024</span>
      </div>
    </div>
  );
};

export default CardSearch;
