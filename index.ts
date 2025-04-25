export interface PredictionFormData {
  location: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt: number;
  hasParking: boolean;
  hasFurnishing: boolean;
  nearPublicTransport: boolean;
}

export interface PredictionResult {
  predictedRent: number;
  confidenceScore: number;
  modelAccuracy: number;
  contributingFactors: {
    factor: string;
    impact: number;
    description: string;
  }[];
}

export interface SavedPrediction extends PredictionFormData {
  id: string;
  timestamp: string;
  result: PredictionResult;
  notes?: string;
}

export interface LocationData {
  id: string;
  name: string;
  avgRent: number;
  trend: 'up' | 'down' | 'stable';
  trendPercentage: number;
}

export interface ModelInfo {
  name: string;
  description: string;
  accuracy: number;
  bestFor: string[];
  limitations: string[];
}