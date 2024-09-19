import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async (request) => {
    try {
        const { referenceNumber, transferStockQty, givingWarehouseId, receivingWarehouseId, notes, itemId } = await request.json()
        
        
        const givingWarhouseData = await db.Warehouse.findUnique({
            where: {
                id: givingWarehouseId
            }
        })

        if(givingWarhouseData.stockQty < transferStockQty) {
            return NextResponse.json({
                message: `${givingWarhouseData.title} does not have enough quantity to transfer`,
                success: false,
            },{
                status: 409
            });
        }

        const adjustments = await db.TransferStockAdjustment.create({
            data: { referenceNumber, transferStockQty: parseInt(transferStockQty), givingWarehouseId, receivingWarehouseId, notes, itemId }
        })

        await db.Warehouse.update({
            where: { id: receivingWarehouseId },
            data: { stockQty: { increment: parseInt(transferStockQty) } }
        })

        await db.Warehouse.update({
            where: { id: givingWarehouseId },
            data: { stockQty: { decrement: parseInt(transferStockQty) } }
        })

        return NextResponse.json(adjustments)

    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false,
        }, {
            status: 500
        })
    }
}

export const GET = async (request) => {
    try {
        const transferStockAdjustment = await db.TransferStockAdjustment.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include: {
                item: true,
                givingWarehouse: true,
                receivingWarehouse: true,
            }
        })
        return NextResponse.json(transferStockAdjustment)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the transferStockAdjustment",
            success: false,
            error
        }, {
            status: 500
        })
    }
}