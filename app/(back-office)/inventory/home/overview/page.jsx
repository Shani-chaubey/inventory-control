import DashboardBanner from '@/components/dashboard/DashboardBanner'
import SalesOverview from '@/components/dashboard/SalesOverview'
import CurrentStock from '@/components/dashboard/CurrentStock'
import React from 'react'


const Dashboard = () => {
  const columnsdHeadings = ["imageUrl","title","qty","brand.title","category.title","warehouse.title"]
  const columnsdHeadingsWarehouse = ["title","location","type","stockQty"]
  return (
    <div className=''>
        <DashboardBanner />
        <SalesOverview />
        <CurrentStock item="items" columns={columnsdHeadings} />
        <CurrentStock item="warehouse" columns={columnsdHeadingsWarehouse} />
    </div>
  )
}

export default Dashboard
