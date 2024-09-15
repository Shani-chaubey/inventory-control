import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { title } = await request.json()
        const brand = await db.brand.create({
            data: { title }
        })
        return NextResponse.json({
            message:"Brand created successfully",
            success:true,
            brand
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