"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const ManagementAssetButton = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const pathname = usePathname();
    return (
    <li>
    <button onClick={()=> setDropdownOpen(!isDropdownOpen)} type="button" className={`${isDropdownOpen ?'bg-neutral-300 dark:bg-gray-700 group':''} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group`} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>
        <span className=" text-black  flex-1 ml-5 whitespace-nowrap ">Gestion de Bienes</span>
        {isDropdownOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        }
    </button>
    <ul id="dropdown-example" className={`py-2 space-y-2 mt-1.5 ${isDropdownOpen ? 'bg-blue-100 rounded-md ' : 'hidden'}`}>
        <li>
            <Link
                href={"/admin/assets-management/by-location"} prefetch={false}
                className={`flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group ${
                    pathname === "/admin/assets-management/by-location" ? 'bg-sky-200 dark:bg-gray-700' : 'bg-transparent dark:bg-transparent'
                }`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span className="text-black  flex-1 ml-2 whitespace-nowrap">Bienes Por Ubicacion</span>
            </Link>
        </li>
        <li>
            <Link
                href={"/admin/assets-management/total-assets"} prefetch={false}
                className="flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="text-black  flex-1 ml-2 whitespace-nowrap">Bienes Totales</span>
            </Link>
        </li>
        <li>
            <Link
                href={"/admin/register-assets"} prefetch={false}
                className="flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-700 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                <span className="text-black ml-2">Registrar Activos</span>
            </Link>
        </li>
    </ul>
</li>
)
}

export default ManagementAssetButton