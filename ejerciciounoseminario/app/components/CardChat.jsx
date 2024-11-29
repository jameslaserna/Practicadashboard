import React from "react";


const CardChat = () => {
  return (
    <div className="bg-white p-2 rounded-xl shadow-lg w-80 text-start">
      <h2 className="text-lg font-semibold mb-4">Your subscribers</h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-orange-500 flex justify-center items-center text-white text-xl">
          {/* Representación del avatar, reemplázalo si necesitas una imagen */}
          C
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <p className="font-medium">Crafts Corner</p>
          </div>
          <p className="text-sm text-gray-500">823K Subscribers</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center text-white text-xl">
          {/* Representación del avatar, reemplázalo si necesitas una imagen */}
          Z
        </div>
        <div>
          <p className="font-medium">Zone Explorers</p>
          <p className="text-sm text-gray-500">75K Subscribers</p>
        </div>
      </div>
    </div>
  );
};

export default CardChat;

