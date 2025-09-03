import { NextResponse } from "next/server";
import db from "../../../../db.json";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let data = [...db.comments]; // created a copy of products to avoid mutating the original data

    const commentsIds = searchParams.get("id");
    if (commentsIds) {
        const IdsArray = commentsIds.split(/[,\s]+/).map(i => i.trim()).filter(i => i.length > 0)
        return NextResponse.json(data.filter(c => IdsArray.includes(String(c.id))));
    }

    return NextResponse.json(data)
}