"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewWarehouse = ({initialData = {}, isUpdated=false}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialData
  })

   const redirect = ()=>{
      router.push('/inventory/inventory/warehouse')
   }

  const onSubmit = async(data) => {
    if(isUpdated){
      makePutRequest( setLoading, `/api/warehouse/${initialData.id}`, data, 'Warehouse', redirect )
    }else{
      makePostRequest( setLoading, '/api/warehouse', data, 'Warehouse', reset )
    }
  }

  const options = [
    {
      title: 'Main Warehouse',
      id: 'main'
    },
    {
      title: 'Branch',
      id: 'branch'
    },
  ]

  return (
    <div>
      <FormHeader title={`${isUpdated ? `Update Warehouse "${initialData.title}"` : "Create New Warehouse" } `} href='/inventory/inventory/warehouse' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
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