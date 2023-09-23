"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SideBarState, useSideBarStore } from "../../zustand/store/siderbar-state/sidebar-state";
import { useLocationStore } from "@/root/zustand";
interface SideBarProps {
    className?: string;
}
export default function SideBar({ className }: SideBarProps) {
    const isOpen = useSideBarStore((state) => state.isOpen);
    const locationState = useLocationStore();
    const handleToggle = () => {
        useSideBarStore.getState().toggle(); // Alternar entre abierto y cerrado
    };
    return (
        <div>
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? "translate-x-0 " : "-translate-x-full"
                    } bg-slate-50 dark:bg-gray-800`}
                aria-labelledby="drawer-navigation-label"
            >
                <h5
                    id="drawer-navigation-label"
                    className="text-base font-semibold text-blue-900 uppercase dark:text-gray-400"
                >
                    Menu
                </h5>
                <button
                    type="button"
                    onClick={handleToggle} // Call the handler to hide the navigation
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="/admin/register-assets"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <div className="flex justify-center items-center w-14 h-14  rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                    </svg>
                                    </div>
                                    <span className="ml-3">Registrar Bienes</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/admin/locations-management"}
                                onClick={() => { locationState.getLocation();} }
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <div className="flex justify-center items-center w-14 h-14  rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                </div>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Ubicaiones
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/laws-management"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <div className="flex justify-center items-center w-14 h-14  rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                </div>
                                <span className="flex-1 ml-3 whitespace-nowrap">Leyes</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/register-lows"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <div className="flex justify-center items-center w-14 h-14  rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                                </svg>
                                </div>
                                <span className="flex-1 ml-3 whitespace-nowrap">Bajas/Traslados</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/request-management"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <div className="flex justify-center items-center w-14 h-14  rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                                </svg>
                                </div>
                                <span className="flex-1 ml-3 whitespace-nowrap">Gestion de Solicitudes</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
