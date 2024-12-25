import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BenefitCard from './BenefitCard';

import { FeaturesSection, ProcessStep } from '../FeaturesSection';
import Banner from '../Banner';
import CTASection from '../CTASection';

const benefits = [
  "Identify duplicate lead and account information quickly and reduce unnecessary expenses",
  "Bring your database up to date, accurate, and regulatory-compliant",
  "Increase marketing ROI by creating more accurate operations",
  "Avoid annoying current customers by sending out incorrect mailings"
];


const process = [
  {
    title: "Data Collection",
    description: "We gather your existing database and prepare it for the cleansing process"
  },
  {
    title: "Analysis & Validation",
    description: "Cross-reference your data against our 28.4 million B2B contact records"
  },
  {
    title: "Cleansing & Correction",
    description: "Remove duplicates, correct errors, and standardize formats"
  },
  {
    title: "Quality Assurance",
    description: "Final verification and compliance check of the cleaned data"
  }
];
const featuresData={
  img:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`
,
header:"Transform Your Data Quality"
,
para:` Since B2B data is constantly evolving, you may discover that your database is out of date and
                underperforming. Our data cleansing service ensures that your business data remains accurate,
                up-to-date, and valuable for your marketing efforts.`
  
,
 sererate:(<> <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">What is Data Cleansing?</h3>
                <p className="text-black">
                  Data Cleansing maintains your business data up to date by cross-referencing and correcting your
                  information against our extensive B2B contact records culled from over 4.8 million business records.
                </p>
              </div></>)

}
const CleansingData = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  const handleGetStartedClick=()=>{
console.log(" CTA section clicked ");

  }

  return (
    <main className="min-h-screen">
      

<Banner
 title="Data Cleansing Solutions" 
 image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
/>
      {/* Introduction Section */}

      <section className="py-10 bg-gray-50">
      <FeaturesSection {...featuresData}/>
    </section>
      

      {/* Benefits Section */}
      <section className="py-10 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12" data-aos="fade-up">
            The Benefits of Data Cleansing
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12" data-aos="fade-up">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-12xl  mx-auto">
            {process.map((step, index) => (
              <ProcessStep 
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <CTASection
        title="Ready to Clean Your Data?"
        description="Get started with our data cleansing service today and improve your business efficiency."
        buttonText="Get Started"
        onButtonClick={handleGetStartedClick}
      />
      </section>
    </main>
  );
};

export default CleansingData;