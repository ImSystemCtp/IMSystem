"use client";
import React from "react";
import { Formik, Form } from "formik";
import { CustomInput } from "../../../Formik";
import { locationMessage } from "@/schemas";
import { motion } from "framer-motion";
interface FormValues {
    name: string;
}
export default function RegisterLaw() {
    let initialValues: FormValues = {
        name: "",
    };
    const handleSubmit = async (values: FormValues) => {
        const { name} = values;

    };
    return (
            <main className=" ">
                <Formik initialValues={initialValues} validationSchema={locationMessage} onSubmit={handleSubmit}>
                    <div className="  flex flex-col justify-center items-center  ">
                        <Form className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300 p-4 w-3/4">
                            <h2 className="lg:w-full lg:m-4 text-center text-2xl font-bold m-4 pb-12">Registrar Leyes</h2>
                            <div className="w-full flex flex-col mt-4 mx-auto">
                                <CustomInput label="Nombre de Ubicacion" name="plateNumber" inputType="text" />
                            </div>
                            <div className="w-full mt-4 flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                                Registrar
                            </motion.button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </main>
    );
}