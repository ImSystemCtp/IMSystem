"use client"
import { useUserNoRoleStore, useUserStore } from "@/root/zustand";
import { motion } from "framer-motion";
import { useState } from "react";
import { EnumUserRole, ims_users } from "@prisma/client";
import { useUserPending, } from "@/root/hooks";
import { LoadingComponent, RoleSelectionModal } from "@/root/components";
export default function RequestUserManagement() {
    useUserPending();
    const { getNextPage, usersPending, getPreviousPage, haveNextPage, pagine,isLoadUser } = useUserNoRoleStore();
    const { updateUser, deleteUser,clearUserPending } = useUserStore();
    const [showModal, setShowModal] = useState(false);
    const [userSelect, setUserSelect] = useState<ims_users | null>(null);
    const [selectedRole, setSelectedRole] = useState(null);
    const handleNextPage = () => {
        if (haveNextPage) {

            getNextPage();
        }
    }
    const handlePreviousPage = () => {
        getPreviousPage();
    }
    const handleAccept = (user: ims_users) => {
        setUserSelect(user);
        setShowModal(true);
    };
    const handleDecline = (user: ims_users) => {
        deleteUser(user);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleRoleSelect = (role: string) => {
        if (userSelect) {
            if (role === "Administrador") {
                const userToUpdate = {
                    ...userSelect,
                    usu_role: EnumUserRole.Admin,
                    usu_name: userSelect.usu_name || '',
                    usu_surnames: userSelect.usu_surnames || '',
                    usu_email: userSelect.usu_email || '',
                };
                updateUser(userToUpdate);
                clearUserPending(userToUpdate);
            }
            if (role === "Usuario") {
                const userToUpdate = {
                    ...userSelect,
                    usu_role: EnumUserRole.User,
                    usu_name: userSelect.usu_name || '',
                    usu_surnames: userSelect.usu_surnames || '',
                    usu_email: userSelect.usu_email || '',
                };
                updateUser(userToUpdate);
                clearUserPending(userToUpdate);
            }
        }
    };
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
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
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
                    ) : ((
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Usuario</th>
                                    <th className="px-4 py-3 hidden md:table-cell">Role</th>
                                    <th className="px-4 py-3 hidden md:table-cell">Estado</th>
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
                                                    <p className="font-semibold">{user.usu_name +' '+ user.usu_surnames}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm hidden md:table-cell">{pagine}</td>
                                        <td className="px-4 py-3 text-xs hidden md:table-cell">
                                            <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">
                                                Pendiente
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleDecline(user)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Rechazar
                                            </motion.button>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => handleAccept(user)}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Aceptar
                                            </motion.button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    ))}
                    <RoleSelectionModal
                        isOpen={showModal}
                        onRequestClose={handleCloseModal}
                        onRoleSelect={handleRoleSelect}
                    />
                    <div className="flex justify-between"> {/* Utiliza flexbox para alinear los botones */}
                        <motion.button
                            onClick={handlePreviousPage}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 m-2 flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
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
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </motion.button>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
