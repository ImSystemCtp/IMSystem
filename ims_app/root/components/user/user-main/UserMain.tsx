"use client"
import { MouseEventHandler } from 'react';
import Link from "next/link"

import { useRouter } from 'next/navigation'
export default function UserMain() {
    const router = useRouter();
    const optionsList = [
        {
            title: "Solicitudes de Bajas",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                </svg>
            ),
            link: "/user/request-lows",
        },
        {
            title: "Solicitudes de Traslados",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            ),
            link: "/user/request-transfer",
        }
    ];
    const handleGo = (link: string): MouseEventHandler<HTMLButtonElement> => {
        return (event) => {
            router.push(link);
        };
    };
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen">
            {optionsList.map((menuItem, index) => (
                <div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} className="flex flex-col md:flex-row m-4 items-center justify-center" key={index}>
                    <button onClick={handleGo(menuItem.link)} className=" shadow-drop-bottom-right  hover:bg-blue-50 flex flex-col justify-center items-center border-4 border-gray p-6 md:p-3 lg:px-8 rounded-lg bg-white">
                        <div className="w-10 h-10 items-center justify-center item-center flex rounded-full bg-purple-100 text-blue-500 mb-4 border-2 border-blue-500">
                            {menuItem.icon}
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center"> {menuItem.title} </h2>
                        <div className="flex justify-center mt-4">
                            <Link href={menuItem.link} className="w-52 text-center  hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                                {" "}
                                Ir!{" "}
                            </Link>
                        </div>
                    </button>
                </div>
            ))}
        </div>
    );
}
