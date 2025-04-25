import React from 'react';
import Hero from '../components/Hero';
import LocationTrends from '../components/LocationTrends';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Rental Markets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare rent prices across different locations and understand market trends to make informed decisions.
            </p>
          </div>
          
          <LocationTrends />
          
          <div className="mt-12 text-center">
            <Link 
              to="/predict" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Start making predictions <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our machine learning models analyze property features and market data to give you accurate rent predictions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Property Details</h3>
              <p className="text-gray-600">
                Provide information about the property including location, size, bedrooms, and amenities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ML Models Process Data</h3>
              <p className="text-gray-600">
                Our algorithms analyze your inputs against millions of data points and market trends.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Detailed Results</h3>
              <p className="text-gray-600">
                Receive a detailed prediction with confidence scores, contributing factors, and market insights.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to make data-driven decisions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start making accurate rent predictions today and gain insights that can help you maximize your property's value.
          </p>
          <Link 
            to="/predict" 
            className="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors shadow-md font-medium text-lg"
          >
            Try It Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;