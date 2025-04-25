import React from 'react';
import ModelComparison from '../components/ModelComparison';
import { Brain, Lightbulb, LineChart, BarChart3, Compass } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Machine Learning Models
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how our advanced machine learning models deliver accurate rent predictions.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
              <h2 className="text-xl font-semibold">How Machine Learning Powers Our Predictions</h2>
            </div>
            
            <div className="p-6">
              <div className="flex items-start mb-6">
                <Brain size={24} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">The Science Behind Predictions</h3>
                  <p className="text-gray-600">
                    Machine learning allows computers to learn patterns from data without being explicitly programmed. For rent prediction, our models analyze thousands of rental listings to identify relationships between property features and rental prices. This allows us to make accurate predictions for new properties based on their characteristics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <LineChart size={24} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Training Data</h3>
                  <p className="text-gray-600">
                    Our models have been trained on millions of rental listings across various locations, property types, and time periods. This diverse dataset enables our models to recognize patterns and market trends that might not be obvious to human observers. The training process involves feeding the models historical data and having them learn to predict known rental prices.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart3 size={24} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Feature Importance</h3>
                  <p className="text-gray-600">
                    The models identify which property features have the greatest impact on rental prices. Location typically has the strongest influence, followed by property size, number of bedrooms, and various amenities. By understanding feature importance, landlords can make targeted improvements to increase their property's value.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <ModelComparison />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">How accurate are your predictions?</h3>
                <p className="text-gray-600">
                  Our ensemble of models achieves an average accuracy of 92% across different property types and locations. This means that most predictions fall within 8% of the actual market value. We continuously validate and improve our models with new market data.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">How often is the model updated?</h3>
                <p className="text-gray-600">
                  We retrain our models monthly with the latest rental data to ensure they capture current market trends and economic factors that might influence rental prices.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Can the model predict prices for unique or luxury properties?</h3>
                <p className="text-gray-600">
                  While our models handle standard properties very well, unique or luxury properties with exceptional features might receive less accurate predictions due to their rarity in the training data. However, our ensemble approach helps mitigate this limitation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Does the model consider economic factors like inflation?</h3>
                <p className="text-gray-600">
                  Yes, our models incorporate various economic indicators including inflation rates, unemployment figures, and regional economic growth. These factors help adjust predictions based on the current economic climate.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">How do you handle properties in new developments?</h3>
                <p className="text-gray-600">
                  For new developments without historical rental data, our models extrapolate from similar neighborhoods and property types. We also consider the premium often associated with new constructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;