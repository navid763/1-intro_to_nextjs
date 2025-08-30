"use client"
import { useEffect, useState } from "react";
import ArrowDownIcon from "@/components/icons/arrow-down";
import ColorFilterOptions from "./color-filter-options";
import { IfilterTypeParam } from "@/models/filters/filters";

import { standardFilterColors, IstandardFilterColors } from "./standard-colors";

type ColorsFilterProps = {
    filtersHandler: (colorSlugs: string[], filterTypeParam: IfilterTypeParam) => void;

}

export default function ColorsFilter({ filtersHandler }: ColorsFilterProps) {
    const [accordionShow, setAccordionShow] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = () => {
        setAccordionShow(!accordionShow)
    };

    const onChangeHandler = (colorSlug: string) => {
        setSelected((prev) => {
            return prev.includes(colorSlug)
                ? prev.filter(i => i !== colorSlug)
                : [...prev, colorSlug]
        });
    };

    useEffect(() => {

        filtersHandler(selected, "color");

    }, [selected, filtersHandler]);


    return (
        <div className="flex flex-col items-center w-[95%] p-4 border-b border-neutral-200 gap-2">
            <div className="flex justify-between text-neutral-600 w-full px-4 hover:cursor-pointer" onClick={toggle}>
                <div className="flex gap-2 items-center"><span>رنگ</span>{selected.length > 0 && <div className="h-1 w-1 bg-blue-600 rounded"></div>}</div> <ArrowDownIcon className="h-5 w-5 text-neutral-700" />
            </div>

            {selected.length > 0 && // in order to show the selected color-names
                <div className="text-sm text-neutral-500 flex">
                    {selected.map((colorSlug) => {
                        return <span className="px-1" key={colorSlug}>{standardFilterColors.find((i: IstandardFilterColors) => i.slug == colorSlug)?.nameFa || ""}</span>
                    })}
                </div>
            }

            {accordionShow &&
                <div className=" w-full grid grid-cols-3 gap-1">
                    {standardFilterColors.map((item) => {
                        return <ColorFilterOptions colorHex={item.hex} colorTitle={item.nameFa} slug={item.slug} handler={onChangeHandler} selected={selected.includes(item.slug)} key={item.hex} />
                    })}
                </div>
            }
        </div>
    )
}