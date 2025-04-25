import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  Title, 
  Tooltip, 
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { locationData } from '../data/mockData';
import { formatCurrency } from '../utils/predictionUtils';
import { Map, TrendingUp, TrendingDown, Minus } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const LocationTrends: React.FC = () => {
  // Sort locations by average rent
  const sortedLocations = [...locationData].sort((a, b) => b.avgRent - a.avgRent);
  
  // Prepare data for the chart
  const chartData = {
    labels: sortedLocations.map(loc => loc.name),
    datasets: [
      {
        label: 'Average Rent',
        data: sortedLocations.map(loc => loc.avgRent),
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        borderRadius: 4,
      }
    ]
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Average Rent: ${formatCurrency(context.raw)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Monthly Rent (USD)'
        },
        ticks: {
          callback: function(value: number) {
            return formatCurrency(value);
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Location'
        }
      }
    },
    maintainAspectRatio: false,
  };

  // Helper function to render trend icon
  const renderTrendIcon = (trend: 'up' | 'down' | 'stable', percentage: number) => {
    if (trend === 'up') {
      return (
        <div className="flex items-center text-green-600">
          <TrendingUp size={16} className="mr-1" />
          <span>+{percentage}%</span>
        </div>
      );
    } else if (trend === 'down') {
      return (
        <div className="flex items-center text-red-600">
          <TrendingDown size={16} className="mr-1" />
          <span>-{percentage}%</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-gray-600">
          <Minus size={16} className="mr-1" />
          <span>{percentage}%</span>
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <h2 className="text-xl font-semibold">Location Trends</h2>
      </div>

      <div className="p-6">
        <div className="bg-gray-50 p-4 rounded-xl mb-6">
          <div className="flex items-start mb-4">
            <Map size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Regional Rent Analysis</h3>
              <p className="text-gray-600">
                Compare average rental prices across different locations to identify the most affordable and expensive markets.
              </p>
            </div>
          </div>
          
          <div className="h-64 md:h-72">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedLocations.slice(0, 6).map((location) => (
            <div key={location.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-800">{location.name}</h3>
                {renderTrendIcon(location.trend, location.trendPercentage)}
              </div>
              <p className="text-2xl font-bold text-blue-700 mt-2">
                {formatCurrency(location.avgRent)}
              </p>
              <p className="text-sm text-gray-500">average monthly rent</p>
              
              <div className="mt-3 text-sm text-gray-600">
                {location.trend === 'up' 
                  ? 'Growing market with increasing demand' 
                  : location.trend === 'down'
                  ? 'Declining prices due to market saturation'
                  : 'Stable market with consistent pricing'
                }
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="px-4 py-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
            View All Locations
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationTrends;