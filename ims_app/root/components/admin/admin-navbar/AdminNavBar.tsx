"use client"
import Link from "next/link";
import { NotificationDropdown } from "../../notification-dropdown";
import { DropdownButton } from "../../dropdown-button";
export default function AdminNavBar () {
    return(
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/admin" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IM_System</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <Link href="/admin/register-goods" className="mr-5 hover:text-gray-900">Registrar Bienes</Link>
            </li>
            <li>
            <Link href="/admin/users-management" className="mr-5 hover:text-gray-900">Gestion de Usuarios</Link>
            </li>
            <li>
            <Link href="/admin/locations-management" className="mr-5 hover:text-gray-900">Gestion de Ubicaciones</Link>
            </li>
            <li>
            <Link href="/admin/laws-management" className="mr-5 hover:text-gray-900">Gestion de Leyes</Link>
            </li>
            <li><NotificationDropdown/></li>
            <li><DropdownButton/></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}