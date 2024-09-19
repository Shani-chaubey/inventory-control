import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Items = async() => {

  const items = await getData('/api/items')
  
  const columnsdHeadings = ["imageUrl","title","qty","brand.title","category.title"]

  return (
    <div>
      <FixedHeader title="All Items" newLink='/inventory/inventory/items/new' />

      <div className="px-12 py-8">
        <DataTable data={items} columns={columnsdHeadings} pathname="/items"/>
      </div>

    </div>
  ) 
}

export default Items