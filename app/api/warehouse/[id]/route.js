import db from "@/lib/db"
import { NextResponse } from "next/server"


export const PUT = async (request, { params: { id } }) => {
    try {
      const { title, location, description, type } = await request.json(); // Extract the updated field from request
      
      // Correct the structure of the update call
      const warehouse = await db.warehouse.update({
        where: {
          id, 
        },
        data: { title, location, description, type }
      });
  
      return NextResponse.json({
        message: "Warehouse updated successfully",
        success: true,
        warehouse,
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
        const warehouse = await db.warehouse.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(warehouse)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Warehouse",
            success:false,
            error
        },{
            status:500
        })
    }  
}

export const DELETE = async(request,{params:{id}})=>{
  try {
    
      await db.warehouse.delete({
          where: {
              id
          },
      })
      return NextResponse.json({
          message: "Warehouse Deleted successfully",
          success: true,
      })

  } catch (error) {
    console.log(error)
      return NextResponse.json({
          message: "Failed to Delete the Warehouse",
          success:false,
          error
      },{
          status:500
      })
  }  
}