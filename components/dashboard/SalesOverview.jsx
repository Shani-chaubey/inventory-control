
import SalesActivityCard from './SalesActivityCard'
import InventorySummarycard from './InventorySummarycard'
import { getData } from '@/lib/apiRequest'



const SalesOverview = async() => {
    const categoriesCount = getData('/api/categories')
    const itemsCount = getData('/api/items')
    const suppliersCount = getData('/api/suppliers')
    const warehousesCount = getData('/api/warehouse')
    const warehouses = getData('/api/warehouse')

    const [ categoryCount, itemCount, supplierCount, warehouseCount, warehouse ] = await Promise.all([ categoriesCount, itemsCount, suppliersCount, warehousesCount, warehouses ])
    
    const salesActivity = [
        {
            qty: categoryCount.length,
            status: 'Categories',
            color: 'text-blue-600',
            href: '/inventory/inventory/categories'
        },
        {
            qty: itemCount.length,
            status: 'Items',
            color: 'text-orange-600',
            href: '/inventory/inventory/items'
        },
        {
            qty: supplierCount.length,
            status: 'Suppliers',
            color: 'text-green-600',
            href: '/inventory/inventory/suppliers'
        },
        {
            qty: warehouse.length,
            status: 'Warehouses',
            color: 'text-yellow-600',
            href: '/inventory/inventory/warehouse'
        }
    ]
    
    const inventorySummary = warehouse.map((item,i)=>{
        return {
            title: item.title,
            qty: item.stockQty
        }
        })

    return (
        <div className='grid grid-cols-12 gap-4 border-b bg-blue-50 border-slate-300 text'>

            {/* Sales Activity  */}
            <div className='p-8 border-r lg:col-span-8 col-span-full border-slate-300'>
                <h2 className='mb-6 text-xl'>Sales Activity</h2>
                <div className='grid grid-cols-1 gap-4 pr-8 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        salesActivity.map((item, index) => {
                            return (
                                <SalesActivityCard href={item.href} itemKey={index} color={item.color} qty={item.qty} status={item.status}/>
                            )
                        })
                    }
                </div>
            </div>

            {/* Inventory Summary  */}
            <div className='p-8 col-span-full lg:col-span-4'>
                <h2 className='mb-6 text-xl'>Inventory Summary</h2>
                <div>
                    {
                        inventorySummary.map((item, index) => {
                            return (
                                <InventorySummarycard key={index} title={item.title} qty={item.qty} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default SalesOverview