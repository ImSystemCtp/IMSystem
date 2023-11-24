"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'
import Link from "next/link";
export default function UserNavBar() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/user");
    }
    return (
        <nav className="bg-sky-400 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="text-white flex items-center">
                    <Image src="/ctp-preview.png" alt="Logo" className="h-10 w-auto mr-3" width={400} height={400} />
                    <motion.button onClick={handleClick} whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }} className="text-2xl font-semibold whitespace-nowrap dark:text-white">IM_System</motion.button>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="bg-sky-400 font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/user/request-lows" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Solicitudes de Bajas</Link>
                        </li>
                        <li>
                            <Link href="/user/request-transfer" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Solicitudes de Traslados</Link>
                        </li>
                        <li className="ml-auto"><UserButton /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}