import React from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'B2B Email List', href: '/b2b-email-list' },
    { name: 'Industries', href: '/industries' },
    { name: 'Reseller', href: '/reseller' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const midPoint = Math.ceil(links.length / 2);
  const firstColumn = links.slice(0, midPoint);
  const secondColumn = links.slice(midPoint);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <Building2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">VG17 Services</span>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left max-w-sm">
              Empowering businesses with innovative solutions since 2020.
              Your trusted partner in digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl font-semibold text-white text-center md:text-left">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:pl-8">
              <ul>
                {firstColumn.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-blue-400 transition-colors block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <ul>
                {secondColumn.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-blue-400 transition-colors block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl font-semibold text-white text-center md:text-left">
              Contact Us
            </h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <p className="text-sm">
                  7901 4TH ST N STE 300<br />
                  ST. PETERSBURG, FL, USA 33702
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:+918073559152"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +91 8073 559 152
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="mailto:vg17services@gmail.com"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    vg17services@gmail.com
                  </a>
                  <a
                    href="mailto:david.brown@expoleadservice.tech"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    david.brown@expoleadservice.tech
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} VG17 Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
