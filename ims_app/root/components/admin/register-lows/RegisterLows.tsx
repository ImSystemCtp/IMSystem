import { AssetsAdminTable, LoadingComponent, LowsAdminForm, SearchAssets } from "@/root/components";
import { useAuthorizedAdmin, useClearAssetsByLocation } from "@/root/hooks";
import Link from "next/link";
export default function RegisterLows() {
  useClearAssetsByLocation();
  const isAuthorized = useAuthorizedAdmin();
  if (!isAuthorized) return <LoadingComponent />
  return (
    <div className="w-full  flex flex-col">
      <h2 className="text-2xl font-bold dark:text-white text-center my-4">Registrar Bajas</h2>
      <h4 className="text-center text-lg dark:text-white">Paso 1: Selecciona los activos que deseas dar de baja</h4>
      <div className="flex-1 overflow-auto ">
        <SearchAssets />
        <div className="flex flex-col lg:flex-row lg:m-2 lg:p-2 h-full">
          <AssetsAdminTable />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Link href="/admin/register-lows/form" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">
          Siguiente Paso
        </Link>
      </div>
    </div>
  );
}
