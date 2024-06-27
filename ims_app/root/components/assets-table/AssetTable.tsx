import { ims_assets } from "@prisma/client"
import { ItemAsset } from "."
interface Props { assets: ims_assets[], isAdminTable: boolean }
const AssetTable = ({ assets, isAdminTable }: Props) => {
    return (
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700  uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-3 py-3">
                        Número de Placa
                    </th>
                    <th scope="col" className="hidden md:table-cell px-3 py-3">
                        Marca
                    </th>
                    <th scope="col" className="hidden md:table-cell px-3 py-3">
                        Modelo
                    </th>
                    <th scope="col" className="hidden md:table-cell px-6 py-3">
                        Descripción
                    </th>
                    <th scope="col" className="px-6 py-3 align-middle flex items-center justify-center">
                        Seleccionar
                    </th>
                    {!isAdminTable ? (<th scope="col" className=" "> Añadir detalle </th>
                        ):("")}
                </tr>
            </thead>
            <tbody className=" overflow-y-scroll w-full" >
                {
                    assets.map((asset: ims_assets, index) => ( asset !== null &&
                        <ItemAsset key={index} asset={asset} isAdminTable={isAdminTable} />
                    ))
                }
            </tbody>
        </table>
    )
}
export default AssetTable
