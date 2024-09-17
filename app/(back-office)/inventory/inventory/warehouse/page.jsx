import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Warehouses = async() => {

  const warehouses = await getData('/api/warehouse')

  const columnsdHeadings = ["title","location","type"]

  const data = warehouses.map((item)=>{
    return {
      title:  item.title,
      location: item.location,
      type: item.type
    }
  })
  
  return (
    <div>
      <FixedHeader title="All Warehouses" newLink='/inventory/inventory/warehouse/new' />

      <div className="px-12 py-8">
        <DataTable data={data} columns={columnsdHeadings} />
      </div>

    </div>
  ) 
}

export default Warehouses