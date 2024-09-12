import { CreditCard, X } from 'lucide-react'
import React from 'react'

const DashboardBanner = () => {
    return (
        <div className='grid grid-cols-12 items-center py-6 px-16 bg-white gap-4 relative'>
            {/* Icon  */}
            <div className='col-span-2'>
                <CreditCard className='w-16 h-16 text-slate-500' />
            </div>

            {/* Text  */}
            <div className='col-span-6 mr-6 '>
                <h2 className='font-semibold text-2xl'>Start accepting online payments</h2>
                <p>Now Accept Payments Even Without a Website. Generate Invoices
                    or Receive Partial Payments. Receive Payments With Just a Link.</p>
            </div>

            {/* Button  */}
            <div className='col-span-4 items-center'>
                <button className='py-1 px-4 uppercase bg-blue-500 text-white rounded-lg'>Enable</button>
            </div>

            {/* Close Button  */}
            <button className='absolute top-4 right-4'><X /></button>

        </div>
    )
}

export default DashboardBanner