"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const NewWarehouse = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const [loading, setLoading] = useState(false)

  const onSubmit = async(data) => {
    try {
      setLoading(true)
      const response = await fetch('/api/warehouse',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if(response.ok){
        toast.success('Warehouse created successfully')
        reset()
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      toast.error(error)
    }
  }

  const options = [
    {
      label: 'Main Warehouse',
      value: 'main'
    },
    {
      label: 'Branch',
      value: 'branch'
    },
  ]

  return (
    <div>
      <FormHeader title='Create New Warehouse' href='/inventory/inventory' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Warehouse Name' name='title' placeholder='Enter Warehouse name' className='w-full' register={register} errors={errors} />
          
          <TextInput label='Warehouse Location' name='location' placeholder='Enter Warehouse Location' isRequired={false} className='w-full' register={register} errors={errors} />

          <SelectInput label='Warehouse Type' name='type' placeholder='Please choose a warehouse type' options={options} register={register} />

          <TextAreaInput label='Warehouse Description' name='description' placeholder='Enter something about Warehouse'  isRequired={false} register={register} errors={errors} />

          <SubmitButton isLoading={loading} title='Warehouse' />
        </div>
      </form>
    </div>
  )
}

export default NewWarehouse