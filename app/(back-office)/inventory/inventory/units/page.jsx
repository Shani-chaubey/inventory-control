import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Units = async() => {

  const units = await getData('/api/units')

  const columnsdHeadings = ["title","abbreviation"]

  
  return (
    <div>
      <FixedHeader title="All Units" newLink='/inventory/inventory/units/new' />

      <div className="px-12 py-8">
        <DataTable data={units} columns={columnsdHeadings} pathname="/units" />
      </div>

    </div>
  ) 
}

export default Units