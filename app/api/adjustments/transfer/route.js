import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { transferStockQty, givingWarehouseId, receivingWarehouseId, notes } = await request.json()
        const adjustments = { transferStockQty, givingWarehouseId, receivingWarehouseId, notes }
        console.log(adjustments)
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