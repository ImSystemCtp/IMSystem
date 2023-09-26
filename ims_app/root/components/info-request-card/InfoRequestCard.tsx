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
                    <ul className="my-1">
                        <li className="flex px-4">
                            <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                                <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
                                    <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                                <div className="flex-grow flex justify-between items-center">
                                    <div className="self-center">
                                        <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style={{ outline: 'none' }}>Nick Mark</a> mentioned <a className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style={{ outline: 'none' }}>Sara Smith</a> in a new post
                                    </div>
                                    <div className="flex-shrink-0 ml-2">
                                        <a className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style={{ outline: 'none' }}>
                                            View
                                            <span>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out">
                                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex px-4">
                            <div className="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                                <svg className="w-9 h-9 fill-current text-red-50" viewBox="0 0 36 36">
                                    <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                                <div className="flex-grow flex justify-between items-center">
                                    <div className="self-center">
                                        The post <a className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style={{ outline: 'none' }}>Post Name</a> was removed by <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style={{ outline: 'none' }}>Nick Mark</a>
                                    </div>
                                    <div className="flex-shrink-0 ml-2">
                                        <a className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style={{ outline: 'none' }}>
                                            View
                                            <span>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out">
                                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}