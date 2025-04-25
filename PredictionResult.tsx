import React from 'react';
import { motion } from 'framer-motion';
import { PredictionResult as PredictionResultType } from '../types';
import { formatCurrency } from '../utils/predictionUtils';
import { Doughnut } from 'react-chartjs-2';
import { CheckCircle, TrendingUp, Download } from 'lucide-react';

interface PredictionResultProps {
  result: PredictionResultType;
  onSave: () => void;
  onReset: () => void;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ result, onSave, onReset }) => {
  const { predictedRent, confidenceScore, modelAccuracy, contributingFactors } = result;

  const handleExport = () => {
    const data = {
      predictedRent,
      confidenceScore,
      modelAccuracy,
      contributingFactors,
      exportDate: new Date().toLocaleDateString('en-IN'),
    };

    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `easylease-prediction-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Chart data for factors
  const chartData = {
    labels: contributingFactors.map(f => f.factor),
    datasets: [
      {
        data: contributingFactors.map(f => f.impact),
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12,
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    cutout: '65%',
    maintainAspectRatio: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h2 className="text-xl font-semibold">Prediction Results</h2>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-500 mb-2">Estimated Monthly Rent</p>
              <div className="text-4xl font-bold text-blue-700 mb-1">
                {formatCurrency(predictedRent)}
              </div>
              <div className="text-sm text-gray-500">per month</div>
              
              <div className="mt-4 flex justify-center space-x-4">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Confidence</p>
                  <div className="text-lg font-semibold text-blue-600">
                    {confidenceScore}%
                  </div>
                </div>
                <div className="h-10 border-l border-gray-300"></div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Model Accuracy</p>
                  <div className="text-lg font-semibold text-green-600">
                    {modelAccuracy}%
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Key Insights</h3>
              <ul className="space-y-3">
                {contributingFactors.map((factor, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">{factor.factor}</p>
                      <p className="text-sm text-gray-600">{factor.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Contributing Factors</h3>
              <div className="bg-gray-50 p-4 rounded-xl" style={{ height: '240px' }}>
                <Doughnut data={chartData} options={chartOptions} />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Market Analysis</h3>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <TrendingUp size={18} className="text-blue-500 mr-2" />
                  <span className="text-gray-800 font-medium">Market Trend</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  The rental market in this area is showing an upward trend with a 3-5% annual increase in prices.
                </p>
                <div className="text-sm text-gray-600">
                  Properties with similar features in this area typically rent for {formatCurrency(predictedRent - 5000)} to {formatCurrency(predictedRent + 5000)}.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={onSave}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <CheckCircle size={18} className="mr-2" />
            Save Prediction
          </button>
          <button
            onClick={onReset}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Start New Prediction
          </button>
          <button 
            onClick={handleExport}
            className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center"
          >
            <Download size={18} className="mr-2" />
            Export Report
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PredictionResult;