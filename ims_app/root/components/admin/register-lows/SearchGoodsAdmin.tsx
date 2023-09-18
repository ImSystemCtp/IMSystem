
export default function SearchGoodsAdmin() {
    return (
        <div className="w-full">
                <input
                    type="text"
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search User"
                />
                <div className="my-2 w-full rounded-lg relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="hidden md:table-cell  px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Seleccionar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Apple MacBook Pro 17
                                </th>
                                <td className="px-6 py-4 hidden md:table-cell  ">Silver</td>
                                <td>
                                <button className="px-4 py-2 text-white bg-green-600 font-medium rounded-lg text-sm  ">
                                    Seleccionar
                                </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
        </div>
    )
}