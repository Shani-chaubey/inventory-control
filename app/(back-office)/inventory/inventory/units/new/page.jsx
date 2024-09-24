"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewUnit = ({initialData = {}, isUpdated=false}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialData
  })

   const redirect = ()=>{
      router.push('/inventory/inventory/units')
   }

  const onSubmit = async(data) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    if(isUpdated){
      makePutRequest( setLoading, `${baseUrl}/api/units/${initialData.id}`, data, 'Unit', redirect )
    }else{
      makePostRequest( setLoading, `${baseUrl}/api/units`, data, 'Unit', reset )
    }
  }


  return (
    <div>
      <FormHeader title={`${isUpdated ? `Update Unit "${initialData.title}"` : "Create New Unit" } `} href='/inventory/inventory/units' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Unit Name' name='title' placeholder='Enter Unit name' className='w-full' register={register} errors={errors} />
          
          <TextInput label='Unit Abbreviation' name='abbreviation' placeholder='Enter Abbreviation' className='w-full' register={register} errors={errors} />

          <SubmitButton isLoading={loading} title='Unit' />
        </div>
      </form>
    </div>
  )
}

export default NewUnit