"use client"

import { useUser, } from "@/root/hooks";
import { useState } from "react";
import { useUserStore } from "@/root/zustand";
import { ims_users } from "@prisma/client";
import { EditUserModal } from "@/root/components";
export default function EditUserTable() {
    useUser();
    const handleAccept = (user: ims_users) => {
        setUserSelect(user);
        setShowModal(true);
    };
    const {  users } = useUserStore((state)=>({users:state.users}));
    const { deleteUser } = useUserStore();

    const [showModal, setShowModal] = useState(false);
    const [userSelect, setUserSelect] = useState<ims_users | null>(null);
    const handleDecline = (user: ims_users) => {
        deleteUser(user);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
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
                                            <button
                                                onClick={() => handleAccept(user)}
                                                className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Editar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                        <EditUserModal
                        isOpen={showModal}
                        onRequestClose={handleCloseModal}
                        user={userSelect ? userSelect : {} as ims_users}
                    />
        </div>
    )}