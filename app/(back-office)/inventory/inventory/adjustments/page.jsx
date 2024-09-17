import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Adjustments = async () => {

  const addAdjustmentsData = getData('/api/adjustments/add')
  const transferAdjustmentsData = getData('/api/adjustments/transfer')

  const [ addAdjustments, transferAdjustments ] = await Promise.all([ addAdjustmentsData, transferAdjustmentsData ])

  const columnsdHeadingsAddAdjustments = ["referenceNumber", "item", "transferStockQty", "receivingWarehouse"]

  const dataAddAdjustment = addAdjustments.map((adjust) => {
    return {
      referenceNumber: adjust.referenceNumber,
      item: adjust.item.title,
      transferStockQty: adjust.addStockQty,
      receivingWarehouse: adjust.warehouse.title
    }
  })


  const columnsdHeadingsTransferAdjustments = ["referenceNumber", "item", "transferStockQty", "givingWarehouse", "receivingWarehouse"]

  const dataTransferAdjustment = transferAdjustments.map((adjust) => {
    return {
      referenceNumber: adjust.referenceNumber,
      item: adjust.item.title,
      transferStockQty: adjust.transferStockQty,
      givingWarehouse: adjust.givingWarehouse.title,
      receivingWarehouse: adjust.receivingWarehouse.title
    }
  })

  return (
    <div>
      <FixedHeader title="All Adjustments" newLink='/inventory/inventory/adjustments/new' />

      <div className="px-12 py-8">
        <h2 className="py-4 text-xl font-semibold">Stock Increments Adjustments</h2>
        <DataTable data={dataAddAdjustment} columns={columnsdHeadingsAddAdjustments} />
      </div>

      <div className="px-12 py-8">
        <h2 className="py-4 text-xl font-semibold">Transfer Stocks Adjustments</h2>
        <DataTable data={dataTransferAdjustment} columns={columnsdHeadingsTransferAdjustments} />
      </div>

    </div>
  )
}

export default Adjustments