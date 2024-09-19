import db from "@/lib/db"
import { NextResponse } from "next/server"


export const PUT = async (request, { params: { id } }) => {
    try {
      const { referenceNumber, transferStockQty, givingWarehouseId, receivingWarehouseId, notes, itemId } = await request.json(); // Extract the updated field from request
      // Correct the structure of the update call
      const transferStockAdjustment = await db.TransferStockAdjustment.update({
        where: {
          id, 
        },
        data: { referenceNumber, transferStockQty: parseInt(transferStockQty), givingWarehouseId, receivingWarehouseId, notes, itemId }
      });
  
      return NextResponse.json({
        message: "Transfer Stock Adjustment updated successfully",
        success: true,
        transferStockAdjustment,
      });
    } catch (error) {
      return NextResponse.json(
        {
          message: error.message,
          success: false,
        },
        {
          status: 500,
        }
      );
    }
  };


export const GET = async(request,{params:{id}})=>{
    try {
        const transferStockAdjustment = await db.transferStockAdjustment.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(transferStockAdjustment)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Transfer Stock Adjustments",
            success:false,
            error
        },{
            status:500
        })
    }  
}

export const DELETE = async(request,{params:{id}})=>{
  try {
    
      await db.transferStockAdjustment.delete({
          where: {
              id
          },
      })
      return NextResponse.json({
          message: "Transfer Stock Adjustment Deleted successfully",
          success: true,
      })

  } catch (error) {
    return NextResponse.json({
          message: "Failed to Delete the Transfer Stock Adjustment",
          success:false,
          error
      },{
          status:500
      })
  }  
}
