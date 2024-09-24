import db from "@/lib/db"
import { NextResponse } from "next/server"


export const GET = async(request)=>{
    try {
        const warehouses = await db.warehouse.count()
        return NextResponse.json(warehouses)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Number of warehouses",
            success:false,
            error
        },{
            status:500
        })
    }
}