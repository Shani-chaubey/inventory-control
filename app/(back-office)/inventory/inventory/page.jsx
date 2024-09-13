import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, ReceiptIndianRupee, Shirt } from 'lucide-react'
import React from 'react'

const Inventory = () => {

  const itemCards = [
    {
      title: 'Items',
      tagLine: 'Create standalone items and services that you buy and sell  ',
      link: '/new',
      linkTitle: 'New Item',
      enabled: 'true',
      icon: Shirt
    },
    {
      title: 'Item groups',
      tagLine: 'Create multiple variants of the same item using Item Groups',
      link: '/',
      linkTitle: 'New Item Group',
      enabled: 'false',
      icon: Boxes
    },
    {
      title: 'Composite Items',
      tagLine: 'Bundle different items together and sell them as kits',
      link: '/',
      linkTitle: 'New Composite Item',
      enabled: 'false',
      icon: Component
    },
    {
      title: 'Price Lists',
      tagLine: 'Tweak your item prices for specific contacts or transactions',
      link: '/',
      linkTitle: 'New Price List',
      enabled: 'false',
      icon: ReceiptIndianRupee
    },
  ]

  return (
    <div>
      <FixedHeader newLink='/inventory/inventory/items/new' />
      <div className='grid grid-cols-1 lg:grid-cols-2 m-4 py-4 px-16 gap-8'>
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