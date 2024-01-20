"use client"
import { LoadingComponent } from "@/root/components";
import { useResponsibles } from "@/root/hooks";
import { useLawStore, useResponsibleStore } from "@/root/zustand";
import { ims_responsible } from "@prisma/client";
export default function EditResponsible() {
    useResponsibles();
    const { responsibles, loadingResponsible } = useResponsibleStore((state) => ({
        responsibles: state.responsibles,
        loadingResponsible: state.loadingResponsible}));
    const { selectResponsibleToEdit} = useResponsibleStore();
    return (
        loadingResponsible ? <LoadingComponent /> : responsibles.length === 0 ? (
            <div className="flex items-center justify-center bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                    No hay Funcionario Responsable!.
                </div>
            </div>
        ) :
            <div className=" border-2 rounded-lg border-slate-300 shadow-sm shadow-slate-300  p-4">
                <h2 className="text-center dark:text-white text-2xl font-bold pb-12 p-2">Funcionarios Responsables</h2>
                <div className="w-full max-h-60 overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Funcionario Responsable
                                </th>
                                <th scope="col" className=" px-6 py-3">
                                    Editar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {responsibles.map((responsibles: ims_responsible) => (
                                <tr key={responsibles.responsible_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {responsibles.responsible_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => selectResponsibleToEdit(responsibles)}
                                            className="text-white bg-slate-500 hover:bg-slate-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600" type="submit">
                                            Editar
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
