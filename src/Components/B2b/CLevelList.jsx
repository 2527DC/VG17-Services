import React from 'react';
import Banner from '../Banner';
import { FeaturesSection } from '../FeaturesSection';
import { img } from 'framer-motion/client';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

const CLevelList = () => {
  const emailLists = [
    "CEO Email List (Chief Executive Officer)",
    "CIO Email List (Chief Information Officer)",
    "CTO Email List (Chief Technical Officer)",
    "COO Email List (Chief Operations Officer)",
    "CMO Email List (Chief Marketing Officer)",
    "CAO Email List (Chief Accounts Officer)",
    "CPO Email List (Chief Procurement Officer)",
    "CCO Mailing List (Chief Communications Officer)",
    "CBO Email List (Chief Business Officer)",
    "CFO Email List (Chief Financial Officer)",
    "CSO Email List (Chief Sales Officer)",
    "CAO Email List (Chief Administrative Officer)",
    "CSO Email List (Chief Strategy Officer)",
    "CKO Email List (Chief Knowledge Officer)",
    "CBO Mailing List (Chief Brand Officer)",
    "CIO Email List (Chief Investment Officer)",
    "CLO Email List (Chief Legal Officer)",
    "CCO Email List (Chief Compliance Officer)"
  ];
  const dataHighlights = [
    "Relationship with B2B Data Partners for outstanding implements and developments in data inquiry and action plans",
    "Carefully curated geo C-Level Email list of pioneers from the US, UK, Europe, and other nations.",
    "As an example of data verification, a monthly request for 2 million contacts is made.",
    "Databases that have been validated through phone and email correspondence with a 100% confirmation rate.",
    "Quarterly SMTP and NCOA have been confirmed to maintain data current and dynamic.",
    "C-Level Email List is consistently updated and cleaned to keep it free of redundant and incorrect data.",
    "Assent-based email zones to guarantee that advancing messages reach genuine customers.",
    "Every month, 10 million check messages are sent to acknowledge email accounts.",
    "Advanced items and organizations such as administration business offers, creations, high-price offers, cash-related organizations, sorting out, and soon."
  ];
  
  const bannerProps = {
    title: "C Level List",
    image:
      "/assets/images/new/c_level.jpg",
    description: "Unlock the power of verified data to drive your business growth",
    extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
       Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
  };

  const features =[
    {
      header:"C Level List",
      para:`Acquire the Power of Email Marketing with a Verified C-Level Email!
       While your competitors are attempting to strike business deals by delivering
       mass-displaying messages, be specific and associate with your inevitable business
        customers through focused forte advancement with C-Suite executives. Furthermore,
         to help your campaigns, Grey Global Data provides the C-Level Master’s Email List 
         and C-Level Executive Mailing database, which is a comprehensive, all-encompassing 
         database with unpretentious components of top situating corporate specialists in essential
         administration positions.VG17 Services’s C-Level Email List is a well-made and 
         well-maintained database. We have over 5 million databases of high-level executives who can
          directly affect your company and help you create better business and deal opportunities. 
          We have been a top C-Level mailing list provider in the United States for over ten years.
           Our clients have faith in us because they have seen the results. Our C-Level Database offers 
           comprehensive data and information to facilitate your multichannel marketing strategy.`,

           img: "/assets/images/clist.jpeg",
           
    }
  ]
  return (
    <main>
    
      <Banner {...bannerProps}/>

      {/* Features Sections */}
     
      {features.map((feature, index) => (
        <section
          key={index}
          className="py-10 "
        >
          <FeaturesSection {...feature} />
        </section>
      ))}

      {/* Best Selling C-Level Email List Data */}
      <SectionHeader title={"Our Best-Selling C-Level Email List Data Are As Follows"} className={"p-1"}/>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <ul className="space-y-4">
        {emailLists.slice(0, Math.ceil(emailLists.length / 2)).map((feature, index) => (
          <li
            key={index}
            className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
          >
            <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <ul className="space-y-4">
        {emailLists.slice(Math.ceil(emailLists.length / 2)).map((feature, index) => (
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

      {/* Main Segments of the C-Level Specialist Mailing List */}
      <section>
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap py-5">
            <div className="w-full">
              <h2 className="text-2xl font-bold py-3">Below Are The Main Segments And Favorable Circumstances Of The C-Level Specialist Mailing List</h2>
              <ul className="list-disc pl-5">
          {dataHighlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
                  ))}
                    </ul>
            </div>
          </div>
        </div>
      </section>

      {/* C-Level Email List Entries */}
      
      <section className='py-10'>
      <FeaturesSection 
      imageside={true}
      img={"/assets/images/img-12.jpg"}
       header={"C-Level Email List Entries Provide Detailed Marketing Data"}
      para={`First Name, Last Name, Contact Title, Email Address, Telephone Number, Fax Number, Organization Name,
         Site, Address, City, State, Postal Code, Nation, SIC Code, NAICS Code, Industry, Volume of Reps, Income Size.
                Utilize our fully standardized data and quarterly updated email and phone records. We clean company 
                records quarterly to ensure accuracy in a constantly changing market. Our services serve both direct 
                and office clients, providing them with exemplary service. Grey Global Data has one of the largest
                 databases in the nation, and they are continuously updating and expanding their offerings.
                We also understand that each organization is unique and requires an exceptional arrangement 
                of a C-Level Executive Email List based on the targeted audience and district, so we offer a pre-bundled
                 as well as a customized C-Level Executive Email Address that suits your advertising needs.
              `}/>
</section>
      
    </main>
  );
}

export default CLevelList;
