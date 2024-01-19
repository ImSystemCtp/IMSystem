import {ims_request, ims_users,ims_assets,ims_register,ims_details_asset } from "@prisma/client";
export type assetsReport ={
    register: ims_register,
    assets: ims_assets
    location: string | null,
    law: string | null,
}
export type EmailType = {
    request: ims_request,
    user: ims_users,
}
export type ParameterId = {
    params: { id: string };
};
export type registerAsset ={
    register: ims_register,
    assets: ims_assets[],
    plate_num?: number, 
}
export type registerTransfer ={
    register: ims_register,
    assets: ims_assets[],
    new_location: string
}
export type RequestType = {
    request: ims_request,
    detailsAssets: ims_details_asset[]
}
export type User = {
    usu_admin: string,
    usu_name: string,
    usu_surnames:string ,
    usu_email: string,
    usu_password: string,
    usu_state: string
}
export type RegisterAsset = {
    register: ims_register;
    assets: ims_assets[];
}
export type SearchAssets = {
    location: string
    asset: string
}