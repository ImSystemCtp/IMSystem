import React, { useState } from "react";
import * as XLSX from "xlsx";
import { assetsReport } from "@/root/types";
import { saveAs } from "file-saver";
export const generateExcel = (assetReport: assetsReport[]) => {
    console.log(assetReport);
    {/*
    const titulo = [{ A: "Reporte de Activos" }, {}];
    const informacionAdicional = {
        A: "Creado por: iTana el Martes, 04 de Abril del 2023",
    };
    const longitudes = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
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
                M: "Observaciones",
            },
        ];

        assetReport.forEach((asset) => {
            tabla.push({
                A: String(asset.register.reg_tomo) + String(asset.register.reg_folio) + String(asset.register.reg_asiento),
                B: asset.assets.assets_no,
                C: asset.assets.assets_description,
                D: String(asset.assets.invoice_date),
                E: asset.assets.assets_series,
                F: asset.assets.assets_brand,
                G: asset.assets.assets_model,
                H: asset.assets.assets_state,
                I: String(asset.location),
                J: String(asset.assets.assets_invoice_number),
                K: asset.assets.assets_acquisition_value,
                L: String(asset.law),
                M: String(asset.register.reg_observation),
            });
        });

        const dataFinal = [...titulo, ...tabla, informacionAdicional];
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
    };*/}
};