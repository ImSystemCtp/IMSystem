"use client"
import { motion } from "framer-motion";
export default function RequestManagement() {
    const requests = [
        { nombre: "Juan Pérez", tipoSolicitud: "Baja", estado: "Activa" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" p-4 rounded-md mt-4"
        >
            <h2 className="text-gray-500 text-lg font-semibold pb-4">
                Solicitudes Pendientes
            </h2>
            <div className="my-1"></div>
            <div className="bg-sky-400 h-px mb-6"></div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Usuario</th>
                                <th className="px-4 py-3">Tipo Solicitud</th>
                                <th className="px-4 py-3">Estado</th>
                                <th className="px-4 py-3">Fecha</th>
                                <th className="px-4 py-3">Ver mas...</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">Hans Burger</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm">Baja</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">15-01-2021</td>
                                <td className="px-4 py-3 text-sm">
                                    <motion.button whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Ver mas...
                                    </motion.button>
                                </td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">Jolina Angelie</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm">Traslado</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">Pending</span>
                                </td>
                                <td className="px-4 py-3 text-sm">23-03-2021</td>
                                <td className="px-4 py-3 text-sm">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Ver mas...
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>

    );
}
