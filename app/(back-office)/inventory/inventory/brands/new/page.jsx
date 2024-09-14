"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewBrand = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const [loading, setLoading] = useState(false)

  const onSubmit = async(data) => {
    try {
      setLoading(true)
      const response = await fetch('/api/brands',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if(response.ok){
        console.log(response)
        reset()
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div>
      <FormHeader title='Create New Brand' href='/inventory/inventory' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Brand Name' name='title' placeholder='Enter Brand name' register={register} errors={errors} />
          
          <SubmitButton isLoading={loading} title='Brand' />
        </div>
      </form>
    </div>
  )
}

export default NewBrand