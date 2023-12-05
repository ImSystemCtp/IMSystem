"use client"
import { useUserPending, } from "@/root/hooks";
import { useUserNoRoleStore, useUserStore } from "@/root/zustand";
import { useState } from "react";
import { EnumUserRole, ims_users } from "@prisma/client";
import { RoleSelectionModal } from "@/root/components";
export default function RequestUserTable() {
    const {  usersPending, haveNextPage, pagine } = useUserNoRoleStore((state) => ({ usersPending: state.usersPending, haveNextPage: state.haveNextPage, pagine: state.pagine }));
    const { getNextPage,  getPreviousPage } = useUserNoRoleStore();
    const { updateUser, deleteUser, clearUserPending } = useUserStore();
    const [showModal, setShowModal] = useState(false);
    const [userSelect, setUserSelect] = useState<ims_users | null>(null);
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
        <div>
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
                                        <p className="font-semibold">{user.usu_name + ' ' + user.usu_surnames}</p>
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
                                <button
                                    onClick={() => handleDecline(user)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Rechazar
                                </button>
                            </td>
                            <td className="px-4 py-3 text-sm">
                                <button
                                    onClick={() => handleAccept(user)}
                                    className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Aceptar
                                </button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <RoleSelectionModal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                onRoleSelect={handleRoleSelect}
            />
            <div className="flex justify-between"> {/* Utiliza flexbox para alinear los botones */}
                <button
                    onClick={handlePreviousPage}

                    className="p-2 m-2 flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Anterior
                </button>
                <button
                    onClick={handleNextPage}

                    className="p-2 m-2 flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Siguiente
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}