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