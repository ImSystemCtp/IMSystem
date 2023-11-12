"use client"
import { AssetsTable, SearchAssetsInfo, } from "@/root/components";
import { generateExcel } from "@/root/reports";
import { assetsReport } from "@/root/types";
import { useAssetStore, useLawStore, useLocationStore, useRegisterStore, useReportStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import toast from "react-hot-toast";
export default function AssetsManagement() {
  

  
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center">Gestión de Activos</h2>
      <SearchAssetsInfo />

      <div className="flex flex-col lg:flex-row lg:m-2 lg:p-2">
        <div className="w-full pr-0 lg:pr-4">
          <AssetsTable />
        </div>
      </div>
    </div>
  );
}