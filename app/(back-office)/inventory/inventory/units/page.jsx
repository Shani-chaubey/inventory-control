import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Units = async() => {

  const units = await getData('/api/units')

  const columnsdHeadings = ["title","abbreviation"]

  const data = units.map((item)=>{
    return {
      title:  item.title,
      abbreviation: item.abbreviation,
    }
  })
  
  return (
    <div>
      <FixedHeader title="All Units" newLink='/inventory/inventory/units/new' />

      <div className="px-12 py-8">
        <DataTable data={data} columns={columnsdHeadings} />
      </div>

    </div>
  ) 
}

export default Units