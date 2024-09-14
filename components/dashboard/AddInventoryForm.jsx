"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddInventoryForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await fetch('/api/adjustments/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                console.log(response)
                reset()
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const branches = [
        {
            label: 'Branch 1',
            value: '843rufd890df9'
        },
        {
            label: 'Branch 2',
            value: 'hjads7y3uedui'
        },
    ]

    return (

        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto'>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                <TextInput label='Enter Quantity of Stocks to Add' name='addStockQty' placeholder='Enter Quantity of Stocks to Add' className='w-full' register={register} errors={errors} />

                <SelectInput label='Receiver Warehouse' name='receivingWarehouseId' placeholder='Select Receiver Warehouse' className='w-full' options={branches} register={register} />

                <TextAreaInput label='Inventory Notes' name='notes' placeholder='Any Inventory Notes' register={register} errors={errors} />

                <SubmitButton isLoading={loading} title='Inventory' />
            </div>
        </form>

    )
}

export default AddInventoryForm