import { NextResponse } from "next/server";
import db from "../../../../db.json";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let data = [...db.categories]; // created a copy of products to avoid mutating the original data

    const cateGoryId = searchParams.get("id");
    if (cateGoryId) {
        return NextResponse.json(data.find(c => String(c.id) === cateGoryId)); // if user requests for a categry by product ID
    }


    return NextResponse.json(data)
}