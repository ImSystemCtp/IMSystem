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

    return (
        <main className="relative flex">
            <AdminOption />
        </main>
    )
}
