"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePutRequest } from '@/lib/apiRequest'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '@/components/dashboard/FormHeader'

const UpdateAddStockAdjustment = ({ items, warehouses, initialData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData
    })

    const [loading, setLoading] = useState(false)

    const redirect = () => {
        router.push('/inventory/inventory/adjustments')
    }

    const onSubmit = async (data) => {
        makePutRequest(setLoading, `/api/adjustments/add/${initialData.id}`, data, "Add Adjustment", redirect)
    }

    return (
        <>
            <FormHeader title={`Update Add Stock Adjustment :- ${initialData.referenceNumber}`} href='/inventory/inventory/adjustments' />
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                    <TextInput label='Reference Number' type='number' name='referenceNumber' placeholder='Reference Number' className='w-full' register={register} errors={errors} />

                    <SelectInput label='Select the Item' name='itemId' placeholder='Select the Item whic will be added' className='w-full' options={items} register={register} />

                    <TextInput label='Enter Quantity of Stock to Add' type='text' name='addStockQty' placeholder='Enter Quantity of Stock to Add' className='w-full' register={register} errors={errors} />

                    <SelectInput label='Receiver Warehouse' name='receivingWarehouseId' placeholder='Select Receiver Warehouse' className='w-full' options={warehouses} register={register} />

                    <TextAreaInput label='Inventory Notes' name='notes' placeholder='Any Inventory Notes' register={register} errors={errors} />

                    <SubmitButton isLoading={loading} title='Add Stock Adjustment ' />
                </div>
            </form>
        </>

    )
}

export default UpdateAddStockAdjustment