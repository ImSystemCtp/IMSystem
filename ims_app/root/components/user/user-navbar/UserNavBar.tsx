"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
export default function UserNavBar() {
    const toggleMenu = () => {
        const navbarDefault = document.getElementById("navbar-default");
        if (navbarDefault) {
            navbarDefault.classList.toggle("hidden");
        }
    };
    return (
        <nav className="bg-sky-400 border-gray-200 dark:bg-gray-900">
            <div className="flex items-center justify-between mx-auto px-8 py-4 w-full md:flex-wrap">
                <div className="flex items-center">
                    <div className="text-white flex items-center">
                        <Image src="/ctp-preview.png" alt="Logo" className="h-10 w-auto mr-3" width={400} height={400} />
                        <motion.button whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }} className="text-2xl font-semibold whitespace-nowrap dark:text-white">IM_System</motion.button>
                    </div>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex text-center md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="ml-auto"><UserButton /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}