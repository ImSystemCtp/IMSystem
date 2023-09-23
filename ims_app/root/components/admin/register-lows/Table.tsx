
export default function RegisterTable() {
    return (
        <div>
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
                            <th scope="col" className="px-6 py-3 align-middle flex items-center justify-center ">
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
                            <td className="px-6 py-4 hidden md:table-cell">
                                <div className="flex items-center justify-center mb-4">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}