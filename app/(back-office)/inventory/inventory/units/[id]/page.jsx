import { getData } from '@/lib/apiRequest'
import NewUnit from '../new/page'

const UpdateUnit = async({params: {id}}) => {
    const data = await getData(`/api/units/${id}`)
    
  return (
    <NewUnit initialData={data} isUpdated={true} />
  )
}

export default UpdateUnit