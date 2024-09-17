import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const Suppliers = async() => {

  const suppliers = await getData('/api/suppliers')

  const columnsdHeadings = ["name","email","phone"]

  const data = suppliers.map((item)=>{
    return {
      name:  item.name,
      email: item.email,
      phone: item.phone,
    }
  })
  
  return (
    <div>
      <FixedHeader title="All Suppliers" newLink='/inventory/inventory/suppliers/new' />

      <div className="px-12 py-8">
        <DataTable data={data} columns={columnsdHeadings} />
      </div>

    </div>
  ) 
}

export default Suppliers