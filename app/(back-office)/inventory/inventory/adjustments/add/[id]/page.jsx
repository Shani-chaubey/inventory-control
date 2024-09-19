import { getData } from '@/lib/apiRequest'
import UpdateAddAdjustment from '../page'


const UpdateAddAdjustmentPage = async({params: {id}}) => {
  
    const data = await getData(`/api/adjustments/add/${id}`)
    
  return (
    <UpdateAddAdjustment initialData={data} />
  )
}

export default UpdateAddAdjustmentPage