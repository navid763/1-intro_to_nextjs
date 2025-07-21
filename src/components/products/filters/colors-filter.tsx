"use client"
import { useState } from "react";
import ArrowDownIcon from "@/components/icons/arrow-down";
import ColorFilterOptions from "./color-filter-options";

export const filterColors = [
    { color: "#79d1c3", title: "آبی" },
    { color: "#61b390", title: "سبز" },
    { color: "#f76b8a", title: "قرمز" },
    { color: "#ffffff", title: "سفید" },
    { color: "#a7bcb9", title: "طوسی" }
];

export default function ColorsFilter() {
    const [accordionShow, setAccordionShow] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = () => {
        setAccordionShow(!accordionShow)
    };

    const onChangeHandler = (color: string) => {
        setSelected((prev) => {
            return prev.includes(color)
                ? prev.filter(i => i !== color)
                : [...prev, color]
        })
    };

    return (
        <div className="flex flex-col items-center w-[95%] p-4 border-b border-neutral-200 gap-2">
            <div className="flex justify-between text-neutral-600 w-full px-4 hover:cursor-pointer" onClick={toggle}>
                <div className="flex gap-2 items-center"><span>رنگ</span>{selected.length > 0 && <div className="h-1 w-1 bg-blue-600 rounded"></div>}</div> <ArrowDownIcon className="h-5 w-5 text-neutral-700" />
            </div>

            {selected.length > 0 && // in order to show the selected color-names
                <div className="text-sm text-neutral-500 flex">
                    {selected.map((colorCode) => {
                        return <span className="px-1" key={colorCode}>{filterColors.find(i => i.color == colorCode)?.title || ""}</span>
                    })}
                </div>
            }

            {accordionShow &&
                <div className=" w-full grid grid-cols-3 gap-1">
                    {filterColors.map((item) => {
                        return <ColorFilterOptions colorHex={item.color} colorTitle={item.title} handler={onChangeHandler} selected={selected.includes(item.color)} key={item.color} />
                    })}
                </div>
            }
        </div>
    )
}