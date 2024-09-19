import AdjustmentForm from '@/components/dashboard/AdjustmentForm'
import { getData } from '@/lib/apiRequest'

const NewAdjustment = async() => {

  const warehousesData = getData("/api/warehouse")
  const itemsData = getData("/api/items")
  const suppliersData = getData("/api/suppliers")
  const [ items, warehouses, suppliers ] = await Promise.all([itemsData, warehousesData, suppliersData ])

  return (
    <AdjustmentForm items={items} warehouses={warehouses} suppliers={suppliers} />
  )
}

export default NewAdjustment