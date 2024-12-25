import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  "20+ Years of Experience",
  "24/7 Customer Support",
  "99.9% Data Accuracy",
  "Customized Solutions"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">Why Choose Us?</h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-lg text-gray-700">{reason}</span>
                </div>  
              ))}
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Business Team"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
