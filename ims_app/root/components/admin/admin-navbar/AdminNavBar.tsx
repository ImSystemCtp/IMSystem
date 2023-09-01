"use client"
import Link from "next/link";
import { NotificationDropdown } from "../../notification-dropdown";
import { DropdownButton } from "../../dropdown-button";
export default function AdminNavBar () {
    return(
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <h3 className="ml-3 text-xl">Tailblocks</h3>
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/admin/register-goods" className="mr-5 hover:text-gray-900">Registrar Bienes</Link>
        <Link href="/admin/users-management" className="mr-5 hover:text-gray-900">Gestion de Usuarios</Link>
        <Link href="/admin/locations-management" className="mr-5 hover:text-gray-900">Gestion de Ubicaciones</Link>
        <Link href="/admin/laws-management" className="mr-5 hover:text-gray-900">Gestion de Leyes</Link>
      </nav>
      <div>
        <NotificationDropdown/>
        <DropdownButton/>
      </div>
    </div>
  </nav>
  )
}