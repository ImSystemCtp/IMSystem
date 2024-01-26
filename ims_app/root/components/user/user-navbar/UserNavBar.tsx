"use client"
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'
import Link from "next/link";
export default function UserNavBar() {
    const router = useRouter();
    const handleClick = () => {router.push("/user"); }
    const toggleMenu = () => {
        const navbarDefault = document.getElementById("navbar-default");
        if (navbarDefault) { navbarDefault.classList.toggle("hidden"); }
    };
    return (
        <nav className="bg-neutral-400 border-gray-200 dark:bg-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="text-white flex items-center">
                    <Image src="/ctp-preview.png" alt="Logo" className="h-10 w-auto mr-3" width={400} height={400} />
                    <button onClick={handleClick}
                        className="text-2xl font-semibold whitespace-nowrap dark:text-white">IM_System</button>
                </div>
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="bg-neutral-400 font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
                        <li> <Link href="/user/request-lows" prefetch={false} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Solicitudes de Bajas</Link> </li>
                        <li> <Link href="/user/request-transfer" prefetch={false} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Solicitudes de Traslados</Link> </li>
                        <li className="ml-auto"><UserButton /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}