import React from "react";
import SearchAssetsAdmin from "./SearchAssetsAdmin";
import { LowsAdminForm, RegisterTable } from ".";

export default function RegisterLows() {
  return (
    <div className="w-full">
      <h1 className="m-2 text-center">Registrar Bajas</h1>
      <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300 flex flex-col lg:flex-row lg:m-4 lg:p-4">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <SearchAssetsAdmin />
        </div>
        <div className="flex justify-center items-center w-full  lg:w-1/4 lg:pl-4 mx-20">
          <select
            id="countries"
            className="border-2   border-slate-300 shadow-sm shadow-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Buscar por Ubicacion</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row lg:m-4 lg:p-4">
        <div className=" w-full lg:w-3/5 pr-0 lg:pr-4">
          {/* RegisterTable ocupa más de la mitad de la pantalla */}
          <RegisterTable />
        </div>
        <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300  w-full lg:w-2/5">
          {/* LowsAdminForm ocupa lo que queda */}
          <LowsAdminForm />
        </div>
      </div>
    </div>
  );
}

