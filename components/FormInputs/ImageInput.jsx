import { ImageRemove } from '@/action/ImageRemove';
import { UploadDropzone } from '@/lib/uploadthing';
import { Pencil } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const ImageInput = ({ className, label, imageUrl, setImageUrl, endpoint }) => {
    const [ imageKey, setImageKey] = useState("")
    const removeImage = async()=>{
        const response = await ImageRemove(imageKey)
        if(response.success){
            setImageUrl("")
            setImageKey("")
        }
    }
    return (
        <div className={className}>
            <div className="flex items-center justify-between mb-4">
                <label
                    htmlFor="course-image"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    {label}
                </label>
                {imageUrl && (
                    <button
                        onClick={removeImage}
                        type="button"
                        className="flex px-4 py-2 space-x-2 rounded-md shadow bg-slate-900 text-slate-50"
                    >
                        <Pencil className="w-5 h-5" />
                        <span>Change Image</span>
                    </button>
                )}
            </div>
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={label}
                    width={1000}
                    height={667}
                    className="object-cover w-full h-64"
                />
            ) : (
                <UploadDropzone
                    endpoint={endpoint}
                    onClientUploadComplete={(res) => {
                        setImageUrl(res[0].appUrl);
                        setImageKey(res[0].key);
                        // Do something with the response
                    }}
                    onUploadError={(error) => {
                        // Do something with the error.
                        console.log(`ERROR! ${error.message}`);
                    }}
                />
            )}
        </div>
    )
}

export default ImageInput