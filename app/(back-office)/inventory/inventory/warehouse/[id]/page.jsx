import { getData } from '@/lib/apiRequest'
import NewWarehouse from '../new/page'

const UpdateWarehouse = async({params: {id}}) => {
    const data = await getData(`/api/warehouse/${id}`)
    
  return (
    <NewWarehouse initialData={data} isUpdated={true} />
  )
}

export default UpdateWarehouse