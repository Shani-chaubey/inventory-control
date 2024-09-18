"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useState } from 'react'
import { useForm } from 'react-hook-form' 
import toast from "react-hot-toast"
import { useRouter } from 'next/navigation'

const CreateItemForm = ({ categories, units, brands, warehouses, suppliers, initialData, isUpdated }) => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialData
  })

  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl)

  const redirect = ()=>{
    router.push('/inventory/inventory/items')
 }

  const onSubmit = async(data) => {
    if(imageUrl===""){
      toast.error("Please Upload an image of Item")
      return
    }
    data.imageUrl = imageUrl
    if(isUpdated){
      makePutRequest( setLoading, `/api/items/${initialData.id}`, data, 'Item', redirect )
    }else{
      makePostRequest( setLoading, '/api/items', data, 'Item', reset )
      setImageUrl("")
    }
  }

  return (
   
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Item Name' name='title' placeholder='Enter Item name' register={register} errors={errors} />

          <SelectInput label='Category Type' name='categoryId' placeholder='Please Choose a Item Category' className='w-full' options={categories} register={register} />

          <TextInput label='Item SKU' name='sku' placeholder='Item SKU' className='w-full' register={register} errors={errors} />

          <TextInput label='Item Barcode' name='barcode' placeholder='Item Barcode' className='w-full' register={register} errors={errors} />

          <TextInput label='Item Quantity' name='qty' placeholder='Item Quantity' className='w-full' register={register} errors={errors} />

          <SelectInput label='Item Unit' name='unitId' placeholder='Please Choose a Item Unit' className='w-full' options={units} register={register} />

          <SelectInput label='Brand Name' name='brandId' placeholder='Please Choose a Item Brand' className='w-full' options={brands} register={register} />

          <TextInput label='Re-Order Point' type='number' name='reOrderPoint' placeholder='Re-Order Point of the Item' className='w-full' register={register} errors={errors} />

          <TextInput label='Buying Price of the Item' type='number' name='buyingPrice' placeholder='Buying Price of the Item' className='w-full' register={register} errors={errors} />

          <TextInput label='Selling Price of the Item' type='number' name='sellingPrice' placeholder='Selling Price of the Item' className='w-full' register={register} errors={errors} />

          <SelectInput label='Select Warehouse' name='warehouseId' placeholder='Please Choose a warehouse' className='w-full' options={warehouses} register={register} />
          
          <SelectInput label='Select Supplier' name='supplierId' placeholder='Please Choose a Supplier' className='w-full' options={suppliers} register={register} />

          <TextInput label='Item Weight in Kgs' type='number' name='weight' placeholder='Item Weight in Kgs' className='w-full' register={register} errors={errors} />

          <TextInput label='Item Dimensions in cm' name='dimensions' placeholder='Item Dimensions in cm (eg: 20 x 40)' className='w-full' register={register} errors={errors} />

          <TextInput label='Item Tax in %' type='number' name='taxRate' placeholder='Item Tax Rate' className='w-full' register={register} errors={errors} />

          <TextAreaInput label='Item Description' name='description' placeholder='Item Description' register={register} errors={errors} />

          <TextAreaInput label='Item Notes' name='notes' placeholder='Item Notes' register={register} errors={errors} />

          <ImageInput className='col-span-full' label='Item Image' imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='imageUploader' />

          <SubmitButton isLoading={loading} title='Item' />
        </div>
      </form>
  )
}

export default CreateItemForm