import * as Yup from "yup";
const loginMessage = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
});
export default loginMessage;
