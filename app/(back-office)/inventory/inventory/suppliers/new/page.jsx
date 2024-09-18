"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewSupplier = ({initialData = {}, isUpdated=false}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialData
  })

   const redirect = ()=>{
      router.push('/inventory/inventory/suppliers')
   }

  const onSubmit = async(data) => {
    if(isUpdated){
      makePutRequest( setLoading, `/api/suppliers/${initialData.id}`, data, 'Supplier', redirect )
    }else{
      makePostRequest( setLoading, '/api/suppliers', data, 'Supplier', reset )
    }
  }


  return (
    <div>
      <FormHeader title={`${isUpdated ? `Update Supplier "${initialData.name}"` : "Create New Supplier" } `} href='/inventory/inventory/suppliers' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Supplier Name' name='name' placeholder='Enter Supplier name' className='w-full' register={register} errors={errors} />
          <TextInput label='Supplier Phone Number' name='phone' type='number' isRequired={false} className='w-full' placeholder='Enter Supplier Phone Number' register={register} errors={errors} />
          <TextInput label='Supplier Email' name='email' type='email' isRequired={false} className='w-full' placeholder='Enter Supplier Email' register={register} errors={errors} />
          <TextInput label='Supplier Address' name='address' isRequired={false} className='w-full' placeholder='Enter Supplier Address' register={register} errors={errors} />
          <TextInput label='Supplier Contact Person' name='contactPerson' isRequired={false} className='w-full' placeholder='Supplier Contact Person' register={register} errors={errors} />
          <TextInput label='Supplier TIN' name='taxID' isRequired={false} className='w-full' placeholder='Enter Supplier TIN' register={register} errors={errors} />
          <TextInput label='Supplier Code' name='supplierCode' placeholder='Enter Supplier Code' register={register} errors={errors} />
          
          <TextAreaInput label='Supplier Payment Terms' name='paymentTerms' isRequired={false} placeholder='Enter Supplier Payment Terms' register={register} errors={errors} />
          <TextAreaInput label='Any Other Notes' name='notes' isRequired={false} placeholder='Any other Notes' register={register} errors={errors} />

          <SubmitButton isLoading={loading} title='Supplier' />
        </div>
      </form>
    </div>
  )
}

export default NewSupplier