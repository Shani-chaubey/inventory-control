import db from "@/lib/db"
import { NextResponse } from "next/server"


export const PUT = async (request, { params: { id } }) => {
    try {
      const { referenceNumber, addStockQty, receivingWarehouseId, notes, itemId } = await request.json(); // Extract the updated field from request
      
      // Correct the structure of the update call
      const addStockAdjustment = await db.AddStockAdjustment.update({
        where: {
          id, 
        },
        data: { referenceNumber, addStockQty: parseInt(addStockQty), receivingWarehouseId, notes, itemId }
      });

     
      return NextResponse.json({
        message: "Add Stock Adjustment updated successfully",
        success: true,
        addStockAdjustment,
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
        const addStockAdjustment = await db.addStockAdjustment.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(addStockAdjustment)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Add Stock Adjustments",
            success:false,
            error
        },{
            status:500
        })
    }  
}

export const DELETE = async(request,{params:{id}})=>{
  try {
    
      await db.addStockAdjustment.delete({
          where: {
              id
          },
      })
      return NextResponse.json({
          message: "Add Stock Adjustment Deleted successfully",
          success: true,
      })

  } catch (error) {
    return NextResponse.json({
          message: "Failed to Delete the Add Stock Adjustment",
          success:false,
          error
      },{
          status:500
      })
  }  
}
