import { LocationData, ModelInfo, SavedPrediction } from '../types';

export const locationData: LocationData[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    avgRent: 45000,
    trend: 'up',
    trendPercentage: 5.2
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    avgRent: 35000,
    trend: 'up',
    trendPercentage: 3.7
  },
  {
    id: 'pune',
    name: 'Pune',
    avgRent: 25000,
    trend: 'stable',
    trendPercentage: 0.8
  },
  {
    id: 'delhi',
    name: 'Delhi',
    avgRent: 40000,
    trend: 'up',
    trendPercentage: 4.5
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    avgRent: 28000,
    trend: 'up',
    trendPercentage: 6.3
  },
  {
    id: 'chennai',
    name: 'Chennai',
    avgRent: 30000,
    trend: 'up',
    trendPercentage: 4.2
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    avgRent: 25000,
    trend: 'up',
    trendPercentage: 7.5
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    avgRent: 22000,
    trend: 'stable',
    trendPercentage: 1.2
  },
  {
    id: 'warangal',
    name: 'Warangal',
    avgRent: 18000,
    trend: 'up',
    trendPercentage: 3.1
  },
  {
    id: 'nagpur',
    name: 'Nagpur',
    avgRent: 20000,
    trend: 'up',
    trendPercentage: 2.8
  }
];

export const mlModels: ModelInfo[] = [
  {
    name: 'Linear Regression',
    description: 'A basic statistical model that assumes a linear relationship between input features and target variable.',
    accuracy: 89,
    bestFor: ['Simple predictions', 'Data with linear relationships', 'Limited features'],
    limitations: ['Cannot capture non-linear relationships', 'Sensitive to outliers']
  },
  {
    name: 'Support Vector Machine',
    description: 'A powerful algorithm that works by finding the hyperplane that best separates data points.',
    accuracy: 91,
    bestFor: ['Complex datasets', 'Non-linear relationships', 'High-dimensional data'],
    limitations: ['Computationally intensive', 'Difficult to interpret']
  },
  {
    name: 'Ridge Regression',
    description: 'A regularized version of linear regression that prevents overfitting by penalizing large coefficients.',
    accuracy: 88,
    bestFor: ['Data with multicollinearity', 'Preventing overfitting', 'Stable predictions'],
    limitations: ['Still assumes linearity', 'May undershoot true values']
  },
  {
    name: 'Lasso Regression',
    description: 'A regularization technique that can reduce feature dimensionality by forcing some coefficients to zero.',
    accuracy: 87,
    bestFor: ['Feature selection', 'Sparse datasets', 'Reducing complexity'],
    limitations: ['May eliminate important variables', 'Sensitive to feature scaling']
  },
  {
    name: 'K-Nearest Neighbors',
    description: 'Predicts based on the average of the k-nearest data points in the feature space.',
    accuracy: 85,
    bestFor: ['Local patterns', 'Non-parametric estimation', 'Intuitive approach'],
    limitations: ['Computationally expensive with large datasets', 'Sensitive to irrelevant features']
  }
];

export const sampleSavedPredictions: SavedPrediction[] = [
  {
    id: '1',
    location: 'mumbai',
    propertyType: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 850,
    yearBuilt: 2010,
    hasParking: true,
    hasFurnishing: false,
    nearPublicTransport: true,
    timestamp: '2023-09-15T14:30:00Z',
    result: {
      predictedRent: 45000,
      confidenceScore: 92.5,
      modelAccuracy: 94.2,
      contributingFactors: [
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
      ]
    }
  },
  {
    id: '2',
    location: 'bangalore',
    propertyType: 'condo',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 650,
    yearBuilt: 2015,
    hasParking: true,
    hasFurnishing: true,
    nearPublicTransport: true,
    timestamp: '2023-09-18T09:15:00Z',
    result: {
      predictedRent: 35000,
      confidenceScore: 94.1,
      modelAccuracy: 93.8,
      contributingFactors: [
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
      ]
    }
  }
];