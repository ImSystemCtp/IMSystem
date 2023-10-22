"use client"
import React, { useState } from "react";
import { useLocation } from "@/root/hooks";
import { useAssetStore, useLocationStore } from "@/root/zustand";
import { RequestLowForm, RequestLowsTable, SearchAssetsLows } from "@/root/components";
export default function RequestLows() {
  useLocation();
  const {getAssetsByLocation} = useAssetStore();
  const { locations } = useLocationStore();
  const [locationSelect, setLocationSelect] = useState<string>("");
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    getAssetsByLocation(parseInt(event.target.value));
  }
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold  text-center">Registrar Bajas</h2>
      <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300 flex flex-col lg:flex-row lg:m-2 lg:p-2">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <SearchAssetsLows />
        </div>
        <div className="flex justify-center items-center w-full  lg:w-1/4 lg:pl-4 mx-20">
          <select
            onChange={handleSelect}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {!locationSelect ? <option value="">Buscar por ubicacion</option> : ""}
            {locations.map((location) => {
              return <option key={location.location_id} value={location.location_id}>{location.location_name}</option>;
            })}
          </select>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row lg:m-2 lg:p-2">
        <div className=" w-full lg:w-3/5 pr-0 lg:pr-4">
          <RequestLowsTable />
        </div>
        <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300  w-full lg:w-2/5">
          <RequestLowForm />
        </div>
      </div>
    </div>
  );
}

