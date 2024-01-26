"use client"
import { AlertMessage, LoadingComponent } from "@/root/components";
import { useLawStore } from "@/root/zustand";
import { ims_laws } from "@prisma/client";
import { useLaw } from "@/root/hooks";
export default function EditLaw() {
    useLaw();
    const { laws, loadingLaw } = useLawStore((state) => ({ laws: state.laws, loadingLaw: state.loadingLaw}));
    const { selectLawToEdit} = useLawStore();
    return (
        loadingLaw ? <LoadingComponent /> : laws.length === 0 ? ( <AlertMessage message="No hay leyes registradas!."/> ) :
            <div className=" border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300  p-4">
                <h2 className="text-center text-2xl dark:text-white font-bold pb-12 p-2">Leyes</h2>
                <div className="w-full max-h-60 overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Ley
                                </th>
                                <th scope="col" className=" px-6 py-3">
                                    Descripción
                                </th>
                                <th scope="col" className=" px-6 py-3">
                                    Editar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {laws.map((law: ims_laws) => (
                                <tr key={law.law_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {law.law_name}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {law.law_description}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => selectLawToEdit(law)}
                                            className="text-white bg-slate-500 hover:bg-slate-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600" type="submit"> Editar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}