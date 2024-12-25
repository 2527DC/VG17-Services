import React from "react";

const ServiceCard = ({ title, description, Icon, delay }) => {
  return (
    <div
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex flex-col items-center">
        {/* Icon Section */}
        <div className="bg-blue-50 p-4 rounded-full mb-6">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>

        {/* Title Section */}
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h3>

        {/* Description Section */}
        <div className="text-gray-600 text-center">
          {Array.isArray(description) ? (
            <ul className="text-gray-700 list-disc list-inside text-left">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
