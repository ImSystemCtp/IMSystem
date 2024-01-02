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
    const { reportRegister } = useReportStore((state) => ({ reportRegister: state.reportRegister }));
    const { getRegisterToReport } = useReportStore();
    const { locations } = useLocationStore((state) => ({ locations: state.locations }));
    const { setCurrentLocation } = useLocationStore();

    const [locationSelect, setLocationSelect] = useState<string>("");
    const handleSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        await setCurrentLocation(parseInt(event.target.value));
        getRegisterToReport(parseInt(event.target.value));
    }
    const [noAssets, setNoAssets] = useState<string>("");
    const handleSubmit = () => {
        if (noAssets === "") return;
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
                <div className="w-80 md:w-full">
                    <form>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input value={noAssets}
                                type="search"
                                onChange={(e) => setNoAssets(e.target.value)}
                                id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar activo por numero de placa" required />
                            <button onClick={handleSubmit} type="button" className="text-white absolute right-2.5 bottom-2.5 bg-slate-500 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="justify-center items-center m-2 flex flex-col md:flex-row w-full md:flex-grow  md:mx-4 md:mr-2">
                <div className="m-4 md:w-60 md:px-4 ">
                    <select
                        onChange={handleSelect}
                        id="locations"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        {!locationSelect ? <option value="">Buscar por ubicación</option> : ""}
                        {locations.map((location) => {
                            return <option key={location.location_id} value={location.location_id}>{location.location_name}</option>;
                        })}
                    </select>
                </div>
                <div className="mx-4 ">
                    <button
                        onClick={handleExcel}
                        className="bg-green-700 flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-gray-700 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
                        </svg>
                        <span className="  flex-1 ml-3 whitespace-nowrap">Generar Excel</span>
                    </button>
                </div>
            </div>

        </div>
    )
}