import React from 'react';

const IndustriesIntro = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 transform transition-all duration-500 hover:scale-105">
            <h3 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
              Industries We Serve
            </h3>
            <p className="text-gray-600 leading-relaxed">
              VG17 Services offers a reliable Industry Email List that yields a substantial
              increase in sales volume and inspires advertisers. Industry Mailing Lists are essential
              in elevating B2B advertising campaigns for any progressive organization.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Industry Mailing Lists can significantly increase lead generation and brand proximity for
              any company.
            </p>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Business Building"
              className="rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesIntro;