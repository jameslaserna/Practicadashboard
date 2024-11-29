import React from 'react';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

const CardAmarillo = () => {
  return (
    <div className="bg-yellow-300 p-6 rounded-3xl shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
      {/* Título */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Choose your interests
      </h3>

      {/* Contenedor de opciones */}
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {/* Opción 1 */}
        <div className="flex items-center space-x-2 border-2 border-gray-700 rounded-full px-4 py-2 bg-transparent text-gray-800">
          <AiOutlinePlus size={16} />
          <span className="text-sm">Architecture</span>
        </div>

        {/* Opción 2 */}
        <div className="flex items-center space-x-2 border-2 border-gray-700 rounded-full px-4 py-2 bg-transparent text-gray-800">
          <AiOutlinePlus size={16} />
          <span className="text-sm">Beauty</span>
        </div>

        {/* Opción seleccionada 3 */}
        <div className="flex items-center space-x-2 border-2 border-transparent rounded-full px-4 py-2 bg-black text-white">
          <AiOutlineCheck size={16} />
          <span className="text-sm">Business</span>
        </div>

        {/* Opción seleccionada 4 */}
        <div className="flex items-center space-x-2 border-2 border-transparent rounded-full px-4 py-2 bg-black text-white">
          <AiOutlineCheck size={16} />
          <span className="text-sm">Car</span>
        </div>

        {/* Opción 5 */}
        <div className="flex items-center space-x-2 border-2 border-gray-700 rounded-full px-4 py-2 bg-transparent text-gray-800">
          <AiOutlinePlus size={16} />
          <span className="text-sm">Communication</span>
        </div>

        {/* Opción 6 */}
        <div className="flex items-center space-x-2 border-2 border-gray-700 rounded-full px-4 py-2 bg-transparent text-gray-800">
          <AiOutlinePlus size={16} />
          <span className="text-sm">Education</span>
        </div>
      </div>
    </div>
  );
};

export default CardAmarillo;
