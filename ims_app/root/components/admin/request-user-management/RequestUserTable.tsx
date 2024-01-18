"use client"
import { useUserNoRoleStore, useUserStore } from "@/root/zustand";
import { use, useState } from "react";
import { EnumUserRole, ims_users } from "@prisma/client";
import { RoleSelectionModal } from "@/root/components";
import {useRouter} from "next/navigation";
export default function RequestUserTable() {
    const {  usersPending} = useUserNoRoleStore((state) => ({ usersPending: state.usersPending }));
    const { updateUser, deleteUser, clearUserPending } = useUserStore();
    const [showModal, setShowModal] = useState(false);
    const [userSelect, setUserSelect] = useState<ims_users | null>(null);
    const router = useRouter();
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
                router.push("/admin");
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
                router.push("/admin");
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
                            <td className="px-4 py-3 text-sm hidden md:table-cell">{user.usu_role}</td>
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
        </div>
    )
}