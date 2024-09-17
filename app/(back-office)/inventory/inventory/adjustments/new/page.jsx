import AdjustmentForm from '@/components/dashboard/AdjustmentForm'
import { getData } from '@/lib/apiRequest'

const NewAdjustment = async() => {

  const warehousesData = getData("/api/warehouse")
  const itemsData = getData("/api/items")

  const [ items, warehouses ] = await Promise.all([itemsData, warehousesData ])

  return (
    <AdjustmentForm items={items} warehouses={warehouses} />
  )
}

export default NewAdjustment