import React from "react";
import { MailingListSection } from "../MailingListSection";
import { Layers } from "lucide-react";
import { CheckCircle } from 'lucide-react';

const TechnologyList = () => {

    const advantages = [
        "Our technology database can become your preferred channel of contact with your target market by assisting you in reaching out to decision-makers.",
        "Our accurate mailing list, which is subject to regular updates, can serve as a gateway to your company's development.",
        "You can use our Technology Users Database to send an email to potential technology vendors providing ERP or Hadoop services.",
      ];
  return (
    <main>
     
     <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-16 mt-8">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Layers className="w-10 h-10 text-blue-400 mr-4 animate-bounce" />
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Technology List
        </h1>
      </div>
    </div>
    <MailingListSection></MailingListSection>
      {/* Advantages */}
     
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-8">
            The Advantages Of Our Technology User Lists
          </h2>
          <p className="mb-8 text-blue-100">
            Our Technology Mailing List supports your company's vision and purpose in several ways, 
            helping you achieve a higher ROI through successful B2B marketing campaigns.
          </p>
          <ul className="space-y-4">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-blue-100">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <img
            className="rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Business Analytics"
          />
        </div>
      </div>
    </section>
     
    </main>
  );
};

export default TechnologyList;
