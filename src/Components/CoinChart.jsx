import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { CryptoContext } from '../Api/CryptoContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Chart, registerables } from 'chart.js';
import { FaSpinner } from 'react-icons/fa'; // Import loading spinner icon

Chart.register(...registerables); // Register Chart.js components

// Timeframes for chart data
export const chartDays = [
  { label: "24 Hours", value: 1 },
  { label: "30 Days", value: 30 },
  { label: "3 Months", value: 90 },
  { label: "1 Year", value: 365 },
];

const CoinChart = () => {
  const { id } = useParams(); // Get coin ID from URL
  const { crypto } = useContext(CryptoContext);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30); // Default to 30 days

  // Function to fetch coin data
  const fetchCoinData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`);
      const prices = response?.data?.prices; // Using optional chaining

      // Prepare data for the chart
      const labels = prices.map(price => new Date(price[0]).toLocaleDateString());
      const data = prices.map(price => price[1]);

      setChartData({
        labels,
        datasets: [{
          label: 'Price in USD',
          data,
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
          fill: false,
        }]
      });
    } catch (error) {
      console.error('Error fetching coin data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when coin ID or days change
  useEffect(() => {
    fetchCoinData();
  }, [id, days]);

  // Loading spinner component
  const renderLoader = () => (
    <div className="flex justify-center items-center h-64">
      <FaSpinner className="animate-spin text-3xl text-blue-500" />
    </div>
  );

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl mb-4 text-center">Price Chart for {id.toUpperCase()}</h2>

      {/* Buttons to select the time frame */}
      <div className="mb-4 flex flex-wrap justify-center">
        {chartDays.map((day) => (
          <button
            key={day.value}
            onClick={() => setDays(day.value)}
            className={`mx-2 my-1 px-4 py-2 rounded-md text-sm ${
              days === day.value ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      {loading ? (
        renderLoader() // Show loading spinner while fetching data
      ) : (
        chartData && (
          <div style={{ position: 'relative', height: '300px', width: '100%' }}>
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Date',
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Price (USD)',
                    },
                  },
                },
              }}
            />
          </div>
        )
      )}
    </div>
  );
};

export default CoinChart;
