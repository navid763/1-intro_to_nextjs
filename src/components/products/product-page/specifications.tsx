"use client"

type FeatureValue = string | string[];
type FeatureObject = { [key: string]: [FeatureValue, string, string | number | string[] | number[] | boolean] }; // Added support for arrays and boolean

type ProductGroup = [FeatureObject[], string];

export type IProductProperty = {
    [categoryKey: string]: ProductGroup;
};


import ArrowLeftIcon from "@/components/icons/arrow-left";
import { useState, useRef } from "react";
import { globalSpecificationsRef } from "./global-refs";

interface IProps {
    specs: IProductProperty[];
}

export default function Specifications({ specs }: IProps) {
    const [showMore, setShowMore] = useState(false);

    const specsToRender = showMore
        ? specs
        : (() => {
            const firstCategoryKey = Object.keys(specs[0])[0];
            const [childs, categoryKeyTranslation] = specs[0][firstCategoryKey];

            const halfLength = Math.ceil(childs.length / 2);
            const halfChilds = childs.slice(0, halfLength);

            const limitedSpecs: IProductProperty[] = [
                {
                    [firstCategoryKey]: [halfChilds, categoryKeyTranslation],
                },
            ];

            return limitedSpecs;
        })();

    const specsRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            {
                specsToRender.map((obj, index) => {
                    const categoryKey = Object.keys(obj)[0];
                    const [childs, categoryKeyTranslation] = obj[categoryKey];
                    return (
                        <div className="w-full flex mt-7 mr-4" key={index} ref={index === 0 ? specsRef : null}>
                            <div className="flex items-start w-[15%] justify-start font-bold text-neutral-500" ref={index === 0 ? globalSpecificationsRef : null}>{categoryKeyTranslation}</div>
                            <div className="flex flex-col items-center w-[85%]">
                                {
                                    childs.map((c, idx) => {
                                        const k = Object.keys(c)[0];
                                        const [specValue, specTranslation, rawValue] = c[k]; // اضافه کردن rawValue
                                        let editedSpecValue = "";
                                        if (Array.isArray(specValue)) {
                                            editedSpecValue = specValue.join(" / ")
                                        } else {
                                            editedSpecValue = specValue
                                        }
                                        return (
                                            <div className="flex w-full" key={idx}>
                                                <div className="w-[20%] text-neutral-500 p-3">{specTranslation}</div>
                                                <div className="w-[80%] border-b border-neutral-100 p-3">{editedSpecValue}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            {!showMore && <p className="self-center">...</p>}
            {!showMore && <div className="flex gap-1 items-center self-center text-blue-500 mt-2 cursor-pointer" onClick={() => setShowMore(true)} ><span>مشاهده بیشتر</span> <ArrowLeftIcon className="w-4 h-4" /></div>}
            {showMore &&
                <div
                    className="flex gap-1 items-center self-center text-blue-500  mt-2 cursor-pointer"
                    onClick={() => {
                        setShowMore(false);
                        specsRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}>
                    <span> بستن</span> <ArrowLeftIcon className="w-4 h-4 transform rotate-90" />
                </div>}
        </>
    )
}