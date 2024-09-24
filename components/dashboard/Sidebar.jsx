import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import SidebarDropdownLink from './SidebarDropdownLink'
import { inventoryLinks, salesLinks } from '@/JSON/sidebarLinks'


const Sidebar = ({ showSideBar, setShowSideBar, sidebarRef }) => {
  const closeSidebar = ()=>{
    setShowSideBar(false)
  }

  const inventoryLinksData = inventoryLinks;
  const salesLinksData = salesLinks;
  return (
    <div  ref={sidebarRef} className={`${showSideBar ? "fixed flex-col justify-between min-h-screen w-60 bg-slate-900 text-slate-50 z-50" : "fixed flex-col justify-between hidden min-h-screen w-60 bg-slate-900 text-slate-50 lg:flex z-50"}`}>
      <div className="flex flex-col">

        { /* Logo  */}
        <div className='flex items-center justify-between p-3 space-x-2 bg-slate-950'>
          <Link href='/' className='flex'>
            <ShoppingCart />
            <span className='text-xl font-bold'>Inventory</span>
          </Link>
          <button onClick={closeSidebar}><X className='w-6 h-6 text-white lg:hidden' /></button>
        </div>


        { /* Sidebar links  */}
        <nav className='flex flex-col gap-3 px-4 py-6'>
          <Link href='/inventory/home/overview' className='flex items-center p-2 space-x-2 bg-blue-600 rounded-lg text-slate-50'>
            <Home className='w-4 h-4' />
            <span>Home</span>
          </Link>

          { /* Inventory Menu  */}
          <SidebarDropdownLink icon={BaggageClaim} title='Inventory' links={inventoryLinksData} setShowSideBar={setShowSideBar} />

          { /* Sales Menu  */}
          <SidebarDropdownLink icon={ShoppingBag} title='Sales' links={salesLinksData} />

          <button className='flex items-center p-2 space-x-2'>
            <ShoppingBasket className='w-4 h-4' />
            <span>Purchases</span>
          </button>
          <Link href='/' className='flex items-center p-2 space-x-2'>
            <Cable className='w-4 h-4' />
            <span>Integrations</span>
          </Link>
          <Link href='/' className='flex items-center p-2 space-x-2'>
            <BarChart4 className='w-4 h-4' />
            <span>Reports</span>
          </Link>
          <Link href='/' className='flex items-center p-2 space-x-2'>
            <Files className='w-4 h-4' />
            <span>Documents</span>
          </Link>
        </nav>

        { /* SubscriptionCard  */}
        <SubscriptionCard />

      </div>

      { /* End  */}
      <div className="flex flex-col">
        <button className='flex items-center justify-center p-3 space-x-2 bg-slate-950'>
          <ChevronLeft />
        </button>
      </div>
    </div>
  )
}

export default Sidebar