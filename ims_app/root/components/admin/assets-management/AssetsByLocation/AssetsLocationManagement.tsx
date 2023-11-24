"use client"
import { AssetsTable, SearchAssetsInfo, } from "@/root/components";
export default function AssetsLocationManagement() {
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