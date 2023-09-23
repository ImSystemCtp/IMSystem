"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { NotificationDropdown } from "../../notification-dropdown";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { useSideBarStore } from "@/root/zustand/provider/siderbar-state/sidebar-state";
export default function AdminNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    useSideBarStore.getState().toggle(); // Alternar entre abierto y cerrado
  };
  const toggleMenu = () => {
    const navbarDefault = document.getElementById("navbar-default");
    if (navbarDefault) {
      navbarDefault.classList.toggle("hidden");
    }
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="text-center">
          <button
            className=" focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            onClick={handleToggle} // Call the handler to show the navigation
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <Link href="/admin" className="flex items-center">
          <Image src="/ctp-preview.png" alt="Logo" className="h-10 w-auto mr-3" width={400} height={400} />
          <motion.button whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IM_System</motion.button>
        </Link>
        <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-center  flex flex-col py-10 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li ><NotificationDropdown /></li>
            <li ><UserButton /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}