import * as Yup from "yup";
const transferAdminFormMessage = Yup.object().shape({
        newUbication: Yup.string().required("Este campo es obligatorio"),
        observation: Yup.string().required("Este campo es obligatorio"),
});
export default transferAdminFormMessage;