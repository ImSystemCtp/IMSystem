"use client"
import { useUserNoRoleStore } from "@/root/zustand/store/users-State/userNoRoleSatate";
import { motion } from "framer-motion";
export default function RequestUserManagement() {

    const { getNextPage, usersPending, getPreviousPage, haveNextPage, pagine } = useUserNoRoleStore();
    const handleNextPage = () => {
        if (haveNextPage) {
            getNextPage();
        }
    }
    const handlePreviousPage = () => {
        getPreviousPage();
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" p-4 rounded-md mt-4 "
        >
            <h2 className="text-gray-500 text-lg font-semibold pb-4">
                Solicitudes de Usuarios Pendientes
            </h2>
            <div className="my-1"></div>
            <div className="bg-sky-400 h-px mb-6"></div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Usuario</th>
                                <th className="px-4 py-3">Estado</th>
                                <th className="px-4 py-3">Role</th>
                                <th className="px-4 py-3">Rechazar</th>
                                <th className="px-4 py-3">Aceptar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {usersPending.map((user, index) => (
                                <tr
                                    key={index}
                                    className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                                >
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div>
                                                <p className="font-semibold">{user.usu_name + user.usu_surnames}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">Pendiente</td>
                                    <td className="px-4 py-3 text-xs">
                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                            Sin asignar
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Rechazar
                                        </motion.button>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Aceptar
                                        </motion.button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between"> {/* Utiliza flexbox para alinear los botones */}
                        <motion.button
                            onClick={handlePreviousPage}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 m-2 flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                            Anterior
                        </motion.button>
                        <motion.button
                            onClick={handleNextPage}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 m-2 flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Siguiente
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </motion.button>
                    </div>

                </div>
            </div>
        </motion.div>

    );
}
