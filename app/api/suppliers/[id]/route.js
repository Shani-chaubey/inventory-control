import db from "@/lib/db"
import { NextResponse } from "next/server"


export const PUT = async (request, { params: { id } }) => {
    try {
      const { name, phone, email, address, contactPerson, taxID, supplierCode, paymentTerms, notes } = await request.json(); // Extract the updated field from request
      
      // Correct the structure of the update call
      const supplier = await db.Supplier.update({
        where: {
          id, 
        },
        data: { name, phone, email, address, contactPerson, taxID, supplierCode, paymentTerms, notes }
      });
  
      return NextResponse.json({
        message: "Supplier updated successfully",
        success: true,
        supplier,
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
        const supplier = await db.Supplier.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(supplier)

    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch the Supplier",
            success:false,
            error
        },{
            status:500
        })
    }  
}


export const DELETE = async(request,{params:{id}})=>{
  try {
    
      await db.Supplier.delete({
          where: {
              id
          },
      })
      return NextResponse.json({
          message: "Supplier Deleted successfully",
          success: true,
      })

  } catch (error) {
    console.log(error)
      return NextResponse.json({
          message: "Failed to Delete the Supplier",
          success:false,
          error
      },{
          status:500
      })
  }  
}