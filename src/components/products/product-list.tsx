"use client"

import ColorsFilter from "./filters/colors-filter";
import PriceFilter from "./filters/price-filter";
import AvailableProducts from "./filters/avilable-products";
import CheckBoxFilter from "./filters/checkbox-filter";
import SortingList, { productsSortings } from "./sorting/sorting-list";
import ProductCard from "./product-card/Product-Card";
import Link from "next/link";
import BreadCrumbs from "./bread-crumbs";
import { IProduct } from "@/models/product-props";
import "@/components/products/product-list.css";
import { useEffect, useState, useCallback } from "react";
import { Ifilters, IfilterTypeParam } from "@/models/filters/filters";
import { Category } from "@/models/categories";
import Loader from "../loader/loader";
import { Filters } from "@/models/filters";

interface PriceRange {
    min: number;
    max: number;
}

export default function ProductList({ categoryId }: { categoryId: string }) {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categoryName, setCategoryName] = useState("");
    const [sort, setSort] = useState("");
    const [filtersToCreate, setFiltersToCreate] = useState<Filters[]>([])
    const [filters, setFilters] = useState<Ifilters[]>([]);
    const [overallPriceBounds, setOverallPriceBounds] = useState<PriceRange | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    const handlePriceChange = useCallback((priceRange: PriceRange) => {
        if (!overallPriceBounds) return;

        setFilters(currentFilters => {
            // حذف فیلترهای قیمت قبلی
            const newFilters = currentFilters.filter(f =>
                f.filter !== "minPrice" && f.filter !== "maxPrice"
            );

            // اضافه کردن فیلترهای جدید قیمت فقط در صورتی که تغییر کرده باشند
            if (priceRange.min > overallPriceBounds.min) {
                newFilters.push({
                    filter: "minPrice",
                    value: String(priceRange.min)
                });
            }

            if (priceRange.max < overallPriceBounds.max) {
                newFilters.push({
                    filter: "maxPrice",
                    value: String(priceRange.max)
                });
            }

            return newFilters;
        });
    }, [overallPriceBounds]);

    useEffect(() => {
        let url = "/api/products";
        setIsLoading(true);

        //approach 1:
        // const sortSuffix = sort ? `sort=${sort}` : "";
        // const filtersSuffix = filters.length > 0
        //     ? filters.map(f => `${f.filter}=${f.value}`).join("&")
        //     : "";

        // url = url + "?" + sortSuffix + "&" + filtersSuffix;

        const params = new URLSearchParams();
        if (sort && sort.trim() !== "") {
            params.append("sort", sort);
        }
        filters.forEach(filter => {
            if (filter.value && filter.value.toString().trim() !== "") {
                params.append(filter.filter, filter.value.toString());
            }
        });
        // Only add query string if there are parameters
        if (params.toString()) {
            url += `?${params.toString()}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);

                if (!overallPriceBounds && data.length > 0) {
                    const prices = data.map((p: IProduct) => p.pricing.discountedPrice);
                    setOverallPriceBounds({
                        min: Math.min(...prices),
                        max: Math.max(...prices),
                    });
                }
            })
            .finally(() => setIsLoading(false)); // وقتی تموم شد چه موفق چه خطا


    }, [sort, filters, overallPriceBounds]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/categories?id=${categoryId}`, { cache: "no-store" })
            .then(res => res.json())
            .then((data: Category) => {
                setCategoryName(data.name);

                if (data.filterIds.length > 0) {
                    fetch(`http://localhost:3000/api/filters?id=${data.filterIds.join(",")}`, { cache: "no-store" })
                        .then(res => res.json())
                        .then((data: Filters[]) => setFiltersToCreate(data))

                }
            })

    }, [categoryId]);


    const filterHandler = useCallback((selectedItems: string[], filterTypeParam: IfilterTypeParam) => {

        setFilters(prev => {
            const filtersWithOutCurrentParam = prev.filter(f => f.filter !== filterTypeParam); //removes the current kind of filter, for example "camera" filter from the filters state
            if (selectedItems.length > 0) {
                const slugQuery = selectedItems.join(",").toLocaleLowerCase();
                const newFilter: Ifilters = { filter: filterTypeParam, value: slugQuery }
                return [...filtersWithOutCurrentParam, newFilter];
            }
            return filtersWithOutCurrentParam   // If no filters selected, just return filters without that kind of filter
        });

    }, [])


    return (
        <>
            <BreadCrumbs />
            <div className="title text-lg px-4 py-2 mr-4"><h1>{categoryName}</h1></div>

            <div className="content flex flex-row w-full p-4 mt-2">

                <div className="side-bar flex flex-col items-center w-[25%] max-h-[200vh] border-1 border-gray-200 rounded-lg p-2 ">
                    <div className="text-xl text-neutral-600 px-2 py-1">فیلترها</div>
                    <ColorsFilter filtersHandler={filterHandler} />

                    <div className="w-full">
                        <PriceFilter
                            // این دو prop بازه حرکتی اسلایدر را مشخص می‌کنند
                            minPrice={overallPriceBounds?.min ?? 0}
                            maxPrice={overallPriceBounds?.max ?? 10000000}
                            // این دو prop مقادیر اولیه اسلایدر را مشخص می‌کنند
                            initialMin={overallPriceBounds?.min ?? 0}
                            initialMax={overallPriceBounds?.max ?? 10000000}
                            onPriceChange={handlePriceChange}
                            step={100000}
                            currency="تومان"
                            className="w-full"
                        />
                    </div>
                    <AvailableProducts />

                    {filtersToCreate.length > 0 &&
                        filtersToCreate.map(filter => {
                            return <CheckBoxFilter
                                filtersHandler={filterHandler}
                                filter={filter}
                                key={filter.id}
                            />
                        })
                    }
                </div>


                <div className="product-list w-[75%] flex flex-col items-center rounded-md px-2">

                    <div className="flex w-full h-10 border-b border-gray-200 gap-0.5">
                        <SortingList sortings={productsSortings} totalItems={{ entityType: "محصول", counts: products.length }} sortHandler={setSort} />
                    </div>

                    {isLoading ? (
                        <div className="mt-[10vh]"><Loader /></div>
                    ) : products.length > 0 ? (
                        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full min-h-20 px-2">
                            {products.map((product) => (
                                <Link href={`/products/${product.slug}`} key={product.id}>
                                    <ProductCard product={product} />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="self-center text-xl text-neutral-600 mt-[10vh]">محصولی یافت نشد!</p>
                    )}
                </div>
            </div>
        </>
    )
}