import * as Yup from "yup";
const lawMessage = Yup.object({
    law_name: Yup.string().required("Debe de registrar una ley"),
});
export default lawMessage;