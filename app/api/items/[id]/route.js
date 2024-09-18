import db from "@/lib/db"
import { NextResponse } from "next/server"


export const PUT = async (request, { params: { id } }) => {
    try {
      const { title, categoryId, sku, barcode, qty, unitId, brandId, reOrderPoint,
        buyingPrice, sellingPrice, warehouseId, supplierId, weight, dimensions, taxRate, description, notes, imageUrl } = await request.json(); // Extract the updated field from request
      
      // Correct the structure of the update call
      const item = await db.item.update({
        where: {
          id, 
        },
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
      });
  
      return NextResponse.json({
        message: "Item updated successfully",
        success: true,
        item,
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
        const item = await db.item.findUnique({
            where: {
                id
            },
            include:{
                category:true,
                unit:true,
                brand:true,
                warehouse:true,
                supplier:true
            }
        })
        return NextResponse.json(item)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Item",
            success:false,
            error
        },{
            status:500
        })
    }  
}

export const DELETE = async(request,{params:{id}})=>{
  try {
   
      await db.item.delete({
          where: {
              id
          },
      })
      return NextResponse.json({
          message: "Item Deleted successfully",
          success: true,
      })

  } catch (error) {
    console.log(error)
      return NextResponse.json({
          message: "Failed to Delete the Item",
          success:false,
          error
      },{
          status:500
      })
  }  
}
