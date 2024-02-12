import Link from "next/link";
import { AlertMessage, LoadingComponent } from "@/root/components";
import { useUserStore } from "@/root/zustand";
import { useUserPending } from "@/root/hooks";
export default function RequestUsersCard() {
    useUserPending();
    const { usersPending, isLoadUser } = useUserStore((state) => ({ usersPending: state.usersPending, isLoadUser: state.isLoadUser }));
    return (
        <div
            className="w-full h-full p-2 flex flex-col  break-words bg-gray-100 dark:bg-gray-700  shadow-lg rounded" >
            <div className="flex flex-col items-center ">
                <div className=" w-full ">
                    <header className=" w-full ">
                        <h3 className="m-4 font-semibold text-2xl text-gray-900 dark:text-gray-50">Solicitudes de Usuarios </h3>
                    </header>
                </div>
                <div className="w-full text-right">
                    <Link href={"/admin/request-users"} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"><span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Ver todo...
                    </span></Link>
                </div>
            </div>
            <ul className="my-1 h-full mt-2">
                {isLoadUser ? (
                    <LoadingComponent />
                ) : usersPending.length === 0 ? (
                    <AlertMessage message="No hay solicitudes de usuarios pendientes." />
                ) :
                    usersPending.map((user, index) => (
                        <li key={index} className="flex px-4">
                            <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                                <div className="flex-grow flex justify-between items-center">
                                    <div className="self-center">
                                        <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                                            href="#0" style={{ outline: 'none' }} >
                                            {`${user.usu_name} ${user.usu_surnames}`}
                                        </a>
                                    </div>
                                    <div className="flex-shrink-0 ml-2">
                                        <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">Pendiente</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                    )}
            </ul>
        </div >
    );
}