"use client"
import { LoadingComponent } from "@/root/components";
import { useLawStore, useLoadingStore } from "@/root/zustand";
import { ims_laws } from "@prisma/client";
import { motion } from "framer-motion";
export default function EditLaw() {
    const {selectLawToEdit,laws,loadingLaw} = useLawStore();
    return (
        loadingLaw ? <LoadingComponent /> :
            <div className="border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300  p-4">
                <h2 className="text-center text-2xl font-bold pb-12 p-2">Leyes</h2>
                <div className="w-full max-h-60 overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Ley
                                </th>
                                <th scope="col" className=" px-6 py-3">
                                    Eliminar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {laws.map((law: ims_laws) => (
                                <tr key={law.law_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {law.law_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <motion.button
                                            onClick={()=> selectLawToEdit(law)}
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
