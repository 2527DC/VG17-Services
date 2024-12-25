import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DatabaseZap, Mail, Shield, BarChart } from 'lucide-react';
import WhyChooseUs from './WhyChooseUs';
import ServiceCard from './ServicesCard';
import Banner from '../Banner';


const services = [
  {
    title: "Data Cleansing",
    description: "Ensure your data is accurate, complete, and up-to-date to enhance business decisions.",
    Icon: DatabaseZap
  },
  {
    title: "Prospect Lists",
    description: "Add missing information to your existing database, keeping your records complete and relevant.",
    Icon: Shield
  },
  {
    title: "Marketing Via Email",
    description: "Reach out to your customers with targeted and personalized email campaigns.",
    Icon: Mail
  },
  {
    title: "Verification Of Data",
    description: "Get valuable insights from your data with our advanced analytics solutions.",
    Icon: BarChart
  }
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const bannerProps = {
    title: "Our Services",
    image:"https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    description: "Empowering your business with cutting-edge data solutions and strategic insights",
    extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
        Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <Banner {...bannerProps} />
     
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>  

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      
    </div>
  );
};

export default OurServices;
