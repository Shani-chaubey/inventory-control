import db from "@/lib/db"
import { NextResponse } from "next/server"


export const PUT = async (request, { params: { id } }) => {
    try {
      const { title } = await request.json(); // Extract the updated field from request
      
      // Correct the structure of the update call
      const brand = await db.brand.update({
        where: {
          id, // Specify the brand to update using its id
        },
        data: {
          title, // The updated title field (can add more fields as needed)
        },
      });
  
      return NextResponse.json({
        message: "Brand updated successfully",
        success: true,
        brand,
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
        const brand = await db.Brand.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(brand)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Brand",
            success:false,
            error
        },{
            status:500
        })
    }  
}

export const DELETE = async(request,{params:{id}})=>{
  try {
    
      await db.brand.delete({
          where: {
              id
          },
      })
      return NextResponse.json({
          message: "Brand Deleted successfully",
          success: true,
      })

  } catch (error) {
    
      return NextResponse.json({
          message: "Failed to Delete the Brand",
          success:false,
          error
      },{
          status:500
      })
  }  
}
