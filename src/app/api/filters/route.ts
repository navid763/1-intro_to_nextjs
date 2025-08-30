import { NextResponse } from "next/server";
import db from "../../../../db.json";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let data = [...db.filters]; // created a copy of products to avoid mutating the original data

    const idsQuery = searchParams.get("id");
    if (idsQuery) {
        const filterIds = idsQuery.toLocaleLowerCase().split(",");

        const filters = filterIds.length > 0 ? data.filter(f => filterIds.includes(String(f.id))) : [];

        return NextResponse.json(filters);
    }


    return NextResponse.json(data)
}