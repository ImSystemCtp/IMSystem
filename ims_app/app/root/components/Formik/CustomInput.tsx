import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { formsClasses } from "./formsClasses";

type InputType = "text" | "number" | "password" | "email" | "date" | "time" | "file" | "radio" | "searchTerm";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputType: InputType;
    icon?: IconDefinition;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, inputType, icon, ...inputProps }) => {
    const [field, meta] = useField<string>(inputProps.name || "");

    const inputClassName = classNames(formsClasses, {
        "": meta.touched && meta.error ? "" : "",
    });

    return (
        <>
            <div className="mb-2 flex flex-col items-start w-full">
                <label className="text-start ">{label}</label>
                <div className="relative flex items-center w-full">
                    {icon && (
                        <span className="absolute -left-6 top-2 text-gray-400">
                            <FontAwesomeIcon icon={icon} />
                        </span>
                    )}
                    <input {...field} {...inputProps} type={inputType} className={inputClassName} />
                </div>
                {meta.touched && meta.error && (
                    <div className="w-full rounded-lg p-5">
                        <p className="text-red-500">{meta.error}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomInput;
