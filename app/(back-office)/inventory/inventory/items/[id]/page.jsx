import { getData } from '@/lib/apiRequest'
import NewItem from '../new/page'

const UpdateItem = async({params: {id}}) => {
    const data = await getData(`/api/items/${id}`)
    
  return (
    <NewItem initialData={data} isUpdated={true} />
  )
}

export default UpdateItem