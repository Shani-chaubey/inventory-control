import UpdateTransferStockAdjustment from '@/components/dashboard/UpdateTransferStockAdjustments'
import { getData } from '@/lib/apiRequest'

const UpdateAddAdjustment = async({initialData}) => {

  const warehousesData = getData("/api/warehouse")
  const itemsData = getData("/api/items")
  console.log(initialData)
  const [ items, warehouses ] = await Promise.all([itemsData, warehousesData ])

  return (
    <UpdateTransferStockAdjustment items={items} warehouses={warehouses} initialData={initialData} />
  )
}

export default UpdateAddAdjustment