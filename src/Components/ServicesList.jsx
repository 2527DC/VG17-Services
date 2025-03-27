import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  "Physicians Email Lists",
  "Dentists Email List",
  "Doctors Email Lists",
  "Diagnostic Radiology Mailing List",
  "Chiropractor Mailing List",
  "Oncology Mailing List",
  "Certified Registered Nurse Anesthetist Mailing List",
  "Dermatologist Email List",
  "Pharmacist Email List",
  "Ophthalmologists Email List",
  "Cardiologist Email List"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const ServicesList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <img
              className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
              src="/assets/images/new/service_list.jpg"
              alt="Medical services"
            />
          </motion.div>

          {/* Text and List Section */}
          <div>
            <motion.h2
              className="text-4xl font-bold text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Best-Selling Healthcare Email Lists
            </motion.h2>
            <motion.ul
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-white hover:text-blue-200 transition-colors duration-300"
                >
                  <ArrowRight className="h-5 w-5 mr-3" />
                  <span className="text-lg">{service}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
