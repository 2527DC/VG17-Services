import { motion } from 'framer-motion';
import Banner from '../Banner';
import { FeaturesSection } from '../FeaturesSection';


const bannerProps = {
  title: "Marketing Via Email",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
  description: "Unlock the power of verified data to drive your business growth",
  extraContent: `Explore more features and offerings below. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. 
     Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.`,
};

function MarketingEmail() {

  const feactures=[

   {
     img:"./src/assets/images/img-11.jpg",
     header:"Marketing Via Email",
   
    sererate:(<>
              <h5 className="text-xl font-semibold mb-4">Send Targeted Email Marketing To Businesses.</h5>
              <p className="mb-6 text-gray-600">
                It's never been simpler to get your message into the hands of the right people at the
                businesses you want to target. To assist you, we've combined the power of our
                industry-leading company database with an easy-to-use email campaign generator.
              </p>
              <h5 className="text-xl font-semibold mb-4">Reach The Best Possible Individuals</h5>
              <p className="mb-6 text-gray-600">
                To target the right audience for your marketing, sales, and research endeavors, choose from
                more than 30 search options as well as geographic information.
              </p>
              <h5 className="text-xl font-semibold mb-4">Save Time As Well As Resources.</h5>
              <p className="text-gray-600">
                Build your campaign quickly online with our Email Campaign Builder, or have one created and
                sent for you by our marketing and design specialists.
              </p></>)
   }
   ,{
    header: "Increase The Value Of The Investment.",
    para: `Email marketing is a highly efficient tool. In reality, according to a 2011 Direct Marketing Association 
    study, email campaigns can provide potential returns of 40:1.`,
    para2: `We obtain our data from a diverse range of directory and event-based sources,
     such as new business filings, daily utility connections, press releases, corporate websites,
      yearly reports, user-generated feedback, and thousands of Yellow Pages in the United States and Canada.
       And because we have intimate knowledge of our sources and have complete control over our compilation processes,
        we can constantly improve our methods to guarantee the best data possible. Then, unlike any other data supplier, 
        we do something unique. Every year, we make over 24 million
     phone calls to gather and verify essential information and ensure your data is up-to-date, accurate, and relevant.`,
    img: "./src/assets/images/img-6.jpeg",
    imageside: true,
  },
]
  
  return (
    <main>
      {/* Banner Section */}

        <Banner {...bannerProps} />
   

     {feactures.map((feature, index) => (
        <section
          key={index}
          className="py-10 "
        >
          <FeaturesSection {...feature} />
        </section>
      ))}
   

      
    </main>
  );
}

export default MarketingEmail;