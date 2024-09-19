import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { referenceNumber, addStockQty, receivingWarehouseId, notes, itemId, supplierId } = await request.json()
        
        await db.item.update({
            where: { id: itemId },
            data: { qty: { increment: parseInt(addStockQty) } }
        })
        
        await db.Warehouse.update({
            where: { id: receivingWarehouseId },
            data: { stockQty: { increment: parseInt(addStockQty) } }
        })
         
        const adjustments = await db.AddStockAdjustment.create({
            data: { referenceNumber, addStockQty: parseInt(addStockQty), receivingWarehouseId, notes, itemId, supplierId }
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