import React from 'react'

const InventorySummarycard = ({ key, title, qty }) => {
    return (
        <div key={key} className='mb-4 shadow rounded-lg bg-white border border-slate-200 hover:border-blue-600 px-4 py-2 cursor-pointer
                                    flex items-center justify-between gap-3 transition-all duration-300'>
            <h2 className='uppercase text-slate-500 text-sm'>{title}</h2>
            <h4 className='text-2xl'>{qty}</h4>
        </div>
    )
}

export default InventorySummarycard