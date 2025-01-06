import Banner from "./Banner";
import React from "react";
import { SectionHeader } from "./SectionHeader";
import Card from "./Cards";
import { Database, DatabaseZap, FileSearch, Mail, Shield, ShieldCheck, Users } from "lucide-react";
import ServiceCard from "./OurServices/ServicesCard";
import { FeaturesSection } from "./FeaturesSection";
import useDocumentTitle from "./Hooks";


const servicesk = [
  {
    title: "Our Goals",
    description: `VG17 Services firmly believes in the long-term
                  effects of decisions that are supported by detailed data. Our
                  approach is founded on rigorous analysis and comprehensive
                  research to inform strategic choices and optimize results. We
                  assist clients in scaling their marketing expenditures by
                  enriching them with hyper-targeted audience data. Our services
                  are affordable for both small and big businesses.`,
    Icon: DatabaseZap
  },
  {
    title: "Our Abilities",
    description: `VG17 Services firmly believes in the long-term
                  effects of decisions that are supported by detailed data. Our
                  approach is founded on rigorous analysis and comprehensive
                  research to inform strategic choices and optimize results. We
                  assist clients in scaling their marketing expenditures by
                  enriching them with hyper-targeted audience data. Our services
                  are affordable for both small and big businesses.`,
    Icon: Shield
  },
  {
    title: "Expertise Areas",
    description: [
      "Leads for IT Users",
      "Data on Healthcare Providers and Physicians",
      "Customized Business Lists",
      "Data Optimization",
      "Data Validation in Real Time",
      "Email Promotion"
    ],
    Icon: Mail
  },
 
];
const Home = () => {
  // Define Banner properties at the top
  const bannerProps = {
    title: (
      <>
        Welcome to <span className="text-blue-500">VG17Services</span>
      </>
    ),
    image: "./src/assets/images/backgroun.jpeg",
    description: "This is a brief description of the banner content.",
    extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
        Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
  };

  const aboutData = {
    header: "About ",
      para: `VG17 Services coordinated approach to Database promotion 
      offers you all the adaptability you require in a simple, easy-to-use format with our focused email database.
       Incredible marketing tools are at your fingertips, making endeavors and projects easier and faster.
        Every advertiser faces a significant challenge,
       and we must collaborate to elevate this issue and raise awareness on a global scale.`,
      para2: `Our team of highly skilled data specialists update our data on a regular basis, customize data sets, and perform thorough verification and checks. In reality, each database is double-verified to ensure that you only receive accurate, reliable, and up-to-date contact information.`,
      img: "./src/assets/images/about-thumb-2.jpg",
      imageside: true,
      sererate: <button className="btn btn-primary bg-blue-500 rounded p-2 mt-4">Read More</button>,
  };

  const services = [
    { 
      title: "Prospect Lists", 
      href: "prospect-lists.html",
      icon: <Users className="w-6 h-6 text-blue-500" />, // Adjusted icon size
      description: "Build targeted prospect lists",
    },
    { 
      title: "Cleansing Data", 
      href: "cleansing-data.html",
      icon: <DatabaseZap className="w-6 h-6 text-green-500  sm:w-9 h-9  " />,
      description: "Clean and optimize your data",
    },
    { 
      title: "Appending Data", 
      href: "appending-data.html",
      icon: <Database className="w-6 h-6 text-purple-500 sm:w-9 h-9" />,
      description: "Enrich your existing data",
    },
    { 
      title: "Marketing via Email", 
      href: "marketing-via-email.html",
      icon: <Mail className="w-6 h-6 text-red-500 sm:w-9 h-9" />,
      description: "Reach your audience effectively",
    },
    { 
      title: "Profiling of Data", 
      href: "profiling-of-data.html",
      icon: <FileSearch className="w-6 h-6 text-yellow-500 sm:w-9 h-9" />,
      description: "Analyze and profile your data",
    },
    { 
      title: "Verification of Data", 
      href: "verification-of-data.html",
      icon: <ShieldCheck className="w-6 h-6 text-teal-500 sm:w-9 h-9" />,
      description: "Verify data accuracy",
    },
  ];
  useDocumentTitle("Home");
  return (
    <>
      <Banner {...bannerProps} />
      <section className="py-10">
     <FeaturesSection {...aboutData} />

      </section>
      <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
        <SectionHeader title="Our Services" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of specialized services designed to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((area, index) => (
            <Card 
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))} 
        </div>
      </div>
    </section>
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 px-10 mt-5 bg-grey-600 py-10">
            {servicesk.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                delay={index * 100}
              />
            ))}
          </div>
         
    </>
  );
};

export default Home;
