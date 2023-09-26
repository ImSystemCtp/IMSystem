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