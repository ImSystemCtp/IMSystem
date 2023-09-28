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
    | "content"
    | "startsWith"
    | "endsWith"
    | "equals"
    | "notEquals"
    | "in"
    | "notIn"
    | "contains"
    | "notContains"
    | "like";
}