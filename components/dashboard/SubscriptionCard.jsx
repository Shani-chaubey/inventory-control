import Link from 'next/link'
import React from 'react'

const SubscriptionCard = () => {
  return (
    <div className='p-3'>
      <div className='p-3 rounded-lg bg-slate-800'>
        <div className='border-b border-slate-600 pb-3'>
          <p className="text-xs border-l-2 border-orange-500 pl-2">
            Your Premium Plan's trail  expires in{" "}
            <span className='text-sm text-orange-400'>13 days</span>.
          </p>
        </div>
        <div className='flex text-sm'>
          <button className='pr-2 border-r border-slate-600 p-1'>Change Plan</button>
          <Link href='' className='py-1 px-3'>Upgrade</Link>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionCard