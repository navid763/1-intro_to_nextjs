import { FeaturesToShowObject } from "@/models/productFeatures";


export const featuresToshow: Record<number, FeaturesToShowObject[]> = {
    1: [
        { label: "camera", dataCategory: "camera", dataSpecLabel: "mainResolution" },
        { label: "memory", dataCategory: "memory", dataSpecLabel: "ram" },
        { label: "screenSize", dataCategory: "display", dataSpecLabel: "size" },
        { label: "battery", dataCategory: "battery", dataSpecLabel: "capacity" }
    ],
    2: [
        { label: "camera2", dataCategory: "camera", dataSpecLabel: "mainResolution" },
        { label: "memory2", dataCategory: "memory", dataSpecLabel: "ram" },
        { label: "screenSize2", dataCategory: "display", dataSpecLabel: "size" },
        { label: "battery2", dataCategory: "battery", dataSpecLabel: "capacity" }
    ],

};

export const cartegoriesWhoNeedfeaturs = [1, 2];

import { FeaturesMap } from "@/components/products/product-card/properties-icons-list";
// import { Specifications } from "@/models/product-props";
import { ProductProperties } from "@/models/product-props";
import { IProduct } from "@/models/product-props";



export function featuresExtractor(data: IProduct, categoryId: number): FeaturesMap | false {
    if (!cartegoriesWhoNeedfeaturs.includes(categoryId)) {
        return false
    }

    let features: FeaturesMap = {};
    if (featuresToshow) {
        for (let f of featuresToshow[categoryId]) {
            features[f.label] = [
                data.specifications[f.dataCategory as keyof ProductProperties].specs[f.dataSpecLabel].valueEn.toString(),
                data.specifications[f.dataCategory as keyof ProductProperties].specs[f.dataSpecLabel].labelFa
            ];
        }
    }

    return features;
}
