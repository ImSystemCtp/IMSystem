import * as Yup from "yup";
const lowsAdminFormMessage = Yup.object().shape({
        number: Yup.string().required("Este campo es obligatorio"),
        observation: Yup.string().required("Este campo es obligatorio"),
});
export default lowsAdminFormMessage;