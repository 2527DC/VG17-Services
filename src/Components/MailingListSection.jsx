import { CheckCircle } from "lucide-react";
import React from "react";

const TechnologyList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
        
      <li
        key={index}
        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
      >       
     {item}
      </li>
    ))}
  </ul>
);

 export const MailingListSection = () => {
  const list1 = [
    "ADO Users List",
    "Adobe Users List",
    "Amazon Web Services Users List",
    "Big Data Users Email List",
    "Biometric Software Users Email List",
    "BMC Users Email List",
    "Cisco IOS Users List",
    "Citrix Network Users List",
    "Dell AppAssure Users List",
    "Dell Server Users List",
    "EMC Users Lists",
    "Epicor ERP Users List",
    "ERP User's Email list",
  ];

  const list2 = [
    "Google Users Email List",
    "Gumbo Users Email List",
    "Hadoop Users List",
    "HP Users Email List",
    "HR Software Users List",
    "IBM ERP Users List",
    "Infor Users Mailing List",
    "Intel Users Email List",
    "IoT Users Lists",
    "IT Decision Makers List",
    "Java Users Email List",
    "Lawson Software Users List",
    "Mobile App Developers List",
  ];

  const list3 = [
    "NetApp Network Users List",
    "NTT Data Users List",
    "Oracle Database Users List",
    "PeopleSoft Users List",
    "SalesForce Users Email List",
    "Sun ERP Users Email List",
    "Vmware-Hardware Users Email List",
    "Webex CRM Users Email List",
    "Websense Users Email List",
    "XenApp Users List",
    "Zoho Users List",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technology Mailing List
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Technology Users List can assist you in reaching out to prospects and your target group. 
            No matter the size of your business, maintaining consistent profitability through increased 
            sales is always a top priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <TechnologyList items={list1} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <TechnologyList items={list2} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <TechnologyList items={list3} />
          </div>
        </div>
      </div>
    </section>
  );
};

const MainContent = () => (
  <main>
    {/* Banner */}
    <div className="bg-gray-800 py-10">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Technology List</h1>
      </div>
    </div>

    {/* Technology Mailing List */}
    <MailingListSection />

    {/* Advantages */}
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-semibold">The Advantages Of Our Technology User Lists</h2>
          <p className="mt-4">
            Our Technology Mailing List supports your company’s vision and purpose in several ways, the most important of which is to help you achieve a higher ROI through successful B2B marketing campaigns.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Our technology database can become your preferred channel of contact with your target market by assisting you in reaching out to decision-makers.",
              "Our accurate mailing list, which is subject to regular updates, can serve as a gateway to your company's development.",
              "You can use our Technology Users Database to send an email to potential technology vendors providing ERP or Hadoop services.",
            ].map((advantage, index) => (
              <li key={index} className="flex items-start">
                <i className="ri-arrow-right-line mr-2"></i>
                {advantage}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className="w-full h-auto rounded"
            src="./assets/images/img-17.jpg"
            alt="Advantages"
          />
        </div>
      </div>
    </section>

    {/* Final Section */}
    <section className="py-10">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-xl font-semibold mb-4">
          For Services That Boost Your Sales And Enhance Conversion Rates, Contact Us !!!
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 py-4 rounded shadow">
            <i className="ri-phone-fill text-lg"></i>
            <a href="tel:08041620520" className="ml-2 text-gray-800 font-medium">
              08041620520
            </a>
          </div>
          <div className="bg-gray-100 py-4 rounded shadow">
            <i className="ri-mail-send-line text-lg"></i>
            <a href="mailto:info@agentialsglobalservices.com" className="ml-2 text-gray-800 font-medium">
              info@agentialsglobalservices.com
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default MainContent;
