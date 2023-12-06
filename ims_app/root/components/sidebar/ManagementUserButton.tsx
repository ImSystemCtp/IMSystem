"use client"
import Link from "next/link";
import { useState } from "react"

const ManagementUserButton = () => {
    const [isDropdownUserOpen, setDropdownUserOpen] = useState(false);

    return (
        <li>
            <button onClick={()=> setDropdownUserOpen(!isDropdownUserOpen)} type="button" className={`${isDropdownUserOpen ?'bg-neutral-300 dark:bg-gray-700 group':''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group`} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span className="text-black  flex-1 ml-3 whitespace-nowrap ">Gestion de Usuarios</span>
                {isDropdownUserOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                }
            </button>
            <ul id="dropdown-example" className={`py-2 space-y-2 mt-1.5 ${isDropdownUserOpen ? 'bg-blue-100 rounded-md ' : 'hidden'}`}>
                <li>
                    <Link
                        href={"/admin/user-management"}
                        className="flex items-center p-2 mx-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span className="text-black  flex-1 ml-2 whitespace-nowrap">Editar Usuarios</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/admin/request-users"}
                        className="flex items-center p-2 mx-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        <span className="text-black  flex-1 ml-2 whitespace-nowrap">Solicitudes de Usuarios</span>
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default ManagementUserButton