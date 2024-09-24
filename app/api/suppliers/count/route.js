import db from "@/lib/db"
import { NextResponse } from "next/server"


export const GET = async(request)=>{
    try {
        const suppliers = await db.supplier.count()
        return NextResponse.json(suppliers)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Number of suppliers",
            success:false,
            error
        },{
            status:500
        })
    }
}