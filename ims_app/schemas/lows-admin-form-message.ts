import * as Yup from "yup";
const lowsAdminFormMessage = Yup.object().shape({
        observation: Yup.string().required("Este campo es obligatorio"),
});
export default lowsAdminFormMessage;