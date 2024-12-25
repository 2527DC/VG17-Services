import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const industries = [
  {
    id: 1,
    title: "Automotive Industry Mailing List",
    content: `The automotive industry encompasses a broad variety of organizations and
              businesses involved in the design and development, manufacturing, marketing,
              selling, and servicing of automobiles.`,
    items: [
      "Automobile Manufacturers",
      "Automobile Body Shop Equipment Manufacturers",
      "Automobile Parts Manufacturers",
      "Automobile Repair",
      "Automobile Dealers",
      "Automobile Accessories",
      "Automobile Insurance",
      "Automobile Leasing"
    ]
  },
  {
    id: 2,
    title: "Construction Industry Mailing List",
    content: `Mid to large-scale construction requires cooperation across multiple disciplines, making it critical 
    for marketers to interact with all decision-makers and influencers within a Construction firm.`,
    items: [
      "Automobile Manufacturers",
      "Automobile Body Shop Equipment Manufacturers",
      "Automobile Parts Manufacturers",
      "Automobile Repair",
      "Automobile Dealers",
      "Automobile Accessories",
      "Automobile Insurance",
      "Automobile Leasing"
    ]
  },
  {
    id: 3,
    title: "Automotive Industry Mailing List",
    content: `The automotive industry encompasses a broad variety of organizations and
              businesses involved in the design and development, manufacturing, marketing,
              selling, and servicing of automobiles.`,
    items: [
      "Automobile Manufacturers",
      "Automobile Body Shop Equipment Manufacturers",
      "Automobile Parts Manufacturers",
      "Automobile Repair",
      "Automobile Dealers",
      "Automobile Accessories",
      "Automobile Insurance",
      "Automobile Leasing"
    ]
  },
  {
    id: 4,
    title: "Automotive Industry Mailing List",
    content: `The automotive industry encompasses a broad variety of organizations and
              businesses involved in the design and development, manufacturing, marketing,
              selling, and servicing of automobiles.`,
    items: [
      "Automobile Manufacturers",
      "Automobile Body Shop Equipment Manufacturers",
      "Automobile Parts Manufacturers",
      "Automobile Repair",
      "Automobile Dealers",
      "Automobile Accessories",
      "Automobile Insurance",
      "Automobile Leasing"
    ]
  },
  {
    id: 5,
    title: "Automotive Industry Mailing List",
    content: `The automotive industry encompasses a broad variety of organizations and
              businesses involved in the design and development, manufacturing, marketing,
              selling, and servicing of automobiles.`,
    items: [
      "Automobile Manufacturers",
      "Automobile Body Shop Equipment Manufacturers",
      "Automobile Parts Manufacturers",
      "Automobile Repair",
      "Automobile Dealers",
      "Automobile Accessories",
      "Automobile Insurance",
      "Automobile Leasing"
    ]
  },
  // Add other industries here...
];

const IndustriesList = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Industry Email List Comprises The Following
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                  activeIndustry === index
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50'
                }`}
              >
                <span>{industry.title}</span>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                  activeIndustry === index ? 'rotate-90' : ''
                }`} />
              </button>
            ))}
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-xl p-6 transform transition-all duration-500 hover:scale-[1.02]">
              <p className="text-gray-600 mb-4">{industries[activeIndustry].content}</p>
              {industries[activeIndustry].items && (
                <ul className="space-y-2">
                  {industries[activeIndustry].items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ChevronRight className="w-4 h-4 text-purple-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesList;