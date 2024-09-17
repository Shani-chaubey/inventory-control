import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Brands = async() => {

  const brands = await getData('/api/brands')
  
  const columnsdHeadings = ["title"]

  const data = brands.map((item)=>{
    return {
      title: item.title,
    }
  })

  return (
    <div>
      <FixedHeader title="All Brands" newLink='/inventory/inventory/brands/new' />

      <div className="px-12 py-8">
        <DataTable data={data} columns={columnsdHeadings} />
      </div>

    </div>
  ) 
}

export default Brands