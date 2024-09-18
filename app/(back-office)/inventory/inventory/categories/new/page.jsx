"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewCategory = ({initialData = {}, isUpdated=false}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialData
  })

   const redirect = ()=>{
      router.push('/inventory/inventory/categories')
   }

  const onSubmit = async(data) => {
    if(isUpdated){
      makePutRequest( setLoading, `/api/categories/${initialData.id}`, data, 'Category', redirect )
    }else{
      makePostRequest( setLoading, '/api/categories', data, 'Category', reset )
    }
  }
  return (
    <div>
      <FormHeader title={`${isUpdated ? `Update Category "${initialData.title}"` : "Create New Category" } `} href='/inventory/inventory/categories' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Category Name' name='title' placeholder='Enter Category name' register={register} errors={errors} />
          
          <TextAreaInput label='Category Description' name='description' isRequired={false} placeholder='Enter something about Catgory' register={register} errors={errors} />

          <SubmitButton isLoading={loading} title='Category' />
        </div>
      </form>
    </div>
  )
}

export default NewCategory