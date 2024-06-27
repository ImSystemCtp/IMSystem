import { AssetsAdminTable, LoadingComponent, LowsAdminForm, SearchAssets } from "@/root/components";
import { useAuthorizedAdmin, useClearAssetsByLocation } from "@/root/hooks";
import {useRouter} from "next/navigation";
export default function RegisterLows() {
  useClearAssetsByLocation();
  const router = useRouter();
  const isAuthorized = useAuthorizedAdmin();
  if (!isAuthorized) return <LoadingComponent />
  const handleClick = () => {
    router.push("/admin/register-lows/form");
  };
  return (
    <div className="w-full h-screen flex flex-col">
      <h2 className="text-2xl font-bold dark:text-white text-center my-4">Registrar Bajas</h2>
      <h4 className="text-center text-lg dark:text-white">Paso 1: Selecciona los activos que deseas dar de baja</h4>
      <div className="flex-1 overflow-auto">
        <SearchAssets />
        <div className="flex flex-col lg:flex-row lg:m-2 lg:p-2 h-full">
          <AssetsAdminTable />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600">
          Siguiente Paso
        </button>
      </div>
    </div>
  );
}
