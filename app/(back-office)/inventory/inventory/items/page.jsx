import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Items = async() => {

  const items = await getData('/api/items')

  const columnsdHeadings = ["title","brand", "category", "warehouse", "supplier"]

  const data = items.map((item)=>{
    return {
      title: item.title,
      brand: item.brand.title,
      category: item.category.title,
      warehouse: item.warehouse.title,
      supplier: item.supplier.name,
    }
  })
  
  return (
    <div>
      <FixedHeader title="All Items" newLink='/inventory/inventory/items/new' />

      <div className="px-12 py-8">
        <DataTable data={data} columns={columnsdHeadings} />
      </div>

    </div>
  ) 
}

export default Items