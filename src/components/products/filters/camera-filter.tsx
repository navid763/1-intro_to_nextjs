"use client"
import { useState } from "react";
import ArrowDownIcon from "@/components/icons/arrow-down";
import FiltersCheckbox from "./filters-checkbox";

export const cameraResoloutions = ["13", "25", "32", "50"];


export default function CameraFilter() {
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



    return (
        <div className="flex flex-col items-center w-[95%] p-4 border-b border-neutral-200 gap-2">
            <div className="flex justify-between text-neutral-600 w-full px-4 hover:cursor-pointer" onClick={toggle}>
                <div className="flex gap-2 items-center"><span>دوربین</span>{selected.length > 0 && <div className="h-1 w-1 bg-blue-600 rounded"></div>}</div> <ArrowDownIcon className="h-5 w-5 text-neutral-700" />
            </div>
            {selected.length > 0 && // in order to show the selected resoloutions
                <div className="text-sm text-neutral-500 flex">
                    {selected.map((res) => {
                        return <span className="px-1" key={res}>{res}</span>
                    })}
                </div>
            }

            {accordionShow &&
                <div className=" flex flex-col items-start w-full mt-2 divide-y divide-gray-200">
                    {cameraResoloutions.map((resoloution, i) => {
                        return <FiltersCheckbox
                            value={resoloution}
                            label={resoloution}
                            checked={selected.includes(resoloution)}
                            Handler={onChangeHandler}
                            key={i}

                        />
                    })}
                </div>

            }
        </div>
    )
}