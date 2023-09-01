"use client";
import React, { useState } from "react";
import { User } from "@/root/types";
import UserForm from "../UserForm";
import { TableHeaderUsers } from "./TableHeaderUsers";
import { TableRowUsers } from "./TableRowUsers";
interface UsersTableProps {
    usersFoundList: User[];
}
export const UsersTable: React.FC<UsersTableProps> = ({ usersFoundList }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const handleUserDelete = async (user: User) => {
        try {
        } catch (error) {
        }
    };

    const handleUserEdit = (user: User) => {
        setSelectedUser(user);
        setShowEdit(true);
    };

    const handleClose = () => {
        setSelectedUser(null);
        setShowEdit(false);
    };

    return (
        <div className="m-4 h-full w-full relative shadow-md sm:rounded-lg overflow-y-scroll max-h-96">
            {showEdit && <UserForm close={handleClose} />}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHeaderUsers />
                    <tbody className="h-full w-full overflow-y-scroll">
                        {usersFoundList.map((user, index) => (
                            <TableRowUsers key={index} user={user} handleUserEdit={handleUserEdit} handleUserDelete={handleUserDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
