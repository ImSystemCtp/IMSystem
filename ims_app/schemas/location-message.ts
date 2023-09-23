import * as Yup from "yup";
const locationMessage = Yup.object({
    location_name: Yup.string().required("Debe de registrar una ubicación"),
});
export default locationMessage;
