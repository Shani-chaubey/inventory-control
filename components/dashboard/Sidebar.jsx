import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import SidebarDropdownLink from './SidebarDropdownLink'


const Sidebar = () => {
  const inventoryLinks = [
    {
      title: 'Items',
      href: '/inventory/inventory/items/new'
    },
    {
      title: 'Categories',
      href: '/inventory/inventory/categories/new'
    },
    {
      title: 'Brands',
      href: '/inventory/inventory/brands/new'
    },
    {
      title: 'Units',
      href: '/inventory/inventory/units/new'
    },
    {
      title: 'Warehouses',
      href: '/inventory/inventory/warehouse/new'
    },
    {
      title: 'Inventory Adjustments',
      href: '/inventory/inventory/categories/new'
    }
  ]
  const salesLinks = [
    {
      title: 'Customers',
      href: '/'
    },
    {
      title: 'Sales Orders',
      href: '/'
    },
    {
      title: 'Packages',
      href: '/'
    },
    {
      title: 'Shipments',
      href: '/'
    },
    {
      title: 'Invoices',
      href: '/'
    },
    {
      title: 'Sales Receipts',
      href: '/'
    },
    {
      title: 'Payment received',
      href: '/'
    },
    {
      title: 'Sales returns',
      href: '/'
    },
    {
      title: 'Credit Notes',
      href: '/'
    },
  ]
  return (
    <div className='w-60 min-h-screen bg-slate-900 text-slate-50 fixed flex flex-col justify-between'>
      <div className="flex flex-col">

        { /* Logo  */}
        <Link href='/' className='flex space-x-2 items-center bg-slate-950 p-3'>
          <ShoppingCart />
          <span className='font-bold text-xl'>Inventory</span>
        </Link>

        { /* Sidebar links  */}
        <nav className='flex flex-col gap-3 px-4 py-6'>
          <Link href='/inventory/home/overview' className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-lg'>
            <Home className='w-4 h-4' />
            <span>Home</span>
          </Link>

          { /* Inventory Menu  */}
          <SidebarDropdownLink icon={BaggageClaim} title='Inventory' links={inventoryLinks} />

          { /* Sales Menu  */}
          <SidebarDropdownLink icon={ShoppingBag} title='Sales' links={salesLinks} />

          <button className='flex items-center space-x-2 p-2'>
            <ShoppingBasket className='w-4 h-4' />
            <span>Purchases</span>
          </button>
          <Link href='/' className='flex items-center space-x-2 p-2'>
            <Cable className='w-4 h-4' />
            <span>Integrations</span>
          </Link>
          <Link href='/' className='flex items-center space-x-2 p-2'>
            <BarChart4 className='w-4 h-4' />
            <span>Reports</span>
          </Link>
          <Link href='/' className='flex items-center space-x-2 p-2'>
            <Files className='w-4 h-4' />
            <span>Documents</span>
          </Link>
        </nav>

        { /* SubscriptionCard  */}
        <SubscriptionCard />

      </div>

      { /* End  */}
      <div className="flex flex-col">
        <button className='flex space-x-2 items-center bg-slate-950 p-3 justify-center'>
          <ChevronLeft />
        </button>
      </div>
    </div>
  )
}

export default Sidebar