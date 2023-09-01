import * as Yup from "yup";
const registerUserMessage = Yup.object().shape({
    username: Yup.string().required("The name is required").min(5, "The name must be at least 5 characters long"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    contact: Yup.string().required("This field is required"),
    type: Yup.string().required("User type is required"),
});
export default registerUserMessage;
