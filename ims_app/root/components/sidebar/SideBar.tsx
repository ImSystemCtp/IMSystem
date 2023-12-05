"use client";
import { useSideBarStore } from "@/root/zustand";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function SideBar() {
    const pathname = usePathname();
    const isOpen = useSideBarStore((state) => state.isOpen);
    const [isDropdownUserOpen, setDropdownUserOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const {toggle}=useSideBarStore()
  
    const handleDropdownUserToggle = () => {
        setDropdownUserOpen(!isDropdownUserOpen);
    };
    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? "translate-x-0 " : "-translate-x-full"
                    } bg-slate-50 dark:bg-gray-800`}
                aria-labelledby="drawer-navigation-label"
            >
                <h3
                    id="drawer-navigation-label"
                    className="text-base font-semibold text-blue-400 uppercase dark:text-gray-400"
                >
                    Menu
                </h3>
                <button
                    type="button"
                    onClick={toggle}
                    className="text-gray-400 bg-transparent hover:bg-slate-100 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 hover:bg-red-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <button onClick={handleDropdownToggle} type="button" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                </svg>
                                <span className=" text-blue-400  flex-1 ml-5 whitespace-nowrap ">Gestion de Bienes</span>
                                {isDropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                }
                            </button>
                            <ul id="dropdown-example" className={`py-2 space-y-2 ${isDropdownOpen ? '' : 'hidden'}`}>
                                <li>
                                    <Link
                                        href={"/admin/assets-management/by-location"}
                                        className={`flex items-center ml-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group ${
                                            pathname === "/admin/assets-management/by-location" ? 'bg-sky-200 dark:bg-gray-700' : 'bg-transparent dark:bg-transparent'
                                        }`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                        </svg>
                                        <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">Bienes Por Ubicacion</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/admin/assets-management/total-assets"}
                                        className="flex items-center ml-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                        <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">Bienes Totales</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/admin/register-assets"}
                                        className="flex items-center ml-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                        </svg>
                                        <span className="text-blue-400 ml-3">Registrar Activos</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                href={"/admin/locations-management"}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">
                                    Ubicaciones
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/admin/laws-management"}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">Leyes</span>
                            </Link>
                        </li>

                        <li>
                            <button onClick={handleDropdownUserToggle} type="button" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap ">Gestion de Usuarios</span>
                                {isDropdownUserOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                }
                            </button>
                            <ul id="dropdown-example" className={`py-2 space-y-2 ${isDropdownUserOpen ? '' : 'hidden'}`}>
                                <li>
                                    <Link
                                        href={"/admin/user-management"}
                                        className="flex items-center p-2 ml-3 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">Editar Usuarios</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/admin/request-users"}
                                        className="flex items-center p-2 ml-3 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                        </svg>
                                        <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">Solicitudes de Usuarios</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                href={"/admin/register-lows"}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                                </svg>
                                <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">Bajas</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/admin/register-transfers"}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">Traslados</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/admin/request-management"}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-sky-200 dark:hover:bg-gray-700 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                                </svg>
                                <span className="text-blue-400  flex-1 ml-3 whitespace-nowrap">Gestion de Solicitudes</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
