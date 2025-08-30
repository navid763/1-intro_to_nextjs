import { IfilterTypeParam } from "./filters/filters";

export interface Filters {
    id: number;
    type: string;
    field: IfilterTypeParam;
    label: string;
    items: string[];
    unitFa: string;
    unitSlug: string
}