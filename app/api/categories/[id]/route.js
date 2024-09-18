import db from "@/lib/db"
import { NextResponse } from "next/server"


export const PUT = async (request, { params: { id } }) => {
    try {
      const { title, description } = await request.json(); // Extract the updated field from request
      
      // Correct the structure of the update call
      const category = await db.category.update({
        where: {
          id, 
        },
        data: {
          title,
          description,
        },
      });
  
      return NextResponse.json({
        message: "Category updated successfully",
        success: true,
        category,
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
        const category = await db.category.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(category)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Category",
            success:false,
            error
        },{
            status:500
        })
    }  
}

export const DELETE = async(request,{params:{id}})=>{
  try {
    
      await db.Category.delete({
          where: {
              id
          },
      })
      return NextResponse.json({
          message: "Category Deleted successfully",
          success: true,
      })

  } catch (error) {
    console.log(error)
      return NextResponse.json({
          message: "Failed to Delete the Category",
          success:false,
          error
      },{
          status:500
      })
  }  
}
