"use client"
import AdminOption from "../admin-options/AdminOptions";
export default function AdminMain() {
    interface MenuItem {
        text: string;
        link: string;
    }
    const menuItems: MenuItem[] = [
        { text: "Registrar Bienes", link: "/admin/register-goods" },
        { text: "Gestion de Usuarios", link: "/admin/users-management" },
        { text: "Gestion de Ubicaciones", link: "/admin/locations-management" },
        { text: "Gestion de Leyes", link: "/admin/register-laws" },
        { text: "Registrar Bajas", link: "/admin/register-lows" },
        { text: "Registrar Traslados", link: "/admin/register-laws" },
    ];
    return (
        <main className="relative flex">
            <AdminOption options={menuItems}></AdminOption>
        </main>
    )
}
