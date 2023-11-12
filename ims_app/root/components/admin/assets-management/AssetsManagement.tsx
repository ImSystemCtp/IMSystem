"use client"
import { AssetsTable, SearchAssetsInfo,  } from "@/root/components";
import { generateExcel } from "@/root/reports";
import { assetsReport } from "@/root/types";
import { useAssetStore, useLawStore, useLocationStore, useRegisterStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";
import toast from "react-hot-toast";
export default function AssetsManagement() {
  const { assetsByLocationInfo } = useAssetStore();
  const { getLocationById, location } = useLocationStore();
  const { getLawById, law } = useLawStore();
  const { registerByAssetId, registerAssetId } = useRegisterStore();
  const handleExcel = async () => {
    console.log(assetsByLocationInfo);
    let assetReport : assetsReport[] = [];
    if (assetsByLocationInfo.length > 0) {
      for(let i = 0; i < assetsByLocationInfo.length; i++) {
        await gets(assetsByLocationInfo[i]);
        console.log(assetsByLocationInfo[i]);
        assetReport = [
          ...assetReport,
          {
            register:  registerAssetId || null,
            assets: assetsByLocationInfo[i],
            location:  location?.location_name || '',
            law:  law?.law_name || '',
          },
        ];
      }
      generateExcel(assetReport);
    } else {
      toast.error('No hay activos para generar el reporte');
    }
  };
const gets = async (asset: ims_assets) => {
  if ( asset !== null && asset.assent_law_id !== null && asset.assets_curr_location !== null) {
    await getLawById(asset.assent_law_id);
    await getLocationById(asset.assets_curr_location);
    await registerByAssetId(asset.assets_no);
}
}
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