import FormHeader from '@/components/dashboard/FormHeader'
import CreateItemForm from '@/components/dashboard/CreateItemForm'
import { getData } from '@/lib/apiRequest'

const NewItem = async() => {
  
  const categoriesData = getData("/api/categories")
  const unitsData = getData("/api/units")
  const brandsData = getData("/api/brands")
  const warehousesData = getData("/api/warehouse")
  const suppliersData = getData("/api/suppliers")

  const [ categories, units, brands, warehouses, suppliers ] = await Promise.all([categoriesData, unitsData, brandsData, warehousesData, suppliersData ])

  return (
    <div>
      <FormHeader title='Create New Item' href='/inventory/inventory/items' />
      <CreateItemForm categories={categories} units={units} brands={brands} warehouses={warehouses} suppliers={suppliers} />
    </div>
  )
}

export default NewItem