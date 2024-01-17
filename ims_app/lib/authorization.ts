// import { USER_ROLES } from "@/app/api/interfaces/users";
// import prismadb from "@/lib";

import { USER_ROLES } from "@/app/api/enums/roles";
import prisma from "./prisma";

const hasMatchingRole = (roles: string, permissions: USER_ROLES[]) => {
    const rolesArray = roles.split(',');
    const algo = rolesArray.some(role => permissions.includes(role.trim() as USER_ROLES));
    return algo
}

export const checkAuthorization = async (
    email: string,
    permissions: USER_ROLES[]
): Promise<boolean> => {

    const userAuthorized = await prisma.ims_users.findFirst({
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