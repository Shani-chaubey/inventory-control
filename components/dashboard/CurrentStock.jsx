import FixedHeader from '@/components/dashboard/FixedHeader'
import DataTable from '@/components/dashboard/DataTable'
import { getData } from '@/lib/apiRequest'

const CurrentStock = async({item, columns}) => {

  const items = await getData(`/api/${item}`)
  
  

  return (
    <div>
      <button className='flex items-center space-x-1 py-2 px-8 mt-4'>
                <span className='text-2xl font-semibold'>Available {`${item}`}</span>
      </button>

      <div className="px-12 py-8">
        <DataTable data={items} columns={columns} pathname={`${item}`}/>
      </div>

    </div>
  ) 
}

export default CurrentStock