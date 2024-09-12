import DashboardBanner from '@/components/dashboard/Dashboardbanner'
import SalesOverview from '@/components/dashboard/SalesOverview'
import React from 'react'

const Dashboard = () => {
  return (
    <div className=''>
        <DashboardBanner />
        <SalesOverview />
    </div>
  )
}

export default Dashboard