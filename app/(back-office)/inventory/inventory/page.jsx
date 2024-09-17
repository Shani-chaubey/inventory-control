import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { ArrowRightLeft, Factory, LayoutGrid, LayoutPanelTop, Scale, Tag, Warehouse } from 'lucide-react'

const Inventory = () => {

  const itemCards = [
    {
      title: 'Items',
      tagLine: 'Create standalone items and services that you buy and sell  ',
      link: '/inventory/inventory/items/new',
      linkTitle: 'New Item',
      enabled: true,
      icon: LayoutGrid
    },
    {
      title: 'Categories',
      tagLine: 'Create multiple variants of the same item using Item Groups',
      link: '/inventory/inventory/categories/new',
      linkTitle: 'New Category',
      enabled: true,
      icon: LayoutPanelTop
    },
    {
      title: 'Brands',
      tagLine: 'Bundle different items together and sell them as kits',
      link: '/inventory/inventory/brands/new',
      linkTitle: 'New Brand',
      enabled: true,
      icon: Tag
    },
    {
      title: 'Units',
      tagLine: 'Tweak your item prices for specific contacts or transactions',
      link: '/inventory/inventory/units/new',
      linkTitle: 'New Unit',
      enabled: true,
      icon: Scale
    },
    {
      title: 'Warehouses',
      tagLine: 'Tweak your item prices for specific contacts or transactions',
      link: '/inventory/inventory/warehouse/new',
      linkTitle: 'New Warehouse',
      enabled: true,
      icon: Warehouse
    },
    {
      title: 'Suppliers',
      tagLine: 'Tweak your item prices for specific contacts or transactions',
      link: '/inventory/inventory/suppliers/new',
      linkTitle: 'New Supplier',
      enabled: true,
      icon: Factory
    },
    {
      title: 'Adjustments',
      tagLine: 'Transfer Stocks from Main warehouse',
      link: '/inventory/inventory/adjustments/new',
      linkTitle: 'New Adjustment',
      enabled: true,
      icon: ArrowRightLeft
    },
  ]

  return (
    <div>
      <FixedHeader title='All Items' newLink='/inventory/inventory/items/new' />
      <div className='grid grid-cols-1 gap-8 px-16 py-4 m-4 md:grid-cols-2 lg:grid-cols-3'>
        {
          itemCards.map((item, i)=>{
              return <OptionCard optionData={item} key={i} />
            })
        }
        
      </div>
    </div>
  )
}

export default Inventory