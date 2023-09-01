"use client";
import React from "react";
import { User } from "@/root/types";
import Link from "next/link";

interface TableRowProps {
    user: User;
    handleUserEdit: (user: User) => void;
    handleUserDelete: (user: User) => void;
}

export const TableRowUsers: React.FC<TableRowProps> = ({ user, handleUserEdit, handleUserDelete }) => {
    return (
        <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 dark:hover:bg-gray-600">
            <td className="px-2 sm:px-6 py-4 w-full sm:w-1/6 font-medium text-gray-900 whitespace-nowrap dark:text-white">NAME</td>
            <td className="px-2 sm:px-6 py-4 hidden sm:table-cell w-1/12">TIPO</td>
            <td className="px-2 sm:px-6 py-4 hidden sm:table-cell w-1/12">
                <Link href={`tel`}>CONTACTO</Link>
            </td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5">
                <div className="flex justify-center sm:justify-start">
                    <div className="hidden sm:block">
                        <Link href={`mailto:`}>EMAIL</Link>
                    </div>
                </div>
            </td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5">
                <button onClick={() => handleUserEdit(user)} className="text-white  bg-cyan-400 rounded-lg p-2">
                    Editar
                </button>
            </td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5">
                <button onClick={() => handleUserDelete(user)} className="text-white  bg-red-400 rounded-lg p-2">
                    Eliminar
                </button>
            </td>
        </tr>
    );
};
