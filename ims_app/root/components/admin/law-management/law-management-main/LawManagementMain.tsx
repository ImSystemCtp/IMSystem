"use client"
import React, { useState } from "react";
import { AdminOption } from "../../admin-options";
export default function LawsManagementMain() {
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
        { text: "Registrar Leyes", link: "/admin/register-laws" },
        { text: "Editar Leyes", link: "/admin/edit-users" },
    ];
    return (
        <div className="relative flex">
            <AdminOption options={menuItems}></AdminOption>
        </div>
    )
}