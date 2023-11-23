"use client"
import Link from "next/link";
import { LoadingComponent } from "@/root/components";
import { useUserNoRoleStore,useLoadingStore } from "@/root/zustand";
import { motion } from "framer-motion";
import { useUserPending } from "@/root/hooks";
export default function InfoRequestCard() {
    useUserPending();
    const { usersPending ,isLoadUser } = useUserNoRoleStore();
    const isLoading = useLoadingStore((state) => state.isLoading);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4  relative flex flex-col min-w-0 break-words bg-gray-100 dark:bg-gray-800 w-full shadow-lg rounded"
        >
            <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Solicitudes de Usuarios </h3>
                    </div>
                </div>
                <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                    <Link href={"/admin/request-users"} className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Ver todo</Link>
                </div>
            </div>
            <ul className="my-1">
            {isLoadUser ? (
                    <LoadingComponent />
                ) : usersPending.length === 0 ? (
                    <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <div>
                            No hay solicitudes de usuarios pendientes.
                        </div>
                    </div>
                ) :
                usersPending.map((user, index) => (
                    <li key={index} className="flex px-4">
                        <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                            <div className="flex-grow flex justify-between items-center">
                                <div className="self-center">
                                    <a
                                        className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                                        href="#0"
                                        style={{ outline: 'none' }}
                                    >
                                        {`${user.usu_name} ${user.usu_surnames}`}
                                    </a>
                                </div>
                                <div className="flex-shrink-0 ml-2">
                                <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">Pendiente</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )
                )}
            </ul>
        </motion.div >
    );
}