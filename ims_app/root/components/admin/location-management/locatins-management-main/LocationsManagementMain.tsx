"use client"
import React, { useState } from "react";
import Link from "next/link";
import { AdminOption } from "../../admin-options";
import { RegisterLocation } from "..";
import EditLocation from "../edit-location/EditLocation";
export default function LocationsManagementMain() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleShowNavigation = () => {
        setSidebarOpen(true);
    };

    const handleHideNavigation = () => {
        setSidebarOpen(false);
    };
    return (
        <div className="w-full h-full">
            <h1 className="text-2xl font-bold pb-12 text-center m-4">Gestión de Ubicaciones</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <RegisterLocation />
                </div>
                <div className="w-full lg:w-1/2">
                    <EditLocation />
                </div>
            </div>
        </div>
    )
}
