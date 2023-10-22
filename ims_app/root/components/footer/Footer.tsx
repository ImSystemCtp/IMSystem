"use client"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-auto bg-sky-400 shadow  dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">IM_System</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6 ">Acerca de...</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">Politica de privacidad</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">Contacto</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}