"use client"
import React, { useState } from "react";
import { RequestLowForm, AssetsUserTable, SearchAssets } from "@/root/components";
export default function RequestLows() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold  text-center">Registrar Solicitudes de Bajas</h2>
      <SearchAssets />
      <div className=" flex flex-col lg:flex-row lg:m-2 lg:p-2">
        <div className=" w-full lg:w-3/5 pr-0 lg:pr-4">
          <AssetsUserTable />
        </div>
        <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300  w-full lg:w-2/5">
          <RequestLowForm />
        </div>
      </div>
    </div>
  );
}
