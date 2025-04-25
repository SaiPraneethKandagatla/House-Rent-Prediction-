import React from 'react';
import { LineChart, BarChart3, TrendingUp, Map } from 'lucide-react';
import { Line } from 'react-chartjs-2';

const MarketTrendsPage: React.FC = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Average Rent Prices',
        data: [25000, 26000, 25500, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000],
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
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `₹${context.raw.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Average Rent (₹)'
        },
        ticks: {
          callback: function(value: any) {
            return '₹' + value.toLocaleString();
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Estate Market Trends
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends and insights in the Indian rental market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Price Trends</h2>
            </div>
            <div className="h-[300px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Map className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">Regional Insights</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Mumbai</h3>
                <p className="text-gray-600">Highest rental growth rate at 15% annually</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Bangalore</h3>
                <p className="text-gray-600">Strong demand in tech corridors</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Hyderabad</h3>
                <p className="text-gray-600">Emerging market with 10% annual growth</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex items-center mb-6">
            <BarChart3 className="text-blue-600 mr-2" size={24} />
            <h2 className="text-xl font-semibold">Key Market Indicators</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Supply & Demand</h3>
              <p className="text-gray-600">High demand in metropolitan areas with limited supply driving prices up</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Rental Yield</h3>
              <p className="text-gray-600">Average rental yield of 3-4% in major cities</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Market Sentiment</h3>
              <p className="text-gray-600">Positive outlook with increasing urbanization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrendsPage;