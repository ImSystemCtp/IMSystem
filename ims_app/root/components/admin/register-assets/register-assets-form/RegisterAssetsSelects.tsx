import { AssetsFormValues, CustomSelect } from "@/root/components";
import { ims_laws, ims_locations, ims_responsible } from "@prisma/client";
import Link from "next/link";
import {  useLaw, useLocation, useResponsibles } from "@/root/hooks";
import { useLawStore, useLocationStore, useResponsibleStore } from "@/root/zustand";
interface RegisterAssetsSelectsProps { initialValues: AssetsFormValues; }
export default function RegisterAssetsSelects({ initialValues,}: RegisterAssetsSelectsProps) {
    useLocation();
    useLaw();
    useResponsibles();
    const { laws } = useLawStore((state) => ({ laws: state.laws }));
    const { locations } = useLocationStore((state) => ({ locations: state.locations }));
    const { responsibles } = useResponsibleStore((state) => ({ responsibles: state.responsibles }));
    return (
        <div>
            {responsibles.length > 0 ? (
                <CustomSelect label="Funcionario Responsable:" name="asset_responsible_id">
                    {!initialValues.asset_responsible_id ? <option value="">Seleccione un Funcionario Responsable</option> : ""}
                    {responsibles.map((responsible) => {
                        return (
                            <option key={responsible.responsible_id} value={responsible.responsible_id}>
                                {responsible.responsible_name}
                            </option>
                        );
                    })}
                </CustomSelect>
            ) : (
                <div className="flex flex-row">
                    <div className="flex items-center justify-center w-1/2">
                        <p className="text-red"> No existen Funcionarios Responsables. </p>
                    </div>
                    <div className="w-1/2 bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                        <Link href="/admin/responsibles-management">Agregar Funcionario Responsable</Link>
                    </div>
                </div>
            )}
            {locations.length > 0 ? (
                <CustomSelect label="Ubicación:" name="assets_regis_location">
                    {!initialValues.assets_regis_location ? (
                        <option value="">Seleccione una ubicación</option>
                    ) : (
                        ""
                    )}
                    {locations.map((location) => {
                        return (
                            <option key={location.location_id} value={location.location_id}>
                                {location.location_name}
                            </option>
                        );
                    })}
                </CustomSelect>
            ) : (
                <div className="flex flex-row">
                    <div className="flex items-center justify-center w-1/2">
                        <p className="text-red"> No existen ubicaciones. </p>
                    </div>
                    <div className="w-1/2 bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                        <Link href="/admin/locations-management">Agregar ubicaciones</Link>
                    </div>
                </div>
            )}
            {laws.length > 0 ? (
                <CustomSelect label="Ley que financió:" name="asset_law_id">
                    {!initialValues.asset_law_id ? <option value="">Seleccione una ley</option> : ""}
                    {laws.map((law) => {
                        return (
                            <option key={law.law_id} value={law.law_id}>
                                {law.law_description}
                            </option>
                        );
                    })}
                </CustomSelect>
            ) : (
                <div className="flex flex-row">
                    <div className="flex items-center justify-center w-1/2">
                        <p className="text-red"> No existen leyes. </p>
                    </div>
                    <div className="w-1/2 bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                        <Link href="/admin/laws-management">Agregar ley</Link>
                    </div>
                </div>
            )}
        </div>
    )
}