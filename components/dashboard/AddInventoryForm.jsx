"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddInventoryForm = ({items, warehouses, suppliers}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        makePostRequest( setLoading, '/api/adjustments/add', data, 'Stock Adjustment', reset )
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                <TextInput label='Reference Number' type='number' name='referenceNumber' placeholder='Reference Number' className='w-full' register={register} errors={errors} />
                
                <SelectInput label='Select the Item' name='itemId' placeholder='Select the Item whic will be added' className='w-full' options={items} register={register} />
                
                <TextInput label='Enter Quantity of Stock to Add' type='text'  name='addStockQty' placeholder='Enter Quantity of Stock to Add' register={register} errors={errors} />
                
                <SelectInput label='Receiver Warehouse' name='receivingWarehouseId' placeholder='Select Receiver Warehouse' className='w-full' options={warehouses} register={register} />
                
                <SelectInput label='Supplier of the Item' name='supplierId' placeholder='Select Supplier of the Item' className='w-full' options={suppliers} register={register} />

                <TextAreaInput label='Inventory Notes' name='notes' placeholder='Any Inventory Notes' register={register} errors={errors} />

                <SubmitButton isLoading={loading} title='Inventory' />
            </div>
        </form>

    )
}

export default AddInventoryForm