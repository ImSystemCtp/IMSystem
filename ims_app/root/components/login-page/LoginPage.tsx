"use client"
import { USER_ROLES } from "@/app/api/enums/roles";
import { QueryOptions } from "@/app/types";
import { useAuthStore, useUserStore } from "@/root/zustand";
import { useEffect } from "react";
export default function LoginPage() {

    const getAuth = useAuthStore(state => state.getUsetAuth)!;
    const getUsers = useUserStore(state => state.getUsers)!;

    useEffect(() => {
        async function checkUserRole() {
            const usersActions = await getUsers({ orderBy : "usu_id" , order: "desc"} as QueryOptions);
            const authActions = await getAuth();
            if(authActions.usu_role === USER_ROLES.ADMIN){
                console.log(authActions)
                window.location.href = "/admin";
            }
            else if(authActions.usu_role === USER_ROLES.USER){
                console.log(authActions)
                window.location.href = "/user";
            }
        }
        checkUserRole();
    }, [getAuth, getUsers]);

    return (
        <div className=" bg-slate-200  dark:bg-slate-800  flex justify-center items-center  h-screen">
            <div className="border-2 border-black dark:border-gray-600 rounded-lg w-full flex justify-center items-center sm:w-1/2 md:w-2/4 lg:w-1/2  ">
                <div className="    flex flex-col justify-center items-center shadow-drop-bottom-right w-full sm:w-full md:w-3/4 lg:w-10/12 xl:w-full">
                    <div className="flex flex-col justify-start items-center">
                        <h2 className="w-full font-bold mb-4 text-center border-2 border-slate-950 dark:border-gray-600 rounded-lg p-4 m-4">BIENVENIDO</h2>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <p className="w-full font-bold mb-4 text-center border-2 border-slate-950 dark:border-gray-600 rounded-lg p-4 m-4">Espera a que te den acceso </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
