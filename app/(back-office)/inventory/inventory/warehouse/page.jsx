import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Warehouses = async() => {

  const warehouses = await getData('/api/warehouse')

  const columnsdHeadings = ["title","location","type","stockQty"]

 
  
  return (
    <div>
      <FixedHeader title="All Warehouses" newLink='/inventory/inventory/warehouse/new' />

      <div className="px-12 py-8">
        <DataTable data={warehouses} columns={columnsdHeadings} pathname="/warehouse" />
      </div>

    </div>
  ) 
}

export default Warehouses