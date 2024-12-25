import React from 'react';
import { 
  Users, 
  Stethoscope, 
  ClipboardList, 
  BarChart2, 
  ShieldCheck, 
  Mail 
} from 'lucide-react';
import Card from './Cards';
import { SectionHeader } from './SectionHeader';


const ExpertiseAreas = () => {
  const expertiseAreas = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Leads for IT Users",
      description: "Targeted leads for technology professionals and decision-makers"
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Data on Healthcare Providers",
      description: "Comprehensive database of healthcare professionals and facilities"
    },
    {
      icon: <ClipboardList className="w-12 h-12" />,
      title: "Customized Business Lists",
      description: "Tailored business contact lists based on your specific needs"
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Data Optimization",
      description: "Advanced data analysis and optimization services"
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Data Validation",
      description: "Real-time verification and validation of contact information"
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Promotion",
      description: "Strategic email marketing and promotional campaigns"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <SectionHeader title={"Our Areas of Expertise"}/>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of specialized services designed to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
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
  );
};

export default ExpertiseAreas;
