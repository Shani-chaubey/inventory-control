import { getData } from '@/lib/apiRequest'
import UpdateTransferAdjustment from '../page'


const UpdateTransferAdjustmentPage = async({params: {id}}) => {
  
    const data = await getData(`/api/adjustments/transfer/${id}`)
    
  return (
    <UpdateTransferAdjustment initialData={data} />
  )
}

export default UpdateTransferAdjustmentPage