import { ChevronDown, HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FixedHeader = ({ newLink }) => {
    return (
        <div className='flex justify-between items-center p-8 bg-white '>

            <button className='flex space-x-1 items-center'>
                <span className='text-2xl font-semibold'>All Items</span>
                <ChevronDown className='w-4 h-4' />
            </button>

            <div className='flex gap-4'>

                {/* New */}
                <div className=''>
                    <Link href={newLink} className='bg-blue-600 rounded-md flex items-center space-x-2 px-3 py-1 '>
                        <Plus className='text-slate-50 w-4 h-4 ' />
                        <span className='text-slate-50'>New</span>
                    </Link>
                </div>

                {/* Layout */}
                <div className='flex border border-gray-400 rounded-md overflow-hidden'>
                    <button className='border-r border-gray-700 bg-gray-300 p-2'><List className='w-4 h-4' /></button>
                    <button className='p-2'><LayoutGrid className='w-4 h-4' /></button>
                </div>

                {/* More */}
                <button className='bg-gray-100 p-2 rounded-md'><MoreHorizontal className='w-4 h-4' /></button>

                {/* Help */}
                <button className='bg-orange-600 p-2 rounded-md text-white'><HelpCircle className='w-4 h-4' /></button>

            </div>
        </div>
    )
}

export default FixedHeader