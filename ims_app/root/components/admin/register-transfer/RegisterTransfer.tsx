import { AssetsAdminTable, LoadingComponent, SearchAssets, TransferAdminForm } from "@/root/components";
import { useAuthorizedAdmin, useClearAssetsByLocation } from "@/root/hooks";
export default function RegisterTransfer() {
  useClearAssetsByLocation();
  const isAuthorized = useAuthorizedAdmin();
    if (!isAuthorized)
        return <LoadingComponent/>
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold dark:text-white  text-center">Registrar Traslados</h2>
      <SearchAssets/>
      <div className=" flex flex-col lg:flex-row lg:m-2 lg:p-2">
        <div className=" w-full lg:w-3/5 pr-0 lg:pr-4">
          <AssetsAdminTable/>
        </div>
        <div className=" mb-4 border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300  w-full lg:w-2/5">
          <TransferAdminForm />
        </div>
      </div>
    </div>
  );
}