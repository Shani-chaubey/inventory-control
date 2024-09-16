"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddInventoryForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        makePostRequest( setLoading, '/api/adjustments/add', data, 'Stock Adjustment', reset )
    }

    const branches = [
        {
            label: 'Branch 1',
            value: '66e71f4217a048a7f489bc93'
        },
        {
            label: 'Branch 2',
            value: '66e7e664d65e17d8c66eeef6'
        },
    ]
    const items = [
        {
            label: 'Item 1',
            value: '66e7e664d65e17d8c66abef6'
        },
        {
            label: 'Item 2',
            value: '66e7e664d65e17d8c66abef6'
        },
    ]

    return (

        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                <TextInput label='Reference Number' type='number' name='referenceNumber' placeholder='Reference Number' className='w-full' register={register} errors={errors} />
                
                <SelectInput label='Select the Item' name='itemId' placeholder='Select the Item whic will be added' className='w-full' options={items} register={register} />
                
                <TextInput label='Enter Quantity of Stock to Add' type='text'  name='addStockQty' placeholder='Enter Quantity of Stock to Add' className='w-full' register={register} errors={errors} />
                
                <SelectInput label='Receiver Warehouse' name='receivingWarehouseId' placeholder='Select Receiver Warehouse' className='w-full' options={branches} register={register} />

                <TextAreaInput label='Inventory Notes' name='notes' placeholder='Any Inventory Notes' register={register} errors={errors} />

                <SubmitButton isLoading={loading} title='Inventory' />
            </div>
        </form>

    )
}

export default AddInventoryForm