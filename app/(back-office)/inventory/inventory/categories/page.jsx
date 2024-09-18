import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Categories = async() => {

  const categories = await getData('/api/categories')

  const columnsdHeadings = ["title","description"]
  
  return (
    <div>
      <FixedHeader title="All Categories" newLink='/inventory/inventory/categories/new' />

      <div className="px-12 py-8">
        <DataTable data={categories} columns={columnsdHeadings} pathname="/categories" />
      </div>

    </div>
  ) 
}

export default Categories