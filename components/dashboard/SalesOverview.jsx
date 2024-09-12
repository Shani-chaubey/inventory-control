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
        <div className='bg-blue-50 border-b border-slate-300 grid grid-cols-12 text gap-4'>

            {/* Sales Activity  */}
            <div className='col-span-8 border-r border-slate-300 p-8'>
                <h2 className='mb-6 text-xl'>Sales Activity</h2>
                <div className='grid grid-cols-4 gap-4 pr-8'>
                    {
                        salesActivity.map((item, i) => {
                            return (
                                <SalesActivityCard href={item.href} key={i} color={item.color} qty={item.qty} status={item.status} unit={item.unit}/>
                            )
                        })
                    }
                </div>
            </div>

            {/* Inventory Summary  */}
            <div className='col-span-4 p-8'>
                <h2 className='mb-6 text-xl'>Inventory Summary</h2>
                <div>
                    {
                        inventorySummary.map((item, i) => {
                            return (
                                <InventorySummarycard key={i} title={item.title} qty={item.qty} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default SalesOverview