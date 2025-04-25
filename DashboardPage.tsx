import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import { SavedPrediction } from '../types';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardPageProps {
  savedPredictions: SavedPrediction[];
  onDeletePrediction: (id: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ 
  savedPredictions, 
  onDeletePrediction 
}) => {
  const [filter, setFilter] = useState('all');
  
  const filteredPredictions = savedPredictions.filter(prediction => {
    if (filter === 'all') return true;
    
    // Filter by property type
    if (filter === 'apartment' || filter === 'house' || filter === 'condo') {
      return prediction.propertyType === filter;
    }
    
    // Filter by rent range
    if (filter === 'low') {
      return prediction.result.predictedRent < 1500;
    } else if (filter === 'medium') {
      return prediction.result.predictedRent >= 1500 && prediction.result.predictedRent < 2500;
    } else if (filter === 'high') {
      return prediction.result.predictedRent >= 2500;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Predictions Dashboard</h1>
            <p className="text-gray-600">
              Manage and analyze your saved rent predictions.
            </p>
          </div>
          
          <Link
            to="/predict"
            className="mt-4 md:mt-0 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center md:justify-start w-full md:w-auto"
          >
            <PlusCircle size={18} className="mr-2" />
            New Prediction
          </Link>
        </div>
        
        {savedPredictions.length > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-gray-700 font-medium">Filter by:</span>
            
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              All
            </button>
            
            <button
              onClick={() => setFilter('apartment')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'apartment'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              Apartments
            </button>
            
            <button
              onClick={() => setFilter('house')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'house'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              Houses
            </button>
            
            <button
              onClick={() => setFilter('condo')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'condo'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              Condos
            </button>
            
            <div className="h-4 border-l border-gray-300 mx-2"></div>
            
            <button
              onClick={() => setFilter('low')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'low'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              Low Rent
            </button>
            
            <button
              onClick={() => setFilter('medium')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'medium'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              Medium Rent
            </button>
            
            <button
              onClick={() => setFilter('high')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'high'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              High Rent
            </button>
          </div>
        )}
        
        <Dashboard 
          savedPredictions={filteredPredictions} 
          onDelete={onDeletePrediction} 
        />
      </div>
    </div>
  );
};

export default DashboardPage;