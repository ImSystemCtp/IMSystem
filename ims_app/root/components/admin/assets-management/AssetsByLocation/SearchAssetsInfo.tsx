"use client"
import { useClearAssetsByLocation, useClearReportRegisters, useLocation } from "@/root/hooks";
import { generateExcel } from "@/root/reports";
import { useAssetStore, useLocationStore, useReportStore } from "@/root/zustand";
import { useState } from "react";
import toast from "react-hot-toast";
export default function SearchAssetsInfo() {
    useLocation();
    useClearReportRegisters();
    useClearAssetsByLocation();
    const { reportRegister } = useReportStore();
    const { getRegisterToReport } = useReportStore();
    const { locations, setCurrentLocation, currentLocation } = useLocationStore();
    const [locationSelect, setLocationSelect] = useState<string>("");
    const handleSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        await setCurrentLocation(parseInt(event.target.value));
        getRegisterToReport(parseInt(event.target.value));
    }
    const [noAssets, setNoAssets] = useState<string>("");
    const { getAssetsByQuery } = useAssetStore();
    const handleSubmit = () => {
        if (noAssets === "") return;
        getAssetsByQuery(noAssets);
    }
    const handleExcel = async () => {
        if (reportRegister.length > 0) {
            toast.promise(generateExcel(reportRegister), {
                loading: 'Generando el reporte...',
                success: 'Reporte generado con éxito',
                error: 'Error al generar el reporte',
            });
        } else {
            toast.error('No hay activos para generar el reporte');
        }
    };
    return (
        <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300 flex flex-col md:flex-row md:m-2 md:p-2">
            <div className="flex justify-center items-center m-2 w-96  md:w-1/2 mb-4 lg:mb-0">
                <div className="w-96 md:w-full">
                    <form>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input value={noAssets}
                                type="search"
                                onChange={(e) => setNoAssets(e.target.value)}
                                id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar activo por numero de placa" required />
                            <button onClick={handleSubmit} type="button" className="text-white absolute right-2.5 bottom-2.5 bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="m-2 flex flex-row w-full md:flex-grow md:justify-end md:items-end md:mx-4 md:mr-2">
                <div className="mx-4 md:w-60 md:px-4 ">
                    <select
                        onChange={handleSelect}
                        id="locations"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        {!locationSelect ? <option value="">Buscar por ubicacion</option> : ""}
                        {locations.map((location) => {
                            return <option key={location.location_id} value={location.location_id}>{location.location_name}</option>;
                        })}
                    </select>
                </div>
                <div className="mx-4 ">
                    <button
                        onClick={handleExcel}
                        className="bg-neutral-400 hover:bg-sky-200 text-white font-bold py-2 px-4 rounded"
                    >
                        Generar Excel!
                    </button>
                </div>
            </div>

        </div>
    )
}