import React from 'react'
import SalesActivityCard from './SalesActivityCard'
import InventorySummarycard from './InventorySummarycard'


const SalesOverview = () => {

    const salesActivity = [
        {
            qty: 51,
            status: 'To be Packed',
            unit: 'Qty',
            color: 'text-blue-600',
            href: '/'
        },
        {
            qty: 43,
            status: 'To be Shipped',
            unit: 'Pkgs',
            color: 'text-orange-600',
            href: '/'
        },
        {
            qty: 52,
            status: 'To be Delivered',
            unit: 'Pkgs',
            color: 'text-green-600',
            href: '/'
        },
        {
            qty: 97,
            status: 'To be Invoiced',
            unit: 'Qty',
            color: 'text-yellow-600',
            href: '/'
        }
    ]

    const inventorySummary = [
        {
            title: 'Quantity in Hand',
            qty: 1164
        },
        {
            title: 'Quantity to be Received',
            qty: 516
        }
    ]

    return (
        <div className='grid grid-cols-12 gap-4 border-b bg-blue-50 border-slate-300 text'>

            {/* Sales Activity  */}
            <div className='p-8 border-r lg:col-span-8 col-span-full border-slate-300'>
                <h2 className='mb-6 text-xl'>Sales Activity</h2>
                <div className='grid grid-cols-1 gap-4 pr-8 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        salesActivity.map((item, index) => {
                            return (
                                <SalesActivityCard href={item.href} itemKey={index} color={item.color} qty={item.qty} status={item.status} unit={item.unit} />
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