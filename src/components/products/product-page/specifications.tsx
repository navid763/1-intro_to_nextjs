"use client"
type FeatureType = "text" | "number" | "array" | "boolean";

type Feature = {
    labelFa: string;
    labelEn: string;
    value: string | number | string[] | boolean;
    valueEn: string | number | string[] | boolean;
    slug: string;
    code: string | number | boolean;
    type: FeatureType;
};

type FeatureSpecs = {
    [featureKey: string]: Feature;
};

type FeatureCategory = {
    label: string;
    specs: FeatureSpecs;
};

export type ProductProperties = {
    [categoryKey: string]: FeatureCategory;
};
type SpecificationsProps = {
    specifics: ProductProperties
}

import ArrowLeftIcon from "@/components/icons/arrow-left";
import { useState, useRef } from "react";
import { globalSpecificationsRef } from "./global-refs";

export default function Specifications({ specifics }: SpecificationsProps) {
    const [showMore, setShowMore] = useState(false);

    const specificsToRender = showMore
        ? specifics
        : (() => {
            const firstCategoryKey = Object.keys(specifics)[0];
            const firstCategoryKeyLabel = specifics[firstCategoryKey].label
            const features = specifics[firstCategoryKey].specs
            const halfLength = Math.ceil(Object.keys(features).length / 2);
            const halfFeaturesList = Object.keys(features).slice(0, halfLength);
            let halfFeatures: any = {};
            for (let f of halfFeaturesList) {

                halfFeatures[f] = features[f];
            }

            return {
                [firstCategoryKey]: {
                    label: firstCategoryKeyLabel,
                    specs: halfFeatures
                }
            };

        })();


    const specsRef = useRef<HTMLDivElement | null>(null);


    return (
        <>
            {
                Object.keys(specificsToRender).map((category, index) => {
                    const categorylabel = specificsToRender[category].label
                    const features = specificsToRender[category].specs

                    return (
                        <div className="w-full flex mt-7 mr-4" key={index} ref={index === 0 ? specsRef : null}>
                            <div className="flex items-start w-[15%] justify-start font-bold text-neutral-500" ref={index === 0 ? globalSpecificationsRef : null}>{categorylabel}</div>
                            <div className="flex flex-col items-center w-[85%]">
                                {
                                    Object.keys(features).map((f, idx) => {
                                        const feature = features[f];

                                        const featureLabel = feature.labelFa;
                                        const featureValue = Array.isArray(feature.value) ? feature.value.join(" / ") : feature.value;

                                        return (
                                            <div className="flex w-full" key={idx}>
                                                <div className="w-[20%] text-neutral-500 p-3">{featureLabel}</div>
                                                <div className="w-[80%] border-b border-neutral-100 p-3">{featureValue}</div>
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