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
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-indigo-100 opacity-95 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center animate-fade-in mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 text-2xl text-gray-600">
            We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="animate-slide-left rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white shadow-xl relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
            <div className="w-20 h-1 bg-white/30 mb-8 rounded-full"></div>

            <ul className="space-y-6 relative z-10">
              {/* Email */}
              <li className="transition-transform hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <Mail />
                  <div className="flex flex-col">
                    <a
                      href="mailto:vg17services@gmail.com"
                      className="hover:text-white/90"
                    >
                      vg17services@gmail.com
                    </a>
                    <a
                      href="mailto:david.brown@expoleadservice.tech"
                      className="hover:text-white/90"
                    >
                      david.brown@expoleadservice.tech
                    </a>
                  </div>
                </div>
              </li>

              {/* Phone */}
              <li className="transition-transform hover:translate-x-2">
                <a
                  href="tel:+918073559152"
                  className="flex items-center gap-4 hover:text-white/90"
                >
                  <Phone />
                  <span>+91 8073 559 152</span>
                </a>
              </li>

              {/* Address */}
              <li className="transition-transform hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <MapPin />
                  <span>
                    7901 4TH ST N STE 300<br />
                    ST. PETERSBURG, FL, USA 33702
                  </span>
                </div>
              </li>
            </ul>

            {/* Decorative Circles */}
            <div className="absolute bottom-0 right-0 opacity-10">
              <div className="w-40 h-40 rounded-full border-8 border-white/20 -mb-20 -mr-20"></div>
            </div>
            <div className="absolute top-0 left-0 opacity-10">
              <div className="w-20 h-20 rounded-full border-4 border-white/20 -mt-10 -ml-10"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl p-8 border border-purple-100">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-200 px-12 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-200 px-12 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-gray-200 px-12 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* Message */}
              <div className="relative group">
                <MessageSquare className="absolute left-3 top-4 text-gray-400 group-focus-within:text-purple-500" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-12 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-white hover:opacity-90 focus:ring-2 focus:ring-purple-500/20"
              >
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
