import db from "@/lib/db"
import { NextResponse } from "next/server"


export const GET = async(request)=>{
    try {
        const categories = await db.category.count()
        return NextResponse.json(categories)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Number of categories",
            success:false,
            error
        },{
            status:500
        })
    }
}