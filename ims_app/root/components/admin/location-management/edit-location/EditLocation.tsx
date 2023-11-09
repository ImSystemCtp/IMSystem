"use client"
import { LoadingComponent } from "@/root/components";
import { useLoadingStore, useLocationStore } from "@/root/zustand";
import { ims_locations } from "@prisma/client";
import { motion } from "framer-motion";
export default function EditLocation() {
    const {selectLocationToEdit,locations,loadingLocation} = useLocationStore();
    return (
        loadingLocation ? <LoadingComponent /> :
            <div className="border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300  p-4">
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
                                        onClick={()=> selectLocationToEdit(location)}
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
