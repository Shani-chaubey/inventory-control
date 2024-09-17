import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { title, categoryId, sku, barcode, qty, unitId, brandId, reOrderPoint,
             buyingPrice, sellingPrice, warehouseId, supplierId, weight, dimensions, taxRate, description, notes, imageUrl } = await request.json()
        const item = await db.Item.create({
            data: { title, 
                categoryId, 
                sku, 
                barcode, 
                qty: parseInt(qty), 
                unitId, 
                brandId, 
                reOrderPoint: parseInt(reOrderPoint),
                buyingPrice: parseFloat(buyingPrice),
                sellingPrice: parseFloat(sellingPrice),
                warehouseId, 
                supplierId, 
                weight: parseFloat(weight),
                dimensions, 
                taxRate: parseFloat(taxRate), 
                description, 
                notes, 
                imageUrl }
        })
        return NextResponse.json(item)

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
        const items = await db.Item.findMany({
            orderBy:{
                createdAt:"desc"
            },
            include:{
                category:true,
                unit:true,
                brand:true,
                warehouse:true,
                supplier:true
            }
        })
        return NextResponse.json(items)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Items",
            success:false,
            error
        },{
            status:500
        })
    }
}