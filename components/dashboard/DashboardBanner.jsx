"use client"
import { CreditCard, X } from 'lucide-react'
import { useState } from 'react'

const DashboardBanner = () => {
    const [hidden, setHidden] = useState(false)
    return (
        <>
            {
                hidden ? (<></>) : (

                    <div className={`relative hidden lg:grid items-center grid-cols-12 gap-4 px-16 py-6 bg-white`}>
                        {/* Icon  */}
                        <div className='col-span-2'>
                            <CreditCard className='w-16 h-16 text-slate-500' />
                        </div>

                        {/* Text  */}
                        <div className='col-span-6 mr-6 '>
                            <h2 className='text-2xl font-semibold'>Start accepting online payments</h2>
                            <p>Now Accept Payments Even Without a Website. Generate Invoices
                                or Receive Partial Payments. Receive Payments With Just a Link.</p>
                        </div>

                        {/* Button  */}
                        <div className='items-center col-span-4'>
                            <button className='px-4 py-1 text-sm text-white uppercase bg-blue-500 rounded-lg'>Enable</button>
                        </div>

                        {/* Close Button  */}
                        <button className='absolute top-4 right-4' onClick={() => setHidden(true)}><X className='text-slate-600' /></button>

                    </div>
                )
            }

        </>
    )
}

export default DashboardBanner