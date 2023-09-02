import React from "react";
import SearchGoodsAdmin from "./SearchGoodsAdmin";
import { LowsAdminForm } from ".";
// Asegúrate de importar Yup si lo estás utilizando para la validación.




export default function RegisterLows() {
    return (
        <div>
            <h1 className="text-center">Registrar Bajas</h1>
            <div className=" flex flex-row m-4 ">
                <div className="w-1/2 m-2 p-2 bg-gray-500 rounded-lg">
                    <SearchGoodsAdmin />
                    <LowsAdminForm/>
                </div>
                <div className="m-4">div2</div>
            </div>
        </div>
    );
}

