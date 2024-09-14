import { NextResponse } from "next/server"


export const POST = async(request)=>{
    try {
        const data = await request.json()
        console.log(data)
        return NextResponse.json({
            message:"Item created successfully",
            success:true,
            data
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