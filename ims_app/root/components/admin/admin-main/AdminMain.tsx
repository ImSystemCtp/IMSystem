"use client"
import React, { useState } from "react";
import Link from "next/link";
import AdminOption from "../admin-options/AdminOptions";
export default function AdminMain() {
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
        { text: "Registrar Bienes", link: "/admin/register-goods" },
        { text: "Gestion de Usuarios", link: "/admin/users-management" },
        { text: "Gestion de Ubicaciones", link: "/admin/locations-management" },
        { text: "Gestion de Leyes", link: "/admin/register-laws" },
    ];
    return (
        <main className="relative flex">
            <AdminOption options={menuItems}></AdminOption>
        </main>
    )
}
