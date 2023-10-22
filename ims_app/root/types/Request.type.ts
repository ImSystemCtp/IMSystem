import { ims_details_asset, ims_request } from "@prisma/client";

export type RequestType = {
    request: ims_request,
    detailsAssets: ims_details_asset[]
}