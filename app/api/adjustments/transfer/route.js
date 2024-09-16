import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { referenceNumber, transferStockQty, givingWarehouseId, receivingWarehouseId, notes, itemId } = await request.json()
        const adjustments = await db.TransferStockAdjustment.create({
            data:  { referenceNumber, transferStockQty: parseInt(transferStockQty), givingWarehouseId, receivingWarehouseId, notes, itemId }
        })
        return NextResponse.json({
            message:"Adjustment made successfully",
            success:true,
            adjustments
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