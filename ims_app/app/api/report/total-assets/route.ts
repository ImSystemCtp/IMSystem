import { NextResponse } from "next/server";
import prismaDB from "@/lib/prisma/prismadb";

export async function GET(req: Request) {
    try {
        const registers = await prismaDB.$queryRaw<registerToReport[]>`
        SELECT r.* ,a.* ,l.location_name, la.law_name, u.usu_name,  re.responsible_name
        FROM ims_assets a
        JOIN ims_register_assets ra on a.assets_no = ra.assets_no
        JOin ims_register r on r.reg_id=ra.reg_id
        JOIN ims_locations l on l.location_id=a.assets_curr_location
        JOIN ims_laws la on la.law_id = a.assent_law_id
        JOIN ims_users u on u.usu_id = r.reg_usu_id
        JOIN ims_responsible re on re.responsible_id = a.assets_responsible_id
        ORDER by r.reg_tomo, r.reg_folio, r.reg_asiento`;
        const registrosUnicos = filterUniqueEntries(registers);

        return NextResponse.json(registrosUnicos);
    } catch (error) {
        return new NextResponse("Error interno del servidor", { status: 500 });
    }
}
function filterUniqueEntries(arr: registerToReport[]): registerToReport[] {
    const uniqueEntries = arr.reduce((unique: Map<string, registerToReport>, entry) => {
        const key = `${entry.reg_folio}-${entry.reg_tomo}-${entry.reg_asiento}`;
        if (!unique.has(key)) {
            unique.set(key, entry);
        }
        return unique;
    }, new Map<string, registerToReport>());

    return Array.from(uniqueEntries.values());
}


