import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { referenceNumber, addStockQty, receivingWarehouseId, notes, itemId } = await request.json()
        const adjustments = await db.AddStockAdjustment.create({
            data: { referenceNumber, addStockQty: parseInt(addStockQty), receivingWarehouseId, notes, itemId }
        })
        return NextResponse.json(adjustments)

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
        const addStockAdjustment = await db.AddStockAdjustment.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include: {
                item:true,
                warehouse: true,
            }
        })
        return NextResponse.json(addStockAdjustment)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the addStockAdjustment",
            success:false,
            error
        },{
            status:500
        })
    }
}