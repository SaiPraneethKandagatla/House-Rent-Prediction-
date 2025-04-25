import { PredictionFormData, PredictionResult } from '../types';

// Simulated ML model weights
const LOCATION_WEIGHTS: Record<string, number> = {
  'mumbai': 45000,
  'bangalore': 35000,
  'pune': 25000,
  'delhi': 40000,
  'hyderabad': 28000,
  'chennai': 30000,
  'kolkata': 25000,
  'ahmedabad': 22000,
  'warangal': 18000,
  'nagpur': 20000,
};

const PROPERTY_TYPE_WEIGHTS: Record<string, number> = {
  'apartment': 1.0,
  'house': 1.3,
  'condo': 1.2,
  'townhouse': 1.25,
  'studio': 0.8,
};

// Simulate a machine learning prediction
export const predictRent = (data: PredictionFormData): PredictionResult => {
  // Base rent calculated from location
  let baseRent = LOCATION_WEIGHTS[data.location.toLowerCase()] || 20000;
  
  // Apply property type modifier
  baseRent *= PROPERTY_TYPE_WEIGHTS[data.propertyType.toLowerCase()] || 1.0;
  
  // Adjust for bedroom count
  baseRent += data.bedrooms * 5000;
  
  // Adjust for bathroom count
  baseRent += data.bathrooms * 3000;
  
  // Adjust for square footage
  baseRent += (data.squareFeet / 100) * 500;
  
  // Age of property (newer properties command higher rent)
  const currentYear = new Date().getFullYear();
  const age = currentYear - data.yearBuilt;
  baseRent -= Math.min(age * 100, 10000); // Cap the reduction at ₹10,000
  
  // Amenities adjustments
  if (data.hasParking) baseRent += 2000;
  if (data.hasFurnishing) baseRent += 4000;
  if (data.nearPublicTransport) baseRent += 3000;
  
  // Add some randomness to simulate real-world variation
  const randomFactor = 0.9 + (Math.random() * 0.2); // 0.9 to 1.1
  baseRent *= randomFactor;
  
  // Round to nearest 100
  baseRent = Math.round(baseRent / 100) * 100;
  
  // Generate confidence score (85-98%)
  const confidenceScore = 85 + Math.random() * 13;
  
  // Generate model accuracy (90-97%)
  const modelAccuracy = 90 + Math.random() * 7;
  
  // Contributing factors
  const contributingFactors = [
    {
      factor: 'Location',
      impact: 35,
      description: 'The neighborhood significantly impacts rent prices.'
    },
    {
      factor: 'Property Size',
      impact: 25,
      description: 'Square footage is a major factor in determining rent.'
    },
    {
      factor: 'Bedrooms',
      impact: 20,
      description: 'More bedrooms typically increase the rental value.'
    },
    {
      factor: 'Property Age',
      impact: 10,
      description: 'Newer properties often command higher rents.'
    },
    {
      factor: 'Amenities',
      impact: 10,
      description: 'Features like parking and furnishing add value.'
    }
  ];
  
  return {
    predictedRent: baseRent,
    confidenceScore: parseFloat(confidenceScore.toFixed(1)),
    modelAccuracy: parseFloat(modelAccuracy.toFixed(1)),
    contributingFactors
  };
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

// Generate random historical data
export const generateHistoricalData = (
  baseValue: number, 
  months: number = 12
): { month: string; value: number }[] => {
  const data = [];
  const currentDate = new Date();
  
  // Generate monthly data
  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setMonth(currentDate.getMonth() - i);
    
    // Random fluctuation between -5% and +8%
    const fluctuation = -0.05 + Math.random() * 0.13;
    const monthValue = Math.round(baseValue * (1 + (fluctuation * (i / months))));
    
    data.push({
      month: date.toLocaleString('en-IN', { month: 'short', year: '2-digit' }),
      value: monthValue
    });
  }
  
  return data;
};