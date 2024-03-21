'use client';
import Modal from 'react-modal';
type FormModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};
import { CustomInput } from "@/root/components";
import { editAssetsMessage } from "@/schemas";
import { Form, Formik } from "formik";
import { useAssetStore } from '@/root/zustand';

export interface AssetsFormValues {
    assets_description: string,
    assets_series: string,
    assets_brand: string,
    assets_model: string,
    assets_invoice_number: string,
    assets_acquisition_value: string,
    invoice_date: string,
}
export default function EditAssetsForm({
    isOpen,
    onRequestClose,
}: FormModalProps) {
    const {editAssets} = useAssetStore((state) => ({ editAssets: state.editAssets }));
    const invoiceDate = editAssets.invoice_date ? new Date(editAssets.invoice_date).toISOString().substring(0, 10) : "";
    const initialValues = {
        assets_description: editAssets.assets_description,
        assets_series: editAssets.assets_series,
        assets_brand: editAssets.assets_brand,
        invoice_date:  invoiceDate,
        assets_model: editAssets.assets_model,
        assets_invoice_number: editAssets.assets_invoice_number,
        assets_acquisition_value: editAssets.assets_acquisition_value,
    } as AssetsFormValues;
    const handleSubmit = (values: AssetsFormValues) => {
        console.log(values);
    }
    const handleCancel = () => {
        console.log("Cancel");
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Seleccionar Rol"
            className="modal-content bg-white rounded-md p-8 max-w-90vw max-h-90vh relative"
            overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        > <button
            onClick={onRequestClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none" >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="justify-center items-center">
                <div className="flex flex-col md:flex-row">
                    <div className="justify-center items-center rounded-lg border border-gray-300 m-2 md:w-2/3 flex flex-col">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={editAssetsMessage}
                            onSubmit={handleSubmit} >
                            <Form className="w-full ">
                                <header>
                                    <h2 className="text-2xl dark:text-white font-bold  text-center">
                                        Editar Bienes
                                    </h2>
                                </header>
                                <div className=" justify-center w-full flex flex-col sm:flex-row lg:p-4 lg:px-10">
                                    <div className="w-full h-full p-2">
                                        <CustomInput label="Descripción del Bien:" name="assets_description" inputType="text" />
                                        <CustomInput label="Serie:" name="assets_series" inputType="text" />
                                        <CustomInput label="Marca:" name="assets_brand" inputType="text" />
                                        <CustomInput label="Fecha de Factura:" name="invoice_date" inputType="date" />
                                    </div>
                                    <div className="w-full p-2">
                                        <CustomInput label="Número de Factura:" name="assets_invoice_number" inputType="text" />
                                        <CustomInput label="Valor de adquisición:" name="assets_acquisition_value" inputType="text" />
                                        <CustomInput label="Modelo:" name="assets_model" inputType="text" />
                                    </div>
                                </div>
                                <div className="flex flex-row m-2 p-2 ">
                                    <div className="flex justify-center items-center md:mx-36">
                                        <button
                                            type="reset"
                                            onClick={handleCancel}
                                            className="bg-cyan-500 hover:bg-cyan-400 flex items-center mx-2 p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group "
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            <span className="  flex-1 ml-3 whitespace-nowrap">Limpiar Formulario</span>
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button
                                            className=" m-2 p-2 bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded" > Editar Activo.
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div >
        </Modal>
    );
}