"use server"
import { utapi } from '@/server/uploadthing'

export const ImageRemove = async(imageKey)=>{
    try {
        await utapi.deleteFiles(imageKey)
        return { success: true }
    } catch (error) {
        return { success: false, message: error.message }
    }
}