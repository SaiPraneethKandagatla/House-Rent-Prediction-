import React, { useState } from 'react';
import PredictionForm from '../components/PredictionForm';
import PredictionResult from '../components/PredictionResult';
import { PredictionFormData, PredictionResult as PredictionResultType, SavedPrediction } from '../types';
import { predictRent, generateHistoricalData } from '../utils/predictionUtils';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Save, Award, Building, DollarSign } from 'lucide-react';

interface PredictionPageProps {
  onSavePrediction: (prediction: SavedPrediction) => void;
}

const PredictionPage: React.FC<PredictionPageProps> = ({ onSavePrediction }) => {
  const [predictionResult, setPredictionResult] = useState<PredictionResultType | null>(null);
  const [formData, setFormData] = useState<PredictionFormData | null>(null);
  const [historicalData, setHistoricalData] = useState<{ month: string; value: number }[]>([]);
  
  const handleFormSubmit = (data: PredictionFormData) => {
    // Save form data
    setFormData(data);
    
    // Generate prediction
    const result = predictRent(data);
    setPredictionResult(result);
    
    // Generate historical data
    const histData = generateHistoricalData(result.predictedRent);
    setHistoricalData(histData);
  };
  
  const handleSavePrediction = () => {
    if (formData && predictionResult) {
      const savedPrediction: SavedPrediction = {
        id: Date.now().toString(),
        ...formData,
        timestamp: new Date().toISOString(),
        result: predictionResult
      };
      
      onSavePrediction(savedPrediction);
      
      // Show success message or redirect to dashboard
      alert('Prediction saved successfully!');
    }
  };
  
  const handleReset = () => {
    setPredictionResult(null);
    setFormData(null);
    setHistoricalData([]);
  };
  
  // Prepare historical data for chart
  const chartData = {
    labels: historicalData.map(item => item.month),
    datasets: [
      {
        label: 'Historical Rent Trend',
        data: historicalData.map(item => item.value),
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        tension: 0.4,
      }
    ]
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Rent: $${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Monthly Rent (USD)'
        },
        ticks: {
          callback: function(value: any) {
            return '$' + value;
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Predict Your Property's Rental Value
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our machine learning models analyze property features and market data to provide accurate rent predictions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {!predictionResult ? (
            <>
              <div>
                <PredictionForm onSubmit={handleFormSubmit} />
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                    <h2 className="text-xl font-semibold">Why Predict Rent?</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="flex">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4 flex-shrink-0">
                          <DollarSign size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-1">Optimize Your Income</h3>
                          <p className="text-gray-600">
                            Set competitive rents that maximize your return while staying attractive to potential tenants.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4 flex-shrink-0">
                          <Building size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-1">Understand Your Property's Value</h3>
                          <p className="text-gray-600">
                            Learn which features contribute most to your property's rental value.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg mr-4 flex-shrink-0">
                          <Award size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-1">Data-Driven Decisions</h3>
                          <p className="text-gray-600">
                            Make renovation and investment choices based on actual market data rather than guesswork.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4 flex-shrink-0">
                          <Save size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-1">Plan Your Budget</h3>
                          <p className="text-gray-600">
                            For tenants, accurate predictions help you budget effectively and negotiate fairly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="lg:col-span-2">
                <PredictionResult 
                  result={predictionResult} 
                  onSave={handleSavePrediction}
                  onReset={handleReset}
                />
              </div>
              
              {historicalData.length > 0 && (
                <motion.div 
                  className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <h2 className="text-xl font-semibold">Historical Rent Trends</h2>
                  </div>
                  <div className="p-6">
                    <div className="h-64">
                      <Line data={chartData} options={chartOptions} />
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      This chart shows the estimated historical rent trends for similar properties in this area over the past 12 months.
                    </p>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;