import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Home, Building, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Predict Rent Prices with{' '}
              <span className="text-blue-600">Machine Learning</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Make data-driven decisions with our advanced rent prediction system. 
              Perfect for landlords, tenants, and property managers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/predict" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md flex items-center"
              >
                <LineChart size={20} className="mr-2" />
                Make a Prediction
              </Link>
              <Link 
                to="/about" 
                className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm flex items-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Modern apartment building" 
              className="rounded-xl shadow-xl w-full object-cover h-[400px]"
            />
          </motion.div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RentSense?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform uses advanced machine learning algorithms to provide accurate rent predictions that help you make better financial decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block mb-4">
                <LineChart size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate Predictions</h3>
              <p className="text-gray-600">
                Our models have been trained on millions of rental properties to deliver predictions with over 90% accuracy.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="bg-green-100 text-green-600 p-3 rounded-lg inline-block mb-4">
                <Building size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Insights</h3>
              <p className="text-gray-600">
                Understand which factors impact rent the most and how to optimize your property's value.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="bg-orange-100 text-orange-600 p-3 rounded-lg inline-block mb-4">
                <PieChart size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Analysis</h3>
              <p className="text-gray-600">
                Stay ahead of market trends with data-driven insights and regional comparisons.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;