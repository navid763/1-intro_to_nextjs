import { NextResponse } from "next/server";
import db from "../../../../db.json";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let data = [...db.warranties]; // created a copy of products to avoid mutating the original data

    const warrantyId = searchParams.get("id");
    if (warrantyId) {
        return NextResponse.json(data.find(c => String(c.id) === warrantyId)); // if user requests for a categry by product ID
    }


    return NextResponse.json(data)
}