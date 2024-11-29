import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa'; // Importamos el ícono de React Icons

const CardMasterCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full sm:max-w-md mx-auto relative">

      {/* Contenido principal */}
      <div className="text-center">
        {/* Icono de éxito */}
        <div className="flex justify-center mb-6 sm:mb-14">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <FaCheck className="text-green-500 text-xl" />
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-bold mb-2">Thank you!</h2>
        <p className="text-gray-600 text-sm sm:text-base">Your transaction was successful</p>
      </div>

      {/* Información de la transacción */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-gray-700 text-sm sm:text-base mb-2">
          <span>Transaction ID</span>
          <span>021008007777</span>
        </div>
        <div className="flex justify-between text-gray-700 text-sm sm:text-base mb-2">
          <span>Amount</span>
          <span>$25.00</span>
        </div>
        <div className="flex justify-between text-gray-700 text-sm sm:text-base mb-4">
          <span>Date & Time</span>
          <span>17 Sep 2020 • 11:28 am</span>
        </div>

        {/* Información de la tarjeta */}
        <div className="flex items-center bg-gray-100 p-3 rounded-lg">
          <Image
            src="https://img.freepik.com/vector-premium/diseno-logotipo-hermoso-unico-empresas-comercio-electronico-minorista_1287271-11815.jpg?w=740"
            width={40}
            height={40}
            alt="MasterCard logo"
            className="mr-4"
          />
          <div>
            <p className="font-semibold text-gray-800 text-sm sm:text-base">Madelyn Korsgaard</p>
            <p className="text-gray-500 text-xs sm:text-sm">•••• 0025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMasterCard;
