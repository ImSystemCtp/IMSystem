"use client"
import React, { useState } from "react";
import Link from "next/link";
import { AdminOption } from "../../admin-options";
export default function LocationsManagementMain() {
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
        { text: "Registrar Ubicaciones", link: "/admin/register-location" },
        { text: "Editar Ubicaciones", link: "/admin/edit-users" },
    ];
    return (
        <div className="relative flex">
            <AdminOption options={menuItems}></AdminOption>
        </div>
    )
}
