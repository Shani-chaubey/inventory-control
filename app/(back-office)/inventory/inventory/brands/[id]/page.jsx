import React from 'react'
import NewBrand from '../new/page'
import { getData } from '@/lib/apiRequest'

const UpdateBrand = async({params: {id}}) => {
    const data = await getData(`/api/brands/${id}`)
    
  return (
    <NewBrand initialData={data} isUpdated={true} />
  )
}

export default UpdateBrand