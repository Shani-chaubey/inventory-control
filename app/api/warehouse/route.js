import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { title, location, description, type } = await request.json()
        const warehouse = await db.warehouse.create({
            data: { title, location, description, type }
        })
        return NextResponse.json({
            message:"Warehouse created successfully",
            success:true,
            warehouse
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
        const warehouses = await db.warehouse.findMany({
            orderBy:{
                createdAt:"desc"
            },
        })
        return NextResponse.json(warehouses)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the warehouses",
            success:false,
            error
        },{
            status:500
        })
    }
}