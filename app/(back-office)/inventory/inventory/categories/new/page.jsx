"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import TextInput from '@/components/FormInputs/TextInput'
import { useForm } from 'react-hook-form'

const NewCategories = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <FormHeader title='New Item' href='/inventory/inventory' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Category Name' name='categoryName' placeholder='Enter Category name' register={register} errors={errors} />
          <TextInput label='Category Description' name='description' placeholder='Enter Category Description'  register={register} errors={errors} />

        </div>
        <div className='mt-6 sm:col-span-1'>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
         rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        </div>
      </form>
    </div>
  )
}

export default NewCategories