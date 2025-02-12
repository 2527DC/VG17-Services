import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, User, MessageSquare } from 'lucide-react';

function ContactUS() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-indigo-100  opacity-95 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 text-2xl text-grey-600">
            We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="animate-slide-left rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white shadow-xl relative overflow-hidden">
            <div className="mb-8">
              <h3 className="text-3xl font-bold">Contact Us</h3>
              <div className="w-20 h-1 bg-white/30 mt-4 rounded-full"></div>
            </div>

            <div className="space-y-8 relative z-10">
              <ul className="space-y-6">
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <a href="mailto:chethan962089@gmail.com" 
                     className="flex items-center gap-4 hover:text-white/90">
                    <Mail className="flex-shrink-0" />
                    <span>info@VG17 Services.com</span>
                  </a>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <a href="tel:+91 9632728795" 
                     className="flex items-center gap-4 hover:text-white/90">
                    <Phone className="flex-shrink-0" />
                    <span>0000000000</span>
                  </a>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <MapPin className="flex-shrink-0" />
                    <span>India</span>
                  </div>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <MapPin className="flex-shrink-0 mt-1" />
                    <span>
                    Bengaluru - 560094</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 opacity-10">
              <div className="w-40 h-40 rounded-full border-8 border-white/20 -mb-20 -mr-20"></div>
            </div>
            <div className="absolute top-0 left-0 opacity-10">
              <div className="w-20 h-20 rounded-full border-4 border-white/20 -mt-10 -ml-10"></div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="animate-slide-right rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl p-8 border border-purple-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-purple-500" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-purple-500" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-purple-500" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              <div className="group">
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 transition-all duration-300 group-focus-within:text-purple-500" size={20} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-white transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              >
                <span>Send Message</span>
                <Send className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;





// info@VG17 Services.com
// 0000000000
// India
// India

