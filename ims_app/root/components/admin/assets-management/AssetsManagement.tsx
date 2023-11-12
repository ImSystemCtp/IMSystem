"use client"
import { AssetsTable, SearchAssetsInfo,  } from "@/root/components";
import { generateExcel } from "@/root/reports";
import { assetsReport } from "@/root/types";
import { useAssetStore, useLawStore, useLocationStore, useRegisterStore, useReportStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import toast from "react-hot-toast";
export default function AssetsManagement() {
  const { assetsByLocationInfo } = useAssetStore();
  const {reportRegister } = useReportStore();

  const handleExcel = async () => {
    if (reportRegister.length > 0) {
      toast.promise( generateExcel(reportRegister), {
        loading: 'Generando el reporte...',
        success: 'Reporte generado con éxito',
        error: 'Error al generar el reporte',
      });
    } else {
      toast.error('No hay activos para generar el reporte');
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center">Gestión de Activos</h2>
      <SearchAssetsInfo />
      <div className="flex justify-center items-center">
        <button onClick={handleExcel}>Generar Excel</button>
      </div>
      <div className="flex flex-col lg:flex-row lg:m-2 lg:p-2">
        <div className="w-full pr-0 lg:pr-4">
          <AssetsTable />
        </div>
      </div>
    </div>
  );
}