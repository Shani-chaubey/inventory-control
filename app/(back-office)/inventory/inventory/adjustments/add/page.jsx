import UpdateAddStockAdjustment from '@/components/dashboard/UpdateAddStockAdjustment'
import { getData } from '@/lib/apiRequest'

const UpdateAddAdjustment = async({initialData}) => {

  const warehousesData = getData("/api/warehouse")
  const itemsData = getData("/api/items")

  const [ items, warehouses ] = await Promise.all([itemsData, warehousesData ])

  return (
    <UpdateAddStockAdjustment items={items} warehouses={warehouses} initialData={initialData} />
  )
}

export default UpdateAddAdjustment