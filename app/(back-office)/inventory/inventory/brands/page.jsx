import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Brands = async() => {

  const brands = await getData('/api/brands')
  
  const columnsdHeadings = ["title","createdAt","updatedAt"]


  return (
    <div>
      <FixedHeader title="All Brands" newLink='/inventory/inventory/brands/new' />

      <div className="px-12 py-8">
        <DataTable data={brands} columns={columnsdHeadings} pathname="/brands" />
      </div>

    </div>
  ) 
}

export default Brands