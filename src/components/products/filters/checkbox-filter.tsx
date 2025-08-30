"use client"
import { useState, useEffect } from "react";
import ArrowDownIcon from "@/components/icons/arrow-down";
import Checkboxes from "./checkboxes";
import { Filters } from "@/models/filters";
import { IfilterTypeParam } from "@/models/filters/filters";

interface CheckBoxFilterProps {
    filter: Filters
    filtersHandler: (colorSlugs: string[], filterTypeParam: IfilterTypeParam) => void;
}

export default function CheckBoxFilter({ filter, filtersHandler }: CheckBoxFilterProps) {
    const [accordionShow, setAccordionShow] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = () => {
        setAccordionShow(!accordionShow)
    };

    const onChangeHandler = (value: string) => {
        setSelected((prev) => {
            return prev.includes(value)
                ? prev.filter(i => i !== value)
                : [...prev, value]
        })
    };

    useEffect(() => {

        filtersHandler(selected, filter.field);

    }, [selected, filtersHandler])



    return (
        <div className="flex flex-col items-center w-[95%] min-h-10 h-fit border-b border-neutral-200 p-4 gap-2 mt-4">
            <div className="flex justify-between text-neutral-600 w-full px-4 hover:cursor-pointer" onClick={toggle}>
                <div className="flex gap-2 items-center"><span>{filter.label}</span>
                    {selected.length > 0 &&
                        <div className="h-1 w-1 bg-blue-600 rounded"></div>}
                </div> <ArrowDownIcon className={`h-5 w-5 text-neutral-700 transition-transform duration-300 ${accordionShow ? 'rotate-180' : ''}`} />
            </div>

            {selected.length > 0 && !accordionShow && // in order to show the selected items
                <div className="text-sm text-neutral-500 flex">
                    {selected.map((res) => {
                        return <span className="px-1" key={res}>{res}</span>
                    })}
                </div>
            }


            <div className={
                `flex flex-col items-start w-full divide-y divide-gray-200 overflow-auto transition-all duration-300 ease-in-out ${accordionShow ? " max-h-96 " : " max-h-0 "}`}>

                {filter.items.map((item, i) => {
                    return <Checkboxes
                        value={item}
                        label={filter.unitFa}
                        checked={selected.includes(item)}
                        Handler={onChangeHandler}
                        key={i}

                    />
                })}
            </div>


        </div>
    )
}