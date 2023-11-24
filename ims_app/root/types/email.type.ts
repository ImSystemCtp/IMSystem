import {ims_request, ims_users } from "@prisma/client";

export type EmailType = {
    request: ims_request,
    user: ims_users,
}