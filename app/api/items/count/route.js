import db from "@/lib/db"
import { NextResponse } from "next/server"


export const GET = async(request)=>{
    try {
        const items = await db.item.count()
        return NextResponse.json(items)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Number of items",
            success:false,
            error
        },{
            status:500
        })
    }
}