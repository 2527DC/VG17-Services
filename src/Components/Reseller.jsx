import { ArrowRight, Users } from "lucide-react";
import React from 'react';
import { Server, ClipboardList, ListTodo, Mail, UserCheck, Shield } from 'lucide-react';
const Reseller=()=>{

  const services = [
    { icon: Server, title: "Data Cleaning Services" },
    { icon: ClipboardList, title: "Data Pending" },
    { icon: ListTodo, title: "Lists of Specialties" },
    { icon: Mail, title: "Email Promotion" },
    { icon: UserCheck, title: "Profiling of Data" },
    { icon: Shield, title: "Data Validation" }
  ];

const features = [
  "Years of expertise in meeting the diverse needs of agencies",
  "Manufacturers of Automobile Body Shop Equipment",
  "28.4 million business-to-business lead documents",
  "100% email, phone, and postal response rates",
  "Over 80 industries/subcategories - 300 job roles & titles - and 15 countries",
  "3D Verified Data of Higher Quality",
  "The overseas data administration center assists us with cost-cutting measures",
  "Customer Exclusivity in Sales Support",
  "Every job is assigned to an experienced team",
  "Prompt reply"
];


    return<>
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-20">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <Users className="w-16 h-16 text-blue-200 mb-4 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Reseller
          </h1>
        </div>
      </div>
    </div>
    {/*  into section  */}

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-900">Reseller</h2>
            <p className="text-xl font-semibold text-blue-600">
              Collaboration Is A Skill That Can Be Improved.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Your team as an ESP, Agency, List Broker, Marketing Consultant, or Data-Driven Marketing firm
              is always willing to go the additional mile to ensure higher ROMI on your customers'
              campaigns. Agential Global Services Assistance pit crew; we're the well-organized help right around
              the block.
            </p>
            <p className="text-gray-600 leading-relaxed">
              No two customer campaigns are alike, and neither are their demands. Our Agential Global Services
              program would assist you in increasing customer loyalty by achieving expectations and ROI
              targets.
            </p>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Business Collaboration"
              className="rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Collaboration"
              className="rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-105"
            />
          </div>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
              >
                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((Service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <Service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h5 className="text-xl font-semibold text-gray-900">{Service.title}</h5>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600 mt-12 max-w-3xl mx-auto">
          Programs at Agential Global Services offer a range of benefits, including increased revenue,
          improved ROI, and the creation of new business opportunities.
        </p>
      </div>
    </section>

    </>
}
export default Reseller;