import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const { title, description } = await request.json()
        const category = { title, description }
        return NextResponse.json({
            message:"Category created successfully",
            success:true,
            category
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