import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Home } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Home size={24} className="text-blue-400" />
              <span className="text-xl font-bold">EasyLease</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering landlords and tenants with accurate rent predictions powered by machine learning.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/sai.praneeth.26?igsh=MWM4cmxxNjNkYWwwYg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/SaiPraneethKandagatla/House-Rent-Prediction" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kandagatlasaipraneeth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/predict" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Make a Prediction
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About ML Models
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/market-trends" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Market Trends
                </Link>
              </li>
              <li>
                <Link to="/landlord-guide" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Landlord Guide
                </Link>
              </li>
              <li>
                <Link to="/tenant-resources" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Tenant Resources
                </Link>
              </li>
              <li>
                <Link to="/rental-calculator" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Rental Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: kandagatlabunny@gmail.com</li>
              <li>Phone: +91 7032304118</li>
              <li>Address: Warangal, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EasyLease. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-400 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;