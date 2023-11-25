"use client"
import React, { useState } from "react";
import { useLaw } from "@/root/hooks";
import { EditLaw, RegisterLaw } from "@/root/components";
export default function LawsManagementMain() {
    useLaw();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleShowNavigation = () => {
        setSidebarOpen(true);
    };

    const handleHideNavigation = () => {
        setSidebarOpen(false);
    };
    return (
        <div className="w-full h-full">
            <h1 className="text-2xl font-bold pb-12 text-center m-4">Gestión de Leyes</h1>
            <div className="p-4 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <EditLaw />
                </div>
                <div className="w-full lg:w-1/2">
                    <RegisterLaw />
                </div>
            </div>
        </div>
    )
}