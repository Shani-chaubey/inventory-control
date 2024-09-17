import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { title, abbreviation } = await request.json()
        const unit = await db.unit.create({ data: { title, abbreviation } })

        return NextResponse.json({
            message:"Unit created successfully",
            success:true,
            unit
        })

    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false,
        },{
            status:500
        })
    }
}

export const GET = async(request)=>{
    try {
        const units = await db.unit.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json(units)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the units",
            success:false,
            error
        },{
            status:500
        })
    }
}