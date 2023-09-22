export default function EditLaw() {
    return (
        <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300 p-4 w-3/4">
            <h2 className="text-center text-2xl font-bold  pb-12 p-2 ">Leyes</h2>
            <div className="w-full ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre de Ley
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Eliminar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                7372
                            </th>
                            <td className="px-6 py-4">
                                <button className="text-white p-2 rounded-lg bg-red-500">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}