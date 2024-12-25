import React from 'react';
import { CheckCircle } from 'lucide-react';

const BenefitCard = ({ benefit }) => {
  return (
    <div 
      className="flex items-start space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
      data-aos="fade-up"
    >
      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
      <p className="text-white text-lg">{benefit}</p>
    </div>
  );
};

export default BenefitCard;