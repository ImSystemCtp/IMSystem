"use client"
import { useSideBarStore } from "@/root/zustand";
import Link from "next/link";
import ManagementUserButton from "./ManagementUserButton";
import ManagementAssetButton from "./ManagementAssetButton";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
export default function SideBar() {
    const isOpen = useSideBarStore((state) => state.isOpen);
    const { toggle } = useSideBarStore()
    const sideBarRef = useRef<HTMLDivElement>(null);
    function handleClickOutside(event: MouseEvent) {
        if (sideBarRef.current && !(sideBarRef.current as HTMLElement).contains(event.target as Node) && isOpen) {
            toggle();
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    const pathname = usePathname();
    return (
        <div ref={sideBarRef}>
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? "translate-x-0 " : "-translate-x-full"
                    } bg-slate-50 dark:bg-gray-800 border-2 border-slate-300 dark:border-white rounded-md` }
                aria-labelledby="drawer-navigation-label">
                <h3 id="drawer-navigation-label"
                    className="text-base font-semibold text-gray-400 uppercase dark:text-white">Menu
                </h3>
                <button type="button" onClick={toggle}
                    className="text-gray-400 bg-transparent hover:bg-slate-100 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg aria-hidden="true" className="w-5 h-5 hover:bg-red-500 " fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd" ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium dark:text-white">
                        <ManagementAssetButton />
                        <li>
                            <Link href="/admin/locations-management" prefetch={false}
                                className={`flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group ${pathname === "/admin/locations-management" ? 'bg-neutral-300 dark:bg-gray-700' : 'bg-transparent dark:bg-transparent'
                                    }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span className="  flex-1 ml-3 whitespace-nowrap"> Ubicaciones </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/responsibles-management" prefetch={false}
                                className={`flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group ${pathname === "/admin/responsibles-management" ? 'bg-neutral-300 dark:bg-gray-700' : 'bg-transparent dark:bg-transparent'
                                    }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span className="  flex-1 ml-3 whitespace-nowrap"> Responsables </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/laws-management" prefetch={false}
                                className={`flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group ${pathname === "/admin/laws-management" ? 'bg-neutral-300 dark:bg-gray-700' : 'bg-transparent dark:bg-transparent'
                                    }`} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <span className=" flex-1 ml-3 whitespace-nowrap">Leyes</span>
                            </Link>
                        </li>
                        <ManagementUserButton />
                        <li>
                            <Link
                                href="/admin/register-lows" prefetch={false}
                                className={`flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group ${pathname === "/admin/register-lows" ? 'bg-neutral-300 dark:bg-gray-700' : 'bg-transparent dark:bg-transparent'
                                    }`} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                                </svg>
                                <span className="  flex-1 ml-3 whitespace-nowrap">Bajas</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/register-transfers" prefetch={false}
                                className={`flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group ${pathname === "/admin/register-transfers" ? 'bg-neutral-300 dark:bg-gray-700' : 'bg-transparent dark:bg-transparent'
                                    }`} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                <span className="  flex-1 ml-3 whitespace-nowrap">Traslados</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/request-management" prefetch={false}
                                className={`flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group ${pathname === "/admin/request-management" ? 'bg-neutral-300 dark:bg-gray-700' : 'bg-transparent dark:bg-transparent'
                                    }`} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                                </svg>
                                <span className="  flex-1 ml-3 whitespace-nowrap">Gestión de Solicitudes</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}