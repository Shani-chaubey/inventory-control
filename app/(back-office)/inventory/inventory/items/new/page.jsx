"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewItem = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      data.imageUrl = imageUrl
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        console.log(response)
        reset()
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const categoryOptions = [
    {
      label: 'Shoes',
      value: 's2135tewrthoes'
    },
    {
      label: 'Shirt',
      value: '324rshist34agrt'
    },
  ]
  const unitOptions = [
    {
      label: 'Kgs',
      value: 's2135wstewrthoes'
    },
    {
      label: 'Pcs',
      value: '324e32rshist34agrt'
    },
  ]
  const brandsOptions = [
    {
      label: 'adidas',
      value: 's2nywstewrthoes'
    },
    {
      label: 'Nike',
      value: '2154ershist34agrt'
    },
  ]
  const warehouseOptions = [
    {
      label: 'Noida warehouse',
      value: 's2nywwd23rthoes'
    },
    {
      label: 'Gurugram Warehouse',
      value: '2154ers23edfagrt'
    },
  ]

  return (
    <div>
      <FormHeader title='Create New Item' href='/inventory/inventory' />
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput label='Item Name' name='title' placeholder='Enter Item name' className='w-full' register={register} errors={errors} />

          <SelectInput label='Category Type' name='categoryId' placeholder='Please Choose a Item Category' className='w-full' options={categoryOptions} register={register} />

          <TextInput label='Item SKU' name='sku' placeholder='Item SKU' className='w-full' register={register} errors={errors} />

          <TextInput label='Item Barcode' name='barcode' placeholder='Item Barcode' className='w-full' register={register} errors={errors} />

          <TextInput label='Item Quantity' name='qty' placeholder='Item Quantity' className='w-full' register={register} errors={errors} />

          <SelectInput label='Item Unit' name='unitId' placeholder='Please Choose a Item Unit' className='w-full' options={unitOptions} register={register} />

          <SelectInput label='Brand Name' name='brandId' placeholder='Please Choose a Item Brand' className='w-full' options={brandsOptions} register={register} />

          <TextInput label='Re-Order Point' type='number' name='reOrderPoint' placeholder='Re-Order Point of the Item' className='w-full' register={register} errors={errors} />

          <TextInput label='Buying Price of the Item' type='number' name='buyingPrice' placeholder='Buying Price of the Item' className='w-full' register={register} errors={errors} />

          <TextInput label='Selling Price of the Item' type='number' name='sellingPrice' placeholder='Selling Price of the Item' className='w-full' register={register} errors={errors} />

          <SelectInput label='Warehouse' name='warehouse' placeholder='Please Choose a warehouse' className='w-full' options={warehouseOptions} register={register} />

          <TextInput label='Item Weight in Kgs' type='number' name='weight' placeholder='Item Weight in Kgs' className='w-full' register={register} errors={errors} />

          <TextInput label='Item Dimensions in cm' name='dimensions' placeholder='Item Dimensions in cm (eg: 20 x 40)' className='w-full' register={register} errors={errors} />

          <TextInput label='Item Tax in %' type='number' name='texRate' placeholder='Item Tax Rate' className='w-full' register={register} errors={errors} />

          <TextAreaInput label='Item Description' name='description' placeholder='Item Description' register={register} errors={errors} />

          <TextAreaInput label='Item Notes' name='notes' placeholder='Item Notes' register={register} errors={errors} />

          <ImageInput className='col-span-full' label='Item Image' imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='imageUploader' />

          <SubmitButton isLoading={loading} title='Item' />
        </div>
      </form>
    </div>
  )
}

export default NewItem