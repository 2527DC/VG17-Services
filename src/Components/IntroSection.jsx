import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const IntroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-8 text-blue-900"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Healthcare List
            </motion.h2>
            <motion.div 
              className="space-y-6 text-gray-700"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="leading-relaxed">
                Reach a Specific Audience with a Responsive and Accurate Healthcare Email List!
                If you are in search of a reliable database to effectively engage with your target audience
                in the Healthcare Industry, we recommend choosing our Healthcare Email List immediately.
              </p>
              <p className="leading-relaxed">
                Our comprehensive database includes contact information for medical clinics, wellness centers,
                drug stores, and centers. The social insurance industry is a massive and diverse sector that
                requires outstanding information when creating a database.
              </p>
            </motion.div>
          </div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img 
              className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Healthcare professionals"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};