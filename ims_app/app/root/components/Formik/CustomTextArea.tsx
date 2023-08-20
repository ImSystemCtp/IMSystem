import { useField } from "formik";
import React, { TextareaHTMLAttributes } from "react";
import classNames from "classnames";
import { formsClasses } from "./formsClasses";

interface CustomTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ label, ...textareaProps }) => {
    const [field, meta] = useField<string>(textareaProps.name || "");

    const textareaClassName = classNames(formsClasses, {
        "": meta.touched && meta.error ? "" : "",
    });

    return (
        <>
            <div className="relative z-0 w-full mb-6 group">
                <label className=" peer-focus:font-medium text-gray-900 duration-300 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg mb-12">{label}</label>
                <textarea {...field} {...textareaProps} className={textareaClassName} />
                {meta.touched && meta.error && (
                    <div className=" w-full rounded-lg p-5">
                        <p className="text-red-950">{meta.error}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomTextArea;
