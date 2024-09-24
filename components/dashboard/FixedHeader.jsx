import { ChevronDown, HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FixedHeader = ({ title, newLink }) => {
    return (
        <div className='flex items-center justify-between p-8 bg-white '>

            <button className='flex items-center space-x-1'>
                <span className='text-2xl font-semibold'>{title}</span>
                
            </button>

            <div className='flex gap-4'>

                {/* New */}
                <div className=''>
                    <Link href={newLink} className='flex items-center px-3 py-1 space-x-2 bg-blue-600 rounded-md '>
                        <Plus className='w-4 h-4 text-slate-50 ' />
                        <span className='text-slate-50'>New</span>
                    </Link>
                </div>

                {/* Layout */}
                <div className='hidden overflow-hidden border border-gray-400 rounded-md sm:flex'>
                    <button className='p-2 bg-gray-300 border-r border-gray-700'><List className='w-4 h-4' /></button>
                    <button className='p-2'><LayoutGrid className='w-4 h-4' /></button>
                </div>

                {/* More */}
                <button className='hidden p-2 bg-gray-100 rounded-md sm:block'><MoreHorizontal className='w-4 h-4' /></button>

                {/* Help */}
                <button className='hidden p-2 text-white bg-orange-600 rounded-md sm:block'><HelpCircle className='w-4 h-4' /></button>

            </div>
        </div>
    )
}

export default FixedHeader