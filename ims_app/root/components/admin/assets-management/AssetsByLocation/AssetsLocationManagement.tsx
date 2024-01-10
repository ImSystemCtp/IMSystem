import { AssetsTable, LoadingComponent, SearchAssetsInfo, } from "@/root/components";
import { useAuthorizedAdmin } from "@/root/hooks";
import { Suspense } from "react";
export default function AssetsLocationManagement() {
  const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center dark:text-white">Gestión de Activos</h2>
      <Suspense fallback={<LoadingComponent/>}>
      <SearchAssetsInfo />
      </Suspense>
      <div className="flex flex-col lg:flex-row lg:m-2 lg:p-2">
        <div className="w-full pr-0 lg:pr-4">
          <AssetsTable />
        </div>
      </div>
    </div>
  );
}