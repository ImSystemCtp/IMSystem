"use client"
import React, { useState } from "react";
import Link from "next/link";
import { AdminOption } from "../../admin-options";
export default function UsersManagementMain() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShowNavigation = () => {
        setSidebarOpen(true);
    };

    const handleHideNavigation = () => {
        setSidebarOpen(false);
    };
    interface MenuItem {
        text: string;
        link: string;
    }
    const menuItems: MenuItem[] = [
        { text: "Registrar Usuarios", link: "/admin/register-users" },
        { text: "Editar Usuarios", link: "/admin/edit-users" },
    ];
    return (
        <main className="relative flex">
            <AdminOption options={menuItems}></AdminOption>
        </main>
    )
}
