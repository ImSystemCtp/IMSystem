import * as XLSX from "xlsx";
export const generateExcel = async (reportRegister: registerToReport[]) => {
  const lengths = [20, 20, 20, 20, 20, 20, 20, 20, 30, 20, 20, 30, 20];
  console.log(reportRegister);
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
    for(const asset of reportRegister){
      console.log(asset);
      asset.reg_type === "Register"
        ? tabla.push({
          A: String(asset.reg_tomo) + "," + String(asset.reg_folio) + "," + String(asset.reg_asiento),
          B: asset.assets_no,
          C: asset.assets_description,
          D: String(asset.invoice_date?.toString().split('T')[0]),
          E: asset.assets_series,
          F: asset.assets_brand,
          G: asset.assets_model,
          H: asset.assets_state,
          I: String(asset.location_name),
          J: String(asset.assets_invoice_number),
          K: asset.assets_acquisition_value,
          L: String(asset.law_name),
          M: String(asset.responsible_name),
          N: String(asset.reg_observation),
        })
        : tabla.push({
          A: String(asset.reg_tomo) + "," + String(asset.reg_folio) + "," + String(asset.reg_asiento),
          B: String(asset.reg_observation),
          C: "",D: "",E: "",F: "",G: "",H: "",I: "",J: "",K: "",L: "",M: "",N: "",
        });
      };
    const dataFinal = [...tabla];
    setTimeout(() => {
      creandoArchivo(dataFinal);
    }, 1000);
  };

  const creandoArchivo = (dataFinal: any) => {
    const book = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(dataFinal, { skipHeader: true });
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
}