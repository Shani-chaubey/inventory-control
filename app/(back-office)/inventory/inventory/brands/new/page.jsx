"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewBrand = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const [loading, setLoading] = useState(false)

  const onSubmit = async(data) => {
    makePostRequest( setLoading, '/api/brands', data, 'Brand', reset )
  }

  return (
    <div>
      <FormHeader title='Create New Brand' href='/inventory/inventory/brands' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Brand Name' name='title' placeholder='Enter Brand name' register={register} errors={errors} />
          
          <SubmitButton isLoading={loading} title='Brand' />
        </div>
      </form>
    </div>
  )
}

export default NewBrand