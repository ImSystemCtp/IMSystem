"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAssetStore, useLowStore, useTransferStore } from '@/root/zustand';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);
export default function GraphicData ()  {
    const { count } = useAssetStore((state) => ({ count: state.count }));
    const {countLows} = useLowStore();
    const {countTransfers} = useTransferStore();
    console.log(count, countLows, countTransfers);
    const data = [count, countLows, countTransfers];
    const labels = ["Activos", "Bajas", "Traslados"];
    const customColors = ["#3399FF", "#FF5733", "#FFFF66"];
    const chartData = {
        datasets: [{ data, backgroundColor: customColors, }],
        labels,
    };
    const chartOptions = {
        plugins: {
            legend: { display: true, position: 'bottom' as const, },
        },
    };
    return (
        <div className='w-1/2 flex justify-center items-center m-4 '>
            <Doughnut data={chartData} options={chartOptions}  />
        </div>
    );
};