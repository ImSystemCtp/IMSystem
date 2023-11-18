//import { QueryOptions } from "./app/types";

interface QueryParams {
    params: {
        limit?: number;
        offset?: number;
        orderBy?: string;
        order?: "asc" | "desc";
        filterBy?: string;
        filterValue?: string;
        filterCondition?:
        | "lt"
        | "lte"
        | "gt"
        | "gte"
        | "contains"
        | "startsWith"
        | "endsWith"
        | "equals"
        | "notEquals"
        | "in"
        | "notIn";
    }
}
interface registerToReport {
    reg_tomo: number
    reg_folio: number
    reg_asiento: number
    reg_type: string
    reg_date: string
    reg_observation: string
    invoice_date: string | null;
    assets_no: string;
    assets_description: string;
    assets_brand: string;
    assets_model: string;
    assets_series: string;
    assets_state: $Enums.EnumAssetsState;
    assets_acquisition_value: string;
    assets_invoice_number: string | null;
    location_name: string;
    law_name: string;
    usu_name: string;

}
interface requestToReport {
    usu_name: string;
    req_id: number;
    req_description:string;
    req_state:string;
    req_date:string;
    req_type:string;
    req_usu_id:string;
    req_location_id_new:string;
    deta_id:string;
    deta_description:string;
    deta_req_id:string;
    deta_assets_no:string;
    assets_regis_location: number;
    invoice_date: string;
    assets_no: string;
    assets_description: string;
    assets_brand: string;
    assets_model: string;
    assets_series: string;
    assets_state: $Enums.EnumAssetsState;
    assets_acquisition_value: string;
    assets_curr_location:string;
    assets_invoice_number: string;
    assent_law_id: number;
}