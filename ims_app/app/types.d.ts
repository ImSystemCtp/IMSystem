export interface QueryOptions {
    offset?: number;
    limit?: number;
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