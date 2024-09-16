"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const TransferInventoryForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        makePostRequest( setLoading, '/api/adjustments/transfer', data, 'Stock Transferred', reset )
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

                <TextInput label='Reference Number' type='number' name='referenceNumber' placeholder='Reference Number' register={register} errors={errors} />

                <SelectInput label='Select the Item' name='itemId' placeholder='Select the Item which will be transferred' className='w-full' options={items} register={register} />
                <TextInput label='Enter Quantity of Stocks to Transfer' name='transferStockQty' placeholder='Enter Quantity of Stocks to Transfer' className='w-full' register={register} errors={errors} />
                <SelectInput label='The Warehouse that will give' name='givingWarehouseId' placeholder='Select The Warehouse that will give' className='w-full' options={branches} register={register} />
                <SelectInput label='Receiver Warehouse' name='receivingWarehouseId' placeholder='Select Receiver Warehouse' className='w-full' options={branches} register={register} />

                <TextAreaInput label='Adjustments Notes' name='notes' placeholder='Any Adjustments Notes' register={register} errors={errors} />

                <SubmitButton isLoading={loading} title='Adjustment' />
            </div>
        </form>

    )
}

export default TransferInventoryForm