import { History } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-100 h-10 flex items-center justify-between px-4'>
      <div className='flex'>
        <button>
          <History className='w-6 h-6' />
        </button>
        {/* Search  */}
      </div>
      <div className='flex'>
        {/*   */}
      </div>
    </div>
  )
}

export default Header