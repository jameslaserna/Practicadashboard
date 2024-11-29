"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DiAndroid } from "react-icons/di";
import { RiHome2Line, RiSearch2Line, RiRefreshLine, RiVideoLine } from "react-icons/ri";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-gray-100 shadow-lg w-20 h-screen p-4">
      {/* Botón de menú para dispositivos pequeños */}
      <button className="p-4 md:hidden" onClick={toggleSidebar}>
        <GiHamburgerMenu size={20} />
      </button>

      {/* Contenedor de íconos principales */}
      <div className="flex flex-col items-center space-y-6 mt-4">
        <a href="#" className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-lg shadow-lg">
          <DiAndroid size={30} className="text-white" />
        </a>
        <a href="#" className="w-12 h-12 bg-black flex items-center justify-center rounded-lg shadow-lg">
          <RiHome2Line size={30} className="text-white" />
        </a>
        <a href="#" className="w-12 h-12 bg-transparent flex items-center justify-center rounded-lg shadow-lg hover:bg-black">
          <RiSearch2Line size={30} className="text-black hover:text-white" />
        </a>
        <a href="#" className="w-12 h-12 bg-transparent flex items-center justify-center rounded-lg shadow-lg hover:bg-black">
          <RiRefreshLine size={30} className="text-black hover:text-white" />
        </a>
        <a href="#" className="w-12 h-12 bg-transparent flex items-center justify-center rounded-lg shadow-lg hover:bg-black">
          <RiVideoLine size={30} className="text-black hover:text-white" />
        </a>
      </div>

      {/* Contenedor de imágenes de perfil */}
      <div className="flex flex-col items-center space-y-4 mt-auto">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
          <Image
            src="https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg?t=st=1732893781~exp=1732897381~hmac=fdadaa64ca782857a8733b23f64966629418adf5d6ead4b634feb34624e1d8c9&w=740"
            width={48}
            height={48}
            alt="Perfil"
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
          <Image
            src="https://img.freepik.com/foto-gratis/retrato-joven-feliz-sonriendo-contra-espacio-blanco_58466-12722.jpg?t=st=1732893585~exp=1732897185~hmac=4c19865d18175b345bfe5bbd3bfab797ae70114d17409de7f11fa1e315abecb6&w=1380"
            width={48}
            height={48}
            alt="Perfil"
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
          <Image
            src="https://img.freepik.com/foto-gratis/hombre-alegre-guapo-sonrisa-feliz_176420-18028.jpg?t=st=1732893601~exp=1732897201~hmac=7d88480c23e6c8b865b061b02030cd95cd0ba245df8946d3ddc8fe20a26eaea3&w=1380"
            width={48}
            height={48}
            alt="Perfil"
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
          <Image
            src="https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg?t=st=1732893781~exp=1732897381~hmac=fdadaa64ca782857a8733b23f64966629418adf5d6ead4b634feb34624e1d8c9&w=740"
            width={48}
            height={48}
            alt="Perfil"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
