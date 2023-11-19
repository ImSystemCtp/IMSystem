import * as XLSX from "xlsx";
export const generateExcel = async (reportRegister: registerToReport[]) => {
    const lengths = [20, 20, 20, 20, 20, 20, 20, 20, 30, 20, 20, 30, 20];
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

        const dataFinal = [...tabla];
        setTimeout(() => {
            creandoArchivo(dataFinal);
        }, 1000);
    };

    const creandoArchivo = (dataFinal: any) => {
        const book = XLSX.utils.book_new();

        const sheet = XLSX.utils.json_to_sheet(dataFinal, { skipHeader: true });

        sheet["!merges"] = [
            XLSX.utils.decode_range("A1:A3"),
            XLSX.utils.decode_range("B1:B3"),
            XLSX.utils.decode_range("C1:C3"),
            XLSX.utils.decode_range("D1:D3"),
            XLSX.utils.decode_range("E1:E3"),
            XLSX.utils.decode_range("F1:F3"),
            XLSX.utils.decode_range("G1:G3"),
            XLSX.utils.decode_range("H1:H3"),
            XLSX.utils.decode_range("I1:I3"),
            XLSX.utils.decode_range("J1:J3"),
            XLSX.utils.decode_range("K1:K3"),
            XLSX.utils.decode_range("L1:L3"),
            XLSX.utils.decode_range("M1:M3"),
            XLSX.utils.decode_range("N1:N3"),
        ];
        let properties: any = [];
        lengths.forEach((col) => {
            properties.push({
                width: col,
            });
        });
        sheet["!cols"] = properties;
        XLSX.utils.book_append_sheet(book, sheet, "Registros");

        XLSX.writeFile(book, "Reporte de Registros.xlsx");
    };
    handleDownload();
};