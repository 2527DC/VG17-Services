

export const FeaturesSection = ({ img, header, para, para2, sererate, imageside }) => {
  return (
    <>
     
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {imageside ? (
              <div
                className="relative rounded-lg overflow-hidden shadow-2xl"
                data-aos="fade-right"
              >
                <img
                  src={img}
                  alt="Global Services"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ) : null}

            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">{header}</h2>
              {Array.isArray(para) ? (
                <ul className="list-disc pl-6 mb-6">
                  {para.map((benefit, index) => (
                    <li key={index} className="mb-2">{benefit}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-6">{para}</p>
              )}
              <p>{para2}</p>
              {sererate}
            </div>

            {!imageside ? (
              <div
                className="relative rounded-lg overflow-hidden shadow-2xl"
                data-aos="fade-right"
              >
                <img
                  src={img}
                  alt="Global Services"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>
    
    </>
  );
};


 export const ProcessStep = ({ number, title, description }) => {
  return (
    <div 
      className="flex items-start gap-4"
      data-aos="fade-up"
      data-aos-delay={number * 100}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
