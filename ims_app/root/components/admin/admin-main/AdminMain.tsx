"use client";
import RequestManagement from "../requests-management/RequestManagement";
import InfoCards from "../../info-cards/InfoCards";
import { RequestUserManagement } from "../request-user-management";
import { useAssets } from "@/root/hooks";
import { useRegisterIn } from "@/root/hooks/useRegisterIn";
export default function AdminMain() {
    useAssets();
    useRegisterIn();
    return (
        <div className="relative flex">
            <div className="flex-1 p-4">
                <div className="justify-end items-end w-full ">
                    <div className="mx-4 justify-end items-end relative max-w-md w-full">
                        <input
                            className="w-full h-10 pl-4 pr-10 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                            type="search"
                            placeholder="Buscar Bien..."
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute top-3 right-3 text-gray-400 cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                </div>
                <InfoCards />
                <RequestManagement />
                <RequestUserManagement />
            </div>
        </div>

    );

}
