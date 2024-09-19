import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Adjustments = async () => {

  const addAdjustmentsData = getData('/api/adjustments/add')
  const transferAdjustmentsData = getData('/api/adjustments/transfer')

  const [ addAdjustments, transferAdjustments ] = await Promise.all([ addAdjustmentsData, transferAdjustmentsData ])
  
  const columnsdHeadingsAddAdjustments = ["referenceNumber", "item.title", "addStockQty", "warehouse.title"]

  const columnsdHeadingsTransferAdjustments = ["referenceNumber", "item.title", "transferStockQty", "givingWarehouse.title", "receivingWarehouse.title"]


  return (
    <div>
      <FixedHeader title="All Adjustments" newLink='/inventory/inventory/adjustments/new' />

      <div className="px-12 py-8">
        <h2 className="py-4 text-xl font-semibold">Stock Increments Adjustments</h2>
        <DataTable data={addAdjustments} columns={columnsdHeadingsAddAdjustments} pathname='adjustments/add'/>
      </div>

      <div className="px-12 py-8">
        <h2 className="py-4 text-xl font-semibold">Transfer Stocks Adjustments</h2>
        <DataTable data={transferAdjustments} columns={columnsdHeadingsTransferAdjustments} pathname='adjustments/transfer'/>
      </div>

    </div>
  )
}

export default Adjustments