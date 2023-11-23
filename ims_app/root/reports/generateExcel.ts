import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useReportStore } from "@/root/zustand";
import { saveAs } from "file-saver";
export const generateExcel = async (reportRegister: registerToReport[]) => {
    const titulo = [{ A: "Reporte de Activos" }, {}];
    const informationAdicional = {
        A: "Creado por: Jesus & Francisco",
    };
    const longitudes = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
    const handleDownload = () => {
        let tabla = [
            {
                A: "Registro en",
                B: "Número de Patrimonio",
                C: "Descripción del Bien",
                D: "Registro en",
                E: "Serie",
                F: "Marca",
                G: "Modelo",
                H: "Estado",
                I: "Ubicación",
                J: "Número de Factura",
                K: "**Valor de adquisición (Capitalización de los activos) (Colones)",
                L: "Ley que financió",
                M: " Funcionario Responsable (Nombre y cédula)",
                N: "Observaciones",
            },
        ];
        reportRegister.forEach((asset) => {
            tabla.push({
                A: String(asset.reg_tomo) + "," + String(asset.reg_folio) + "," + String(asset.reg_asiento),
                B: asset.assets_no,
                C: asset.assets_description,
                D: String(asset.invoice_date),
                E: asset.assets_series,
                F: asset.assets_brand,
                G: asset.assets_model,
                H: asset.assets_state,
                I: String(asset.location_name),
                J: String(asset.assets_invoice_number),
                K: asset.assets_acquisition_value,
                L: String(asset.law_name),
                M: String(asset.usu_name),
                N: String(asset.reg_observation),
            });
        });

        const dataFinal = [...titulo, ...tabla, informationAdicional];
        setTimeout(() => {
            creandoArchivo(dataFinal);
        }, 1000);
    };

    const creandoArchivo = (dataFinal:any) => {
        const libro = XLSX.utils.book_new();

        const hoja = XLSX.utils.json_to_sheet(dataFinal, { skipHeader: true });

        hoja["!merges"] = [
            XLSX.utils.decode_range("A1:G1"),
            XLSX.utils.decode_range("A2:G2"),
            XLSX.utils.decode_range("A34:G34"),
        ];

        let propiedades:any = [];

        longitudes.forEach((col) => {
            propiedades.push({
                width: col,
            });
        });

        hoja["!cols"] = propiedades;

        XLSX.utils.book_append_sheet(libro, hoja, "Productos");

        XLSX.writeFile(libro, "ProductosEstilizado.xlsx");
    };
    handleDownload();
};