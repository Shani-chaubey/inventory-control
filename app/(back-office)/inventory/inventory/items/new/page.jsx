import FormHeader from '@/components/dashboard/FormHeader'
import CreateItemForm from '@/components/dashboard/CreateItemForm'
import { getData } from '@/lib/apiRequest'

const NewItem = async() => {
  
  const categories = (await getData("/api/categories")) || [] ;
  const units = []
  const brands = []
  const warehouses = []
  const suppliers = []

  return (
    <div>
      <FormHeader title='Create New Item' href='/inventory/inventory' />
      <CreateItemForm categories={categories} units={units} brands={brands} warehouses={warehouses} suppliers={suppliers} />
    </div>
  )
}

export default NewItem