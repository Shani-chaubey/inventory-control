import { getData } from '@/lib/apiRequest'
import NewSupplier from '../new/page'

const UpdateSupplier = async({params: {id}}) => {
    const data = await getData(`/api/suppliers/${id}`)
    
  return (
    <NewSupplier initialData={data} isUpdated={true} />
  )
}

export default UpdateSupplier