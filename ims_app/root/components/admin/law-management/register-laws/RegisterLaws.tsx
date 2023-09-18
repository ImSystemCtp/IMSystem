"use client";
import React from "react";
import { Formik, Form } from "formik";
import { CustomInput } from "../../../Formik";
import { locationMessage } from "@/schemas";
interface FormValues {
    name: string;
}
export default function RegisterLocation() {
    let initialValues: FormValues = {
        name: "",
    };
    const handleSubmit = async (values: FormValues) => {
        const { name} = values;

    };
    return (
            <main className=" ">
                <Formik initialValues={initialValues} validationSchema={locationMessage} onSubmit={handleSubmit}>
                    <div className="  flex flex-col justify-center items-center   p-10">
                        <Form className="border-2  rounded-lg border-slate-300 shadow-lg shadow-slate-300 p-4 w-3/4">
                            <h2 className="lg:w-full lg:m-4 text-center text-2xl font-bold m-4 pb-12">Registrar Leyes</h2>
                            <div className="w-full flex flex-col mt-4 mx-auto">
                                <CustomInput label="Nombre de Ubicacion" name="plateNumber" inputType="text" />
                            </div>
                            <div className="w-full mt-4 flex justify-center">
                                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">
                                    Registrar
                                </button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </main>
    );
}