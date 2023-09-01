import { SetStateAction, useState } from "react";
import UserList from "./UserList";

export default function EditUserPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event: { target: { value: SetStateAction<string> } }) => {
        setSearchTerm(event.target.value);
    };
    const initialUsers = [
        {
            usu_admin: "admin1",
            usu_name: "John",
            usu_surnames: "Doe",
            usu_email: "john.doe@example.com",
            usu_password: "password1",
            usu_state: "Active",
        },
        {
            usu_admin: "admin2",
            usu_name: "Jane",
            usu_surnames: "Smith",
            usu_email: "jane.smith@example.com",
            usu_password: "password2",
            usu_state: "Active",
        },
        {
            usu_admin: "admin3",
            usu_name: "Bob",
            usu_surnames: "Johnson",
            usu_email: "bob.johnson@example.com",
            usu_password: "password3",
            usu_state: "Inactive",
        },
        {
            usu_admin: "admin4",
            usu_name: "Alice",
            usu_surnames: "Brown",
            usu_email: "alice.brown@example.com",
            usu_password: "password4",
            usu_state: "Active",
        },
        {
            usu_admin: "admin5",
            usu_name: "Eva",
            usu_surnames: "Davis",
            usu_email: "eva.davis@example.com",
            usu_password: "password5",
            usu_state: "Inactive",
        },
    ];

    return (
        <div className=" flex flex-col items-center min-h-screen w-full h-[550px] md:w-2/3">
            <h1 className="text-center text-3xl font-bold mb-6 text-black mt-3">Users List</h1>
            <UserList users={initialUsers} />
        </div>
    );
}
