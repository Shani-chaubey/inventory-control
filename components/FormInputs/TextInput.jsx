"use client"
import React from 'react'

const TextInput = ({ label, name, isRequired=true, register, errors, placeholder, type='text', className='sm:col-span-2' }) => {
    return (
        <div className={className}>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 leading-6">{label}</label>
            <div className='mt-2'>
                <input type={type} name={name} {...register(`${name}`, { required: {isRequired} })} id={name} className="rounded-md block w-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 " autoComplete='' placeholder={placeholder} />
                {errors.name && (
                    <span className='text-sm text-red-600'>** {label} is required **</span>
                )}
            </div>
        </div>
    )
}

export default TextInput