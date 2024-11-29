import React from 'react';
import { FaPlay } from 'react-icons/fa';

const CardMiniVideo = ({ videoUrl, title }) => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg bg-orange-50">
      {/* Video Thumbnail */}
      <div className="relative">
        <iframe
          src={videoUrl || 'https://player.vimeo.com/video/76979871'} // Video de Vimeo por defecto
          title={title || 'Vimeo Video'}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-t-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Icono de play (opcional) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FaPlay className="text-white text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default CardMiniVideo;
