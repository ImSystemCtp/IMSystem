"use client";
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
            <div >
                <label htmlFor={field.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {label}
                </label>
                <select {...field} {...selectProps} className={selectClassName} placeholder={selectProps.placeholder} />
                {meta.touched && meta.error && <div className="border-red-600 text-red-950">{meta.error}</div>}
            </div>
        </>
    );
};

export default CustomSelect;
