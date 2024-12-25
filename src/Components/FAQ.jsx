import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  
  {
    question: "Is VG17 Services Best for  Email List?",
    answer: "Yes, VG17 Services is the best place to purchase  Email List because our data is error-free and easy to download. Furthermore, our server is completely safe."
  },
  {
    question: "How VG17 Services is different from  other  service databases?",
    answer: "Our data analysts and researchers at VG17 Services ensure that all data is gathered from trustworthy sources such as government records, conferences, forums & communities, and more."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-900 mb-16"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-left text-lg text-blue-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-blue-500" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};