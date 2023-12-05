import { useLaw, useLocation } from "@/root/hooks";
import { useLawStore, useLocationStore } from "@/root/zustand";
import { CustomSelect} from "@/root/components";
import Link from "next/link";
import { initialValues } from "./RegisterAssets";
export default function CustomSelectAssets() {
    useLocation();
    useLaw();
    const { laws } = useLawStore((state) => ({ laws: state.laws }));
    const { locations } = useLocationStore();
    return (
        <div>
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
                        <p className="text-red">
                            No existen ubicaciones.
                        </p>
                    </div>
                    <div className="w-1/2 bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                        <Link href="/admin/locations-management">Agregar ubicaciones</Link>
                    </div>
                </div>
            )}
            {laws.length > 0 ? (
                <CustomSelect label="Ley que financió:" name="assent_law_id">
                    {!initialValues.assent_law_id ? <option value="">Seleccione una ley</option> : ""}
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
                        <p className="text-red">
                            No existen leyes.
                        </p>
                    </div>
                    <div className="w-1/2 bg-yellow-500 text-white text-center rounded-lg p-2 m-2">
                        <Link href="/admin/laws-management">Agregar ley</Link>
                    </div>
                </div>
            )}
        </div>
    )
}