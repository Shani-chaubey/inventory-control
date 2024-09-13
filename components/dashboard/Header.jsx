import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users2 } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-gray-100 h-10 flex items-center justify-between px-8 py-6 border-b border-slate-200 shadow-sm'>
      <div className='flex gap-3'>
        <button>
          <History className='w-6 h-6' />
        </button>
        <SearchInput />
      </div>
      <div className='flex items-center gap-3'>

        <div className='pr-2 border-r border-gray-300'>
          <button className='p-1 bg-blue-600 rounded-lg '><Plus className='text-slate-50 w-4 h-4 ' /></button>
        </div>
        {/* Triple Icon  */}
        <div className="flex border-r border-gray-300 space-x-2">
          <button className='p-1 hover:bg-slate-100 rounded-lg '><Users2 className='text-slate-900 w-4 h-4 ' /></button>
          <button className='p-1 hover:bg-slate-100 rounded-lg '><Bell className='text-slate-900 w-4 h-4 ' /></button>
          <button className='p-1 hover:bg-slate-100 rounded-lg '><Settings className='text-slate-900 w-4 h-4 ' /></button>
        </div>
        {/* User Icon  */}
        <div className="flex gap-3">
          <button className='flex items-center justify-center'>
            <span>Great</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          <button><Image src='/user.jpeg' width={96} height={96} alt='User Imag' className='rounded-full w-8 h-8 border border-slate-800' /></button>
          <button><LayoutGrid className='w-6 h-6 text-slate-900' /></button>
        </div>

      </div>
    </div>
  )
}

export default Header    