"use client"
import { useState } from "react";
import SortItem from "./sort-item";
import SortingIcon from "@/components/icons/sorting";

interface ISortings {
    label: string
    value: string
}

interface ISortingListProps {
    sortings: ISortings[]
    totalItems: { entityType: "محصول" | "دیدگاه"; counts: number }
}


export default function SortingList({ sortings, totalItems }: ISortingListProps) {

    const [activeSort, setActiveSort] = useState<string>("");

    const clickHandler = (sortingValue: string) => {
        setActiveSort(sortingValue);
    }
    return (
        <>
            <div className="flex items-center w-[15%] mr-1"> <SortingIcon className="h-5 w-5 text-neutral-800" /> <span className="text-sm text-neutral-900 w-fit">مرتب سازی</span> </div>
            <div className="flex items-center justify-between w-[90%]">
                <div className="w-[80%] flex items-center justify-start gap-8 ">
                    {sortings.map(item => {
                        return <SortItem label={item.label} value={item.value} handler={clickHandler} active={item.value === activeSort} key={item.label} />
                    })}

                </div>
                <div className="text-xs text-neutral-400 ml-2">{totalItems.counts.toString()} {totalItems.entityType}</div>
            </div>
        </>
    )
}

export const productsSortings = [
    { label: "پرفروش‌ترین", value: "best-selling" },
    { label: "ارزانترین", value: "price-low" },
    { label: "گرانترین", value: "price-high" },
    { label: "جدیدترین", value: "newest" },
];

export const commentsSortings = [
    { label: "جدیدترین", value: "best-selling" },
    { label: "مفیدتررین", value: "price-low" },
    { label: "خریداران", value: "price-high" }
];