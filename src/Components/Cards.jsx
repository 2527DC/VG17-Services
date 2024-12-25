import React from 'react';

const Card = ({ icon, title, description,m }) => {
  return (
    <div
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative p-7">
        <div className="mb-6 text-blue-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:bg-white/10 transition-colors duration-300">{m}</div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-50 rounded-tr-full transform -translate-x-8 translate-y-8 group-hover:bg-white/10 transition-colors duration-300"></div>
      </div>
    </div>
  );
};

export default Card;
