import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useSideBarStore } from "@/root/zustand";
export default function AdminNavBar() {
  const {toggle}=useSideBarStore()
  return (
    <nav className="bg-neutral-400 border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto px-8 py-4 w-full">
        <div className="text-center">
          <button
            className=" focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            onClick={toggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>
        <Link href="/admin" className="text-white flex items-center">
          <Image src="/ctp-preview.png" alt="Logo" className="h-10 w-auto mr-3" width={400} height={400} />
          <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IM_System</p>
        </Link>
        <div className="w-auto" >
          <UserButton />
        </div>
      </div>
    </nav>
  )
}