import React, { useState } from 'react';
import { PredictionFormData } from '../types';
import { locationData } from '../data/mockData';
import { ArrowRight, Home, Minimize2, Maximize2, Calendar, Car, Sofa, Train } from 'lucide-react';

interface PredictionFormProps {
  onSubmit: (data: PredictionFormData) => void;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<PredictionFormData>({
    location: '',
    propertyType: '',
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 800,
    yearBuilt: 2010,
    hasParking: false,
    hasFurnishing: false,
    nearPublicTransport: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : type === 'number' 
          ? Number(value) 
          : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h2 className="text-xl font-semibold">
          Predict Rental Price
        </h2>
        <div className="flex mt-4">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex-1">
              <div
                className={`h-1 rounded-full mx-1 ${
                  index + 1 <= currentStep ? 'bg-white' : 'bg-blue-400 bg-opacity-40'
                }`}
              ></div>
              <span className="text-xs mt-1 block text-center">
                {index + 1 === 1 && 'Location'}
                {index + 1 === 2 && 'Property'}
                {index + 1 === 3 && 'Features'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Step 1: Location */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center text-gray-600 mb-6">
              <Home className="mr-2" size={20} />
              <h3 className="text-lg font-medium">Location Details</h3>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location*
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a location</option>
                {locationData.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type*
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select property type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="studio">Studio</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Property Details */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center text-gray-600 mb-6">
              <Maximize2 className="mr-2" size={20} />
              <h3 className="text-lg font-medium">Property Details</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms*
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  min="0"
                  max="10"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bathrooms*
                </label>
                <input
                  type="number"
                  name="bathrooms"
                  min="0"
                  max="10"
                  step="0.5"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Square Feet*
              </label>
              <input
                type="number"
                name="squareFeet"
                min="100"
                max="10000"
                value={formData.squareFeet}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year Built*
              </label>
              <input
                type="number"
                name="yearBuilt"
                min="1900"
                max={new Date().getFullYear()}
                value={formData.yearBuilt}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Step 3: Additional Features */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center text-gray-600 mb-6">
              <Maximize2 className="mr-2" size={20} />
              <h3 className="text-lg font-medium">Additional Features</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  id="hasParking"
                  name="hasParking"
                  checked={formData.hasParking}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="hasParking" className="ml-3 flex items-center cursor-pointer">
                  <Car size={18} className="mr-2 text-gray-600" />
                  <span>Parking Available</span>
                </label>
              </div>
              
              <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  id="hasFurnishing"
                  name="hasFurnishing"
                  checked={formData.hasFurnishing}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="hasFurnishing" className="ml-3 flex items-center cursor-pointer">
                  <Sofa size={18} className="mr-2 text-gray-600" />
                  <span>Furnished</span>
                </label>
              </div>
              
              <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  id="nearPublicTransport"
                  name="nearPublicTransport"
                  checked={formData.nearPublicTransport}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="nearPublicTransport" className="ml-3 flex items-center cursor-pointer">
                  <Train size={18} className="mr-2 text-gray-600" />
                  <span>Near Public Transport</span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-5 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
            >
              Next <ArrowRight size={16} className="ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
            >
              Get Prediction <ArrowRight size={16} className="ml-1" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;