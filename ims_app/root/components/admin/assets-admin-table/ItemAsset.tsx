import { useAssetCheckStore, useAssetStore } from "@/root/zustand";
import { ims_assets } from "@prisma/client";


interface AssetItemProps {
    asset: ims_assets
}

export default function ItemAsset( { asset }: AssetItemProps) {
    const { deleteAssetsCheck, addAssetsCheck } = useAssetCheckStore();
    const assetsCheck = useAssetCheckStore((state) => state.assetsCheck);
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {asset.assets_no}
            </td>
            <td className="px-6 py-4 hidden md:table-cell">{asset.assets_brand}</td>
            <td className="px-6 py-4 ">
                <div className="flex items-center justify-center mb-4" onClick={() => {
                    const checkbox = document.getElementById(`checkbox-${asset.assets_no}`) as HTMLInputElement;
                    if (checkbox) {
                        if (!checkbox.checked) {
                            deleteAssetsCheck(asset);
                        } else {
                            addAssetsCheck(asset);
                        }
                    }
                }}>
                    <input
                        id={`checkbox-${asset.assets_no}`}
                        type="checkbox"
                        checked={assetsCheck.includes(asset)}
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                </div>
            </td>
        </tr>
    )
}
