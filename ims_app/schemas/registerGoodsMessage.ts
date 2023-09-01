import * as Yup from "yup";
const registerGoodsMessage = Yup.object({
    number: Yup.string().email("Invalid number format").required("Number is required"),
    description: Yup.string().required("Description is required"),
    series: Yup.string().required("series is required"),
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
    invoice: Yup.string().required("Invoice is required"),
    value: Yup.string().required("Value is required"),
    location: Yup.string().required("Location is required"),
    law: Yup.string().required("Law is required"),
});
export default registerGoodsMessage;