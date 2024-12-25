import React from 'react';
import { Target, TrendingUp, BarChart } from 'lucide-react';

const OurGoals = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-95"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 animate-slide-right">
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Our Goals
                </h2>
                <div className="h-1 w-20 bg-white rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {/* Goal Cards */}
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Decisions</h3>
                      <p className="text-white/90">
                        We believe in the long-term effects of decisions supported by detailed data analysis and comprehensive research.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Scalable Marketing</h3>
                      <p className="text-white/90">
                        We help clients scale their marketing expenditures through hyper-targeted audience data and strategic optimization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-4">
                    <BarChart className="w-8 h-8 text-white flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Business Growth</h3>
                      <p className="text-white/90">
                        Our services are designed to be accessible for businesses of all sizes, focusing on fundamental improvements in customer communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 animate-slide-left">
            <div className="relative">
              <img
                className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                src="./src/assets/images/goals.jpeg"
                alt="Business Analytics"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-lg"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 backdrop-blur-lg rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoals;