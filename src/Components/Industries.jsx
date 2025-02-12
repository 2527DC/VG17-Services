import { Building2, Mail, Phone } from "lucide-react";
import IndustriesIntro from "./IndustriesIntro";
import IndustriesList from "./IndustriesList";
import Banner from "./Banner";
import { FeaturesSection } from "./FeaturesSection";

const Industries=()=>{

  const bannerProps = {
    title: "Industries We Serve",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    description: "Unlock the power of verified data to drive your business growth",
    extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
       Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
  };
  const industryData = {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    header: "Industries We Serve",
    para: [
      "VG17 Services offers a reliable Industry Email List that yields a substantial increase in sales volume and inspires advertisers.",
      "Industry Mailing Lists are essential in elevating B2B advertising campaigns for any progressive organization.",
    ],
    para2: "Industry Mailing Lists can significantly increase lead generation and brand proximity for any company.",
    sererate: null, // Add any additional content you'd like to display here
    imageside: false, // Set to `true` if you want the image on the left side
  };
return(

    
<main>

   <Banner {...bannerProps}/>
   <section className="py-16">
      <FeaturesSection {...industryData} />
    </section>
    <IndustriesList/>
    
<section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h5 className="text-2xl font-bold text-gray-900 mb-8">
            For Services That Boost Your Sales And Enhance Conversion Rates, Contact Us!
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <a
                href="tel:0000000000"
                className="text-gray-800 font-medium hover:text-purple-600 transition-colors duration-200"
              >
                0000000000
              </a>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <a
                href="mailto:info@VG17 Services.com"
                className="text-gray-800 font-medium hover:text-purple-600 transition-colors duration-200"
              >
                info@VG17 Services.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
</main>
);
}


export default Industries