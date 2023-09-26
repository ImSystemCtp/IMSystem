"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

interface PieChartProps {
    data: number[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    const labels = ["Activos", "Bjas", "Traslados"]; // Define the labels variable
    const customColors = ["#FF5733", "#3399FF", "#FFFF66"];
    const chartData = {
        datasets: [{
            data,
            backgroundColor: customColors,
        }],
        labels,
    };
    const chartOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };
    return (
        <div className='w-1/2 flex justify-center items-center m-4 '>
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
};

export default PieChart;
