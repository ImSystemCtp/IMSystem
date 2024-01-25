import Link from "next/link";
import { AlertMessage, LoadingComponent } from "@/root/components";
import { useUserStore } from "@/root/zustand";
import { useUserPending } from "@/root/hooks";
export default function RequestUsersCard() {
    useUserPending();
    const { usersPending ,isLoadUser } = useUserStore((state) => ({ usersPending: state.usersPending, isLoadUser: state.isLoadUser }));
    return (
        <div
            className="p-2 flex flex-col  break-words bg-gray-100 dark:bg-gray-700 w-full shadow-lg rounded"
        >
            <div className="flex flex-col items-center ">
                <div className=" w-full ">
                    <div className=" w-full ">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Solicitudes de Usuarios </h3>
                    </div>
                </div>
                <div className="w-full text-right">
                    <Link href={"/admin/request-users"} className="bg-blue-700 hover:bg-blue-400 text-white active:bg-blue-600 dark:bg-gray-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Ver todo</Link>
                </div>
            </div>
            <ul className="my-1">
            {isLoadUser ? (
                    <LoadingComponent />
                ) : usersPending.length === 0 ? (
                    <AlertMessage message="No hay solicitudes de usuarios pendientes."/>
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
                                    <a
                                        className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                                        href="#0"
                                        style={{ outline: 'none' }}
                                    >
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