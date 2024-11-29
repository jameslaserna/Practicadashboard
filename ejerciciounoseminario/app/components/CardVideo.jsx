import React from "react";

const CardVideo = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md w-full sm:w-[500px] md:w-[600px] lg:w-[700px] relative">
      {/* Video de Vimeo */}
      <iframe
        className="w-full h-64 rounded-xl"
        src="https://player.vimeo.com/video/76979871" // Video de ejemplo de Vimeo
        title="Vimeo video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CardVideo;
