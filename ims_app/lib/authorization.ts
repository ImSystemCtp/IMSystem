// import { USER_ROLES } from "@/app/api/interfaces/users";
// import prismadb from "@/lib/prismadb";

import { USER_ROLES } from "@/app/api/enums/roles";
import { prismaDB } from "./prisma";

const hasMatchingRole = (roles: string, permissions: USER_ROLES[]) => {
    const rolesArray = roles.split(',');
    console.log(rolesArray)
    const algo = rolesArray.some(role => permissions.includes(role.trim() as USER_ROLES));
    console.log(algo)
    return algo
}

export const checkAuthorization = async (
    email: string,
    permissions: USER_ROLES[]
): Promise<boolean> => {

    const userAuthorized = await prismaDB.ims_users.findFirst({
        where: {
            usu_email: email
        }
    })

    if (!userAuthorized) {
        return false;
    }

    const isAuthorized = hasMatchingRole(userAuthorized.usu_role, permissions)


    return isAuthorized;
};