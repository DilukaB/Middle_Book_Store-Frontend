import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RevenueChart = () => {
    const revenueData = [500, 700, 800, 600, 750, 900, 650, 870, 960, 1020, 1100, 1150];

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue (USD)',
                data: revenueData,
                fill: false,
                borderColor: 'rgba(34, 197, 94, 1)',
                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Revenue',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 200, // Customize the step size
                },
            },
        },
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Monthly Revenue</h2>
            <div className="hidden md:block">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default RevenueChart;
