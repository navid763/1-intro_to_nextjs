import { NextResponse } from "next/server";

import { colorsNormalizer } from "@/components/products/filters/standard-colors";
import { queryFilter } from "./filters";
import { IProduct } from "@/models/product-props";
import db from "../../../../db.json";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    // let data = db.products;

    let data = [...db.products] as unknown as IProduct[];
    // created a copy of products to avoid mutating the original data
    // This tells TS: “trust me, treat it as IProduct[].


    const productId = searchParams.get("id");
    if (productId) {
        return NextResponse.json(data.find(p => String(p.id) === productId)); // if user requests for a product by product ID
    }

    const productSlug = searchParams.get("slug");
    if (productSlug) {
        return NextResponse.json(data.find(p => String(p.slug) === productSlug)); // if user requests for a product by product ID
    }


    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    // filter on price
    if (minPrice) {
        data = data.filter(p => p.pricing.discountedPrice >= Number(minPrice))
    }
    if (maxPrice) {
        data = data.filter(p => p.pricing.discountedPrice <= Number(maxPrice))
    }

    const sort = searchParams.get("sort");
    // price sorting
    if (sort && sort.trim() !== "") {
        // price sorting
        if (sort === "price_asc") {
            data = data.sort((a, b) => a.pricing.discountedPrice - b.pricing.discountedPrice)
        }
        if (sort === "price_desc") {
            data = data.sort((a, b) => b.pricing.discountedPrice - a.pricing.discountedPrice)
        }

    }


    const colorQuery = searchParams.get("color");

    if (colorQuery) {
        const colors = colorQuery.split(",").map(c => c.trim().toLocaleLowerCase());

        data = data.filter(p => {
            const normalizeColors = colorsNormalizer(p.colors); // adds a "slug" property to every color object of one product
            return normalizeColors.some(c => colors.includes(c.slug))
        })
    }

    const cameraQuery = searchParams.get("camera");
    data = queryFilter(cameraQuery, data, (d: IProduct) => d.specifications.camera?.specs?.mainResolution?.valueEn || "");

    const ramQuery = searchParams.get("ram");
    data = queryFilter(ramQuery, data, (d: IProduct) => d.specifications.memory?.specs?.ram?.valueEn || "");

    const storageQuery = searchParams.get("storage");
    data = queryFilter(storageQuery, data, (d: IProduct) => d.specifications.memory?.specs?.internal?.valueEn || "");



    return NextResponse.json(data)
}