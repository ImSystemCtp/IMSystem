import * as Yup from "yup";
const registerAssetsMessage  = Yup.object({
    assets_no: Yup.number().required("El número es obligatorio"),
    assets_description: Yup.string().required("La descripción es obligatoria"),
    assets_series: Yup.string().required("La serie es obligatoria"),
    assets_brand: Yup.string().required("La marca es obligatoria"),
    assets_model: Yup.string().required("El modelo es obligatorio"),
    assets_invoice_number: Yup.string().required("La factura es obligatoria"),
    assets_acquisition_mode:  Yup.number().required("El valor es obligatorio"),
    assets_regis_location:  Yup.number().required("La ubicación es obligatoria"),
    assent_law_id:  Yup.number().required("La ley es obligatoria"),
});

export default registerAssetsMessage ;
