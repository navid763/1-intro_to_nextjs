import { IProduct } from "@/models/product-props";

export const queryFilter = (
    query: string | null, products: IProduct[], extractor: (p: IProduct) => string | number | boolean | string[]
): IProduct[] => {

    if (query) {
        const filterItems = query.toLocaleLowerCase().split(",");
        const filteredData = filterItems.length > 0
            ? products?.filter(d => {
                const value = String(extractor(d)).trim();
                return filterItems.includes(value)
            })
            : [];

        return filteredData;
    }

    return products // if query is not defiend or empty
};
