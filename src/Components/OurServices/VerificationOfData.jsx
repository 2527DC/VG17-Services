import React from "react";
import Banner from "../Banner";
import { FeaturesSection } from "../FeaturesSection";


const VerificationOfData = () => {

  const bannerProps = {
    title: "Verification Of Data",
    image: "assets/images/verification.jpg",
    description: "Unlock the power of verified data to drive your business growth",
    extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
       Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
  };
  const benefits = [
    "Improves business choices by reducing data errors.",
    "CRM productivity is improved.",
    "Reduces the expense of data integration and maintenance.",
    "Improve the effectiveness of email campaigns and call centers."
  ];

  const features=[
    {
      header: "Verification Of Data",
      para: [
       `Cleanse, validate, and keep your contact information accurate.Incomplete and
        inaccurate data can not only harm your campaign’s
                outcomes but can also increase costs and damage your company’s
                reputation.`],
      para2: `We evaluate and validate each of your contact dssata and clean up
                contact entries in your database at BtoB Global. Whether by phone
                or email, our verification procedure is both real-time and annual.
                Our data validation method is tailored to your business model and
                saves you 55% – 71% on data management.`,
      img: "assets/images/vimg1.jpg",
      imageside: false,
      sererate: <button className="btn btn-primary mt-4">Learn More</button>,
    },

    {
      header: "The Benefits",
      para: [
        "Improves business choices by reducing data errors.",
        "CRM productivity is improved.",
        "Reduces the expense of data integration and maintenance.",
        "Improve the effectiveness of email campaigns and call centers."
      ],
      para2: `Our team of highly skilled data specialists update our data on a regular basis, customize data sets, and perform thorough verification and checks. In reality, each database is double-verified to ensure that you only receive accurate, reliable, and up-to-date contact information.`,
      img:  "/assets/images/b1.jpg",
      imageside: true,
    }
  ]

  return (
    <main>
      <Banner {...bannerProps}/>
      
      {features.map((feature, index) => (
        <section
          key={index}
          className="py-10  text-black"
        >
          <FeaturesSection {...feature} />
        </section> ))}  

    </main>
  );
};

export default VerificationOfData;
