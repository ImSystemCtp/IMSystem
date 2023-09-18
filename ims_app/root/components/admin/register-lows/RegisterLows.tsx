import React from "react";
import SearchGoodsAdmin from "./SearchGoodsAdmin";
import { LowsAdminForm } from ".";
export default function RegisterLows() {
    return (
        <div className="w-full">
            <h1 className="m-2 text-center">Registrar Bajas</h1>
            <div className=" flex flex-col  lg:flex-row  lg:m-4 lg:p-4">
                <div className="w-full m-2 p-2 border-2   border-slate-300 shadow-lg shadow-slate-300  rounded-lg ">
                    <SearchGoodsAdmin />
                    <LowsAdminForm/>
                </div>
                <div className="m-4 w-full ">div2</div>
            </div>
        </div>
    );
}

