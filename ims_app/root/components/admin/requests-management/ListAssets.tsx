"use client"
import { motion } from "framer-motion";
export default function ListAssets() {
    return (
        <div>
            <h2 className="text-center">Lista de Bienes</h2>
            <div className="justify-center items-center flex flex-col">
                <div className="mb-4">
                    <textarea
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Observación de Baja..."
                    />
                </div>
                <div className="w-full overflow-x-auto border border-gray-300 rounded-lg">
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Nombre</th>
                                <th className="px-4 py-3">Numero Placa</th>
                                <th className="px-4 py-3">Descripción</th>
                                <th className="px-4 py-3">Ubicación</th>
                                <th scope="col" className="px-6 py-3 align-middle flex items-center justify-center ">
                                    Seleccionar
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">Portátil</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm">123-456</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold">
                                        Portátil Lenovo
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">Lab01</td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                <div className="flex items-center justify-center mb-4">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-2 justify-center items-center">
                <div className="w-full md:w-1/2 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                        type="submit"
                    >
                        Rechazar
                    </motion.button>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                        type="submit"
                    >
                        Aceptar
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
