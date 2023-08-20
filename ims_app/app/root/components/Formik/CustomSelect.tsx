import { useField } from "formik";
import React, { SelectHTMLAttributes } from "react";
import classNames from "classnames";
import { formsClassesCustomSelect } from "./formsClasses";
interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, ...selectProps }) => {
    const [field, meta] = useField<string>(selectProps.name || "");
    const selectClassName = classNames(formsClassesCustomSelect, {
        "input-error": meta.touched && meta.error ? "" : "",
    });
    return (
        <>
            <div className="mb-4">
                <label htmlFor={field.name} className="">
                    {label}
                </label>
                <select {...field} {...selectProps} className={selectClassName} placeholder={selectProps.placeholder} />
                {meta.touched && meta.error && <div className="border-red-600 text-red-950">{meta.error}</div>}
            </div>
        </>
    );
};

export default CustomSelect;
