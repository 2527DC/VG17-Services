import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FeaturesSection } from '../FeaturesSection';
import { StatCard } from '../Smallcomponents';
import Banner from '../Banner';

const ProspectList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const features = [
    {
      header: "Comprehensive Data Solutions",
      para: [
        "VG17 Services understands the need to license data and works closely with organizations to better understand their licensing targets. We provide comprehensive large-scale databases in both the B2B and B2C industries.",
        "By licensing our data, your business will gain unrestricted access to verified, safe, and accurate information. We guarantee that our data licensing will give you the confidence and flexibility to handle your business process effectively.",
      ],
      img: "/assets/images/img-1.jpeg",
      imageside: true,
    },
    {
      header: "Global Data Coverage",
      para: `VG17 Services maintains an extensive database of over 1 billion+ consumers and 100 million business executives and professionals from 60 nations, which you can license and install on your own servers.`,
      para2: `Our team of highly skilled data specialists update our data regularly, customize data sets, and perform thorough verification checks to ensure accuracy and reliability.`,
      img: "/assets/images/new/prospect.jpg",
      imageside: false,
    },
    {
      header: "The Benefits",
      para: [
        "Improve the quality of consumer and company data",
        "Append customer information (name, email, postal address, etc.)",
        "Reduce data acquisition and administration costs",
        "Ensure data consistency and dependability",
        "Gain access to verified global data for future marketing efforts",
      ],
      para2: `Our team of highly skilled data specialists update our data on a regular basis, customize data sets, and perform thorough verification and checks. In reality, each database is double-verified to ensure that you only receive accurate, reliable, and up-to-date contact information.`,
      img: "/assets/images/about-thumb-2.jpg",
      imageside: true,
      sererate: <button className="btn btn-primary mt-4">Learn More</button>,
    },
  ];

  const bannerProps = {
    title: "Prospect Lists",
    image:
      "/assets/images/new/prospect1.jpg",
    description: "Unlock the power of verified data to drive your business growth",
    extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
       Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Banner {...bannerProps} />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-20">
            <StatCard number="1M+" label="Consumer Records" />
            <StatCard number="10000+" label="Business Executives" />
            <StatCard number="60+" label="Countries Covered" />
            <StatCard number="99.9%" label="Data Accuracy" />
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => (
        <section
          key={index}
          className="py-10 bg-gradient-to-b from-blue-100 to-blue-800 text-white"
        >
          <FeaturesSection {...feature} />
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 to-blue-800">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our prospect lists today and unlock new business opportunities.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProspectList;
