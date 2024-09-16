import db from "@/lib/db"
import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { name, phone, email, address, contactPerson, taxID, supplierCode, paymentTerms, notes } = await request.json()
        const supplier = await db.supplier.create({
            data: { name, phone, email, address, contactPerson, taxID, supplierCode, paymentTerms, notes }
        })
        return NextResponse.json({
            message:"Category created successfully",
            success:true,
            supplier
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
        const suppliers = await db.supplier.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return NextResponse.json({
            message:"All the Suppliers fetched successfully",
            success:true,
            suppliers
        })

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Suppliers",
            success:false,
            error
        },{
            status:500
        })
    }
}