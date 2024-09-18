import { getData } from '@/lib/apiRequest'
import NewCategory from '../new/page'

const UpdateCategory = async({params: {id}}) => {
    const data = await getData(`/api/categories/${id}`)
    
  return (
    <NewCategory initialData={data} isUpdated={true} />
  )
}

export default UpdateCategory