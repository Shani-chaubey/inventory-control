import db from "@/lib/db"
import { NextResponse } from "next/server"


export const PUT = async (request, { params: { id } }) => {
    try {
      const { title, abbreviation } = await request.json(); // Extract the updated field from request
      
      // Correct the structure of the update call
      const unit = await db.unit.update({
        where: {
          id, // Specify the unit to update using its id
        },
        data: {
          title,
          abbreviation, 
        },
      });
  
      return NextResponse.json({
        message: "Unit updated successfully",
        success: true,
        unit,
      });
    } catch (error) {
      console.log(error)
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
        const unit = await db.Unit.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(unit)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Unit",
            success:false,
            error
        },{
            status:500
        })
    }  
}


export const DELETE = async(request,{params:{id}})=>{
  try {
    
      await db.Unit.delete({
          where: {
              id
          },
      })
      return NextResponse.json({
          message: "Unit Deleted successfully",
          success: true,
      })

  } catch (error) {
    console.log(error)
      return NextResponse.json({
          message: "Failed to Delete the Unit",
          success:false,
          error
      },{
          status:500
      })
  }  
}
