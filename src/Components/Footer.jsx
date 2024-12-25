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
    
      // Split links into two columns
      const midPoint = Math.ceil(links.length / 2);
      const firstColumn = links.slice(0, midPoint);
      const secondColumn = links.slice(midPoint);
    
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
         {/*  company info  */}
         <div className="flex flex-col items-center md:items-start space-y-4">
      <div className="flex items-center space-x-3">
        <Building2 className="w-8 h-8 text-blue-400" />
        <span className="text-2xl font-bold text-white">YourCompany</span>
      </div>
      <p className="text-sm text-gray-400 text-center md:text-left max-w-sm">
        Empowering businesses with innovative solutions since 2020. Your trusted partner in digital transformation.
      </p>
    </div>

      {/*  quick links  */}

      <div className="flex flex-col space-y-6">
      <h4 className="text-xl font-semibold text-white text-center md:text-left">Quick Links</h4>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-2 pl-8">
        {/* First Column */}
        <ul>
          {firstColumn.map((link) => (
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
        
        {/* Second Column */}
        <ul>
          {secondColumn.map((link) => (
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
        {/* contact info  */}
        <div className="flex flex-col space-y-6">
      <h4 className="text-xl font-semibold text-white text-center md:text-left">Contact Us</h4>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 group">
          <MapPin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <p className="text-sm">
            123 Business Avenue,<br />
            Tech District, NY 10001
          </p>
        </div>
        <div className="flex items-center space-x-3 group">
          <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <a href="tel:+1234567890" className="text-sm hover:text-blue-400 transition-colors">
            +1 (234) 567-890
          </a>
        </div>
        <div className="flex items-center space-x-3 group">
          <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <a href="mailto:contact@yourcompany.com" className="text-sm hover:text-blue-400 transition-colors">
            contact@yourcompany.com
          </a>
        </div>
      </div>
    </div>
        </div>
       {/* copy right  */}
       <div className="border-t border-gray-800 mt-12 pt-8 text-center">
      <p className="text-sm text-gray-500">
        © 2024 YourCompany. All rights reserved.
      </p>
    </div>
      </div>
    </footer>
  );
};

export default Footer;