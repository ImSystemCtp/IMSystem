import * as Yup from "yup";
const UserEditMessage = Yup.object().shape({
    name: Yup.string().required("The name is required").min(2, "The name must be at least 2 characters long"),
    contact: Yup.string().required("This field is required"),
});
export default UserEditMessage;
