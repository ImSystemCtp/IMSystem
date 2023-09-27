"use client"
import { EditLocation, RegisterLocation } from "@/root/components";
import { useLocation } from "@/root/hooks";
import React, { useState } from "react";
export default function LocationsManagementMain() {
    useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleShowNavigation = () => {
        setSidebarOpen(true);
    };
    const handleHideNavigation = () => {
        setSidebarOpen(false);
    };
    return (
        <div className="w-full h-full">
            <h1 className="text-sky-400 text-2xl font-bold pb-12 text-center m-4">Gestión de Ubicaciones</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <EditLocation />
                    </div>
                <div className="w-full lg:w-1/2">
                    <RegisterLocation />
                </div>
            </div>
        </div>
    )
}
