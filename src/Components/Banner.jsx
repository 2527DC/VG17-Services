import React from 'react';

const Banner = ({ title, image, description, extraContent }) => {
  return (
    <>
      <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{title}</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-white mb-4">
              {description}
            </p>
          )}

          {/* Extra Content */}
          {extraContent && (
            <p className="text-base md:text-lg text-gray-200">
              {extraContent}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
