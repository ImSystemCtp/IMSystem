"use client"
import { motion } from "framer-motion";
export default function InfoRequestCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" p-4 rounded-md mt-4 w-1/2 ">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                {/* Encabezado de actividades recientes */}
                <div className="rounded-t mb-0 px-0 border-0">
                    <div className="flex flex-wrap items-center px-4 py-2">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Solicitudes de Usuarios Recientes</h3>
                        </div>
                        <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                            <button className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Ver todo</button>
                        </div>
                    </div>
                </div>
                {/* Lista de actividades recientes */}
                <div className="block w-full">
                    {/* ... (tu lista de actividades) */}
                </div>
            </div>
            </motion.div>
    )
}