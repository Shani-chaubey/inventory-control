"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewCategories = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const [loading, setLoading] = useState(false)
  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div>
      <FormHeader title='New Item' href='/inventory/inventory' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Category Name' name='categoryName' placeholder='Enter Category name' register={register} errors={errors} />
          {/* <TextInput label='Category Description' name='description' placeholder='Enter Category Description'  register={register} errors={errors} /> */}
          

          <SubmitButton isLoading={loading} title='Categoy' />
        </div>
      </form>
    </div>
  )
}

export default NewCategories