"use client"
import { LoadingComponent } from "@/root/components";
import { useLoadingStore, useLocationStore } from "@/root/zustand";
import { ims_locations } from "@prisma/client";
import { motion } from "framer-motion";
export default function EditLocation() {
    const { selectLocationToEdit, locations, loadingLocation } = useLocationStore();
    return (
        loadingLocation ? <LoadingComponent /> : locations.length === 0 ? (
            <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                    No hay ubicaciones registradas!.
                </div>
            </div>
        ) :
            <div className="my-4 border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300  p-4">
                <h2 className="text-center text-2xl font-bold  p-2">Ubicaciones</h2>
                <div className="w-full max-h-60 overflow-y-auto">
                    <table className=" max-h-60 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Ubicacion
                                </th>
                                <th scope="col" className=" px-6 py-3">
                                    Editar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {locations.map((location: ims_locations) => (
                                <tr key={location.location_name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {location.location_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <motion.button
                                            onClick={() => selectLocationToEdit(location)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                                            Editar
                                        </motion.button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
