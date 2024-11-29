import React from 'react';
import Image from 'next/image';
import { BsThreeDots } from 'react-icons/bs';

const CardProfile = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full sm:w-80 text-center">
      {/* Encabezado */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-800">Profile</h3>
        <BsThreeDots className="text-gray-500" size={20} />
      </div>

      {/* Imagen de perfil */}
      <div className="relative mt-4 flex justify-center">
        <Image
          src="https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg?t=st=1732893781~exp=1732897381~hmac=fdadaa64ca782857a8733b23f64966629418adf5d6ead4b634feb34624e1d8c9&w=740"
          width={100}
          height={100}
          alt="Profile picture"
          className="rounded-full"
        />
        {/* Verificado */}
        <div className="absolute bottom-2 right-[35%] bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
          <span className="text-white text-xs font-bold">✓</span>
        </div>
      </div>

      {/* Información del perfil */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800">Arthur Curtis</h2>
        <p className="text-sm text-gray-500">@Avenueart86</p>
      </div>

      {/* Estadísticas */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">128,7K</h3>
          <p className="text-sm text-gray-500">Subscribers</p>
        </div>
        <div className="h-6 w-px bg-gray-300"></div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">213</h3>
          <p className="text-sm text-gray-500">Videos</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
