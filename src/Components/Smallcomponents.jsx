
import { CheckCircle } from 'lucide-react';
 
 export const FeaturePoint = ({ text }) => {
    return (
      <li className="flex items-center space-x-3 ">
        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
        <span className="text-gray-700">{text}</span>
      </li>
    );
  };
  


 export const StatCard = ({ number, label }) => {
    return (
      <div 
        className="bg-white p-6 rounded-lg shadow-lg text-center"
        data-aos="zoom-in"
      >
        <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    );
  };


  export const ImageEdege=({item,description})=>{

    return  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
    <div className="text-4xl font-bold">{item}</div>
    <div className="text-sm">{description}</div>
  </div>
  }