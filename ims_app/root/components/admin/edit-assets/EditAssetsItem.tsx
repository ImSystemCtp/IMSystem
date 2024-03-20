import { ims_assets } from "@prisma/client";

interface AssetItemProps { asset: ims_assets }
export default function EditAssetsItem({ asset }: AssetItemProps) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {asset.assets_no}
            </td>
            <td className="px-6 py-4 hidden md:table-cell">{asset.assets_brand}</td>
            <td className="px-6 py-4 ">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    {asset.assets_model}
                </div>
            </td>
            <td className="px-6 py-4 hidden md:table-cell">{asset.assets_description}</td>
            <td className="px-6 py-4 hidden md:table-cell">{asset.assets_state}</td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {asset.assets_invoice_number}
            </td>
        </tr>
    )
}