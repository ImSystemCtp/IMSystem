"use client"
import { useUserNoRoleStore, useUserStore } from "@/root/zustand";
import { motion } from "framer-motion";
import { useState } from "react";
import {  EnumUserRole, ims_users } from "@prisma/client";
import { useUser, } from "@/root/hooks";
import { EditUserModal, LoadingComponent } from "@/root/components";
export default function UserManagement() {
    useUser();
    const { updateUser, deleteUser,loadUser,users } = useUserStore();
    const [showModal, setShowModal] = useState(false);
    const [userSelect, setUserSelect] = useState<ims_users | null>(null);

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
    const handle = (role: string) => {

    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" p-4 rounded-md mt-4 "
        >
            <h2 className="text-gray-500 text-lg font-semibold pb-4">
                Gestion de Usuarios
            </h2>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {loadUser ? (
                        <LoadingComponent />
                    ) : users.length === 0 ? (
                        <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                            <div>
                                No hay usuarios.
                            </div>
                        </div>
                    ) : ((
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Usuario</th>
                                    <th className="px-4 py-3">Role</th>
                                    <th className="px-4 py-3">Editar</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {users.map((user, index) => (
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
                                        <td className="px-4 py-3 text-xs">
                                            <span className="px-2 py-1 font-semibold leading-tight text-white bg-neutral-400 rounded-full">
                                                {user.usu_role}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => handleAccept(user)}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Editar
                                            </motion.button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    ))}
                    <EditUserModal
                        isOpen={showModal}
                        onRequestClose={handleCloseModal}
                        user={userSelect ? userSelect : {} as ims_users}
                    />
                </div>
            </div>
        </motion.div>

    );
}
