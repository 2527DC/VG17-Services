import React from 'react';

const CTASection = ({ title, description, buttonText, onButtonClick }) => {
  return (
   
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <button
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
  
  );
};

export default CTASection;
