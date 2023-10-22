import { UserOption } from "@/root/components";
export default function UserMain() {
    const optionsList = [
        {
            title: "Solicitudes de Bajas",
            icon: "home",
            link: "/user/request-lows",
        },
        {
            title: "Solicitudes de Traslados",
            icon: "home",
            link: "/user/solicitudes",
        }
    ]
    return (
        <div className="">
            <div className="flex-1">
                <div className=" m-4  p-4 justify-center items-center w-1/2 h-1/2 ">
                    <UserOption optionList={optionsList}/>
                </div>
            </div>
        </div >
    );
}
