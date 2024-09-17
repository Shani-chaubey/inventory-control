import { AlignJustify, Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users2 } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'
import Image from 'next/image'

const Header = ({setShowSideBar}) => {
  const ShowSidebar = () => {
    setShowSideBar(true)
  }
  return (
    <div className='flex items-center justify-between h-10 px-8 py-6 bg-gray-100 border-b shadow-sm border-slate-200'>

      <button className="lg:hidden" onClick={ShowSidebar}><AlignJustify className='w-6 h-6'/></button>

      <div className='flex gap-3'>
        <button className='hidden lg:block'>
          <History className='w-6 h-6' />
        </button>
        <SearchInput />
      </div>

      <div className='items-center hidden gap-3 lg:flex'>
        <div className='pr-2 border-r border-gray-300'>
          <button className='p-1 bg-blue-600 rounded-lg '><Plus className='w-4 h-4 text-slate-50 ' /></button>
        </div>
        {/* Triple Icon  */}
        <div className="flex space-x-2 border-r border-gray-300">
          <button className='p-1 rounded-lg hover:bg-slate-100 '><Users2 className='w-4 h-4 text-slate-900 ' /></button>
          <button className='p-1 rounded-lg hover:bg-slate-100 '><Bell className='w-4 h-4 text-slate-900 ' /></button>
          <button className='p-1 rounded-lg hover:bg-slate-100 '><Settings className='w-4 h-4 text-slate-900 ' /></button>
        </div>
        {/* User Icon  */}
        <div className="flex gap-3">
          <button className='flex items-center justify-center'>
            <span>Great</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          <button><Image src='/user.jpeg' width={96} height={96} alt='User Imag' className='w-8 h-8 border rounded-full border-slate-800' /></button>
          <button><LayoutGrid className='w-6 h-6 text-slate-900' /></button>
        </div>
      </div>

      <button className='lg:hidden'><Image src='/user.jpeg' width={96} height={96} alt='User Imag' className='w-8 h-8 border rounded-full border-slate-800' /></button>
    </div>
  )
}

export default Header    