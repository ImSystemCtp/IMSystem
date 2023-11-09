import * as Yup from "yup";
const editUsersMessage = Yup.object({
    usu_name: Yup.string().required("El nombre es obligatorio"),
    usu_surnames: Yup.string().required("El apellido es obligatorio"),
    usu_email: Yup.string()
        .email("El email debe ser una dirección de correo electrónico válida")
        .required("El email es obligatorio"),
    usu_role: Yup.string().required("El role es obligatorio"),
});

export default editUsersMessage;