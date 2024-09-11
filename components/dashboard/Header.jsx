import { History, Plus } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <div className='bg-gray-100 h-10 flex items-center justify-between px-8 py-6'>
      <div className='flex gap-3'>
        <button>
          <History className='w-6 h-6' />
        </button>
        <SearchInput />
      </div>
      <div className='flex'>
        {/* Plus Icon  */}
        <div>
          <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" className="ms-3 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Plus className='' /></button>
          <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Tooltip on bottom
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        {/* Plus Icon  */}
        {/* Plus Icon  */}
      </div>
    </div>
  )
}

export default Header    