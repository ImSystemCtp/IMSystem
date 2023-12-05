"use client"
import { AssetsTable, SearchAssetsInfo, } from "@/root/components";
import { useClearReportRegisters } from "@/root/hooks";
import { generateExcel } from "@/root/reports";
import { useReportStore } from "@/root/zustand";
import toast from "react-hot-toast";
export default function AssetsTotalManagement() {
  const { reportRegister } = useReportStore((state) => ({ reportRegister: state.reportRegister }));
  const { getTotalRegister } = useReportStore();

  useClearReportRegisters();
  const handleGetTotal = async () => {
    await getTotalRegister();
  }
  const handleExcel = async () => {
    if (reportRegister.length > 0) {
        toast.promise(generateExcel(reportRegister), {
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
    <div className="flex flex-row p-4 m-4 justify-center items-center">
      <div className="flex justify-normal items-center">
        <button
          onClick={handleGetTotal}
          className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        >
          Obtener Bienes
        </button>
      </div>
      <div className="flex flex-grow justify-end items-center">
        <button
          onClick={handleExcel}
          className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
        >
          Generar Excel!
        </button>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row lg:m-2 lg:p-2">
      <div className="w-full pr-0 lg:pr-4">
        <AssetsTable />
      </div>
    </div>
  </div>
);

}