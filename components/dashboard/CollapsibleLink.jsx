import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CollapsibleLink = ({item, key}) => {
    return (
        <Link key={key} href={item.href} className='flex items-center justify-between hover:bg-blue-600 pl-8 py-2 pr-4 transition-all duration-300 rounded-lg'>
            <span>{item.title}</span>
            <PlusCircle className='w-4 h-4' />
        </Link>
    )
}

export default CollapsibleLink