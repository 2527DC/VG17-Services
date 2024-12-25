import React from "react";
import OurGoals from "./OurGoals";
import ExpertiseAreas from "./ExpertiseAreas";
import Banner from "./Banner";
import { FeaturePoint, ImageEdege } from "./Smallcomponents";
import useDocumentTitle from "./Hooks";
import { FAQ } from "./FAQ";



const points=[
  'Industry expertise and experience',
  'Innovative solutions and approaches',
  'Dedicated support team',
  'Global presence'
];
const bannerProps = {
  title: "ABOUT US",
  image:"https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  description: "Empowering your business with cutting-edge data solutions and strategic insights",
  extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
      Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
};
const AboutUs = () => {
  useDocumentTitle("    AboutUs");
  return (<>
  <Banner  {...bannerProps}/>
   <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              VG17 Services
            </h2>
            <p className="text-xl text-gray-600">
              We are a leading technology solutions provider with years of experience in delivering
              innovative solutions to businesses worldwide.
            </p>
           {points.map((poi,index)=><FeaturePoint key={index  } text={poi}/>)} 
          </div>
          <div className="relative animate-slide-right">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team meeting"
              className="rounded-lg shadow-xl"
            />
        
            <ImageEdege  description={"in business development"} item={"Expertise "}></ImageEdege>
          </div>
        </div>
      </div>
    </section>
    <OurGoals></OurGoals>
   
         
    
    <ExpertiseAreas></ExpertiseAreas>
    <FAQ></FAQ>
  </>
    
  );
};

export default AboutUs;
