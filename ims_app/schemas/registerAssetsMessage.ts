import * as Yup from "yup";
const registerAssetsMessage  = Yup.object({
    number: Yup.string().email("Formato de número inválido").required("El número es obligatorio"),
    description: Yup.string().required("La descripción es obligatoria"),
    series: Yup.string().required("La serie es obligatoria"),
    brand: Yup.string().required("La marca es obligatoria"),
    model: Yup.string().required("El modelo es obligatorio"),
    invoice: Yup.string().required("La factura es obligatoria"),
    value: Yup.string().required("El valor es obligatorio"),
    location: Yup.string().required("La ubicación es obligatoria"),
    law: Yup.string().required("La ley es obligatoria"),
});

export default registerAssetsMessage ;
