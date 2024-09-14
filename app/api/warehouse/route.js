import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { title, location, description, type } = await request.json()
        const warehouse = { title, location, description, type }
        console.log(warehouse)
        return NextResponse.json({
            message:"Warehouse created successfully",
            success:true,
            warehouse
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