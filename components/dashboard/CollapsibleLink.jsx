import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CollapsibleLink = ({item, i, setShowSideBar}) => {
    return (
        <Link key={i} href={item.href} className='flex items-center justify-between py-2 pl-8 pr-4 transition-all duration-300 rounded-lg hover:bg-blue-600'
            onClick={()=> setShowSideBar(false)}>
            <span>{item.title}</span>
            <Link href={item.newItemHref}>
                <PlusCircle className='w-4 h-4' />
            </Link>
        </Link>
    )
}

export default CollapsibleLink