import { NextResponse } from "next/server";
import db from "../../../../db.json";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let data = [...db.comments]; // created a copy of products to avoid mutating the original data

    const commentsId = searchParams.get("id");
    if (commentsId) {
        return NextResponse.json(data.find(c => String(c.id) === commentsId));
    }


    return NextResponse.json(data)
}