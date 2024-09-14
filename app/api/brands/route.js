import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { title } = await request.json()
        const brand = { title }
        return NextResponse.json({
            message:"Brand created successfully",
            success:true,
            brand
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