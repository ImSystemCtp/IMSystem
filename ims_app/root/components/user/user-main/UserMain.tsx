"use client"
import Link from "next/link"
import { motion } from "framer-motion";
export default function UserMain() {
    const optionsList = [
        {
            title: "Solicitudes de Bajas",
            icon: "home",
            link: "/user/request-lows",
        },
        {
            title: "Solicitudes de Traslados",
            icon: "home",
            link: "/user/request-transfer",
        }
    ];
    return (
        <div className="flex items-center justify-center w-full h-screen">
            {optionsList.map((menuItem, index) => (
                    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} className="m-4 items-center flex flex-row justify-center" key={index}>
                        <button className=" shadow-drop-bottom-right  hover:bg-blue-50 flex flex-col justify-center items-center border-4 border-gray p-6 md:p-3 lg:px-8 rounded-lg bg-white">
                            <div className="w-10 h-10 items-center justify-center item-center flex rounded-full bg-purple-100 text-blue-500 mb-4 border-2 border-blue-500"></div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center"> {menuItem.title} </h2>
                            <div className="flex justify-center mt-4">
                                <Link href={menuItem.link} className="w-52 text-center  hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                                    {" "}
                                    Go{" "}
                                </Link>
                            </div>
                        </button>
                    </motion.div>
                ))}
        </div>
    );
}
