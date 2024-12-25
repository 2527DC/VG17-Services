import React from "react";
import { motion } from 'framer-motion';
import { IntroSection } from "../IntroSection";
import { ServicesList } from "../ServicesList";
import { FAQ } from "../FAQ";
import Banner from "../Banner";

const HealthcareEmailList = () => {

  const bannerProps = {
    title: "Healthcare List",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    description: "Unlock the power of verified data to drive your business growth",
    extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
       Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
  };
  return (
   <>
      {/* Header Section */}
   <Banner {...bannerProps}/>


    
    
        {/* Benefits Section */}
       <IntroSection></IntroSection>
        {/* Reseller Section */}
       <ServicesList></ServicesList>
    

</>
  );
};

export default HealthcareEmailList;