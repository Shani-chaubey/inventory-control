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

export const GET = async(request)=>{
    try {
        const brands = await db.brand.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json(brands)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Brands",
            success:false,
            error
        },{
            status:500
        })
    }
}