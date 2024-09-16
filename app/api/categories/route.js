import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { title, description } = await request.json()
        const category = await db.category.create({
            data: { title, description }
        })
        return NextResponse.json({
            message:"Category created successfully",
            success:true,
            category
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
        const categories = await db.category.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json(categories)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the categories",
            success:false,
            error
        },{
            status:500
        })
    }
}