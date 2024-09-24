import Image from 'next/image'
import React from 'react'
import mockup from '@/public/mockup.png'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Header = () => {
    const { data:session } = useSession()
    return (
        <div className='bg-gradient-to-b from-blue-700 to-blue-300 flex flex-col text-center py-8 md:py-16 px-4 md:px-16 text-slate-50 items-center gap-6'>
            <div className='flex flex-col items-center space-y-8 max-w-4xl mx-auto text-center'>
                <h1 className='text-wrap text-3xl font-bold md:text-5xl '>Inventory management software designed for Indian businesses</h1>
                <p className='text-base md:text-xl'>Manage orders. Track inventory. Handle GST billing. Oversee warehouses. One inventory management software to run all your inventory operations.</p>
                
                { session?.user ? (
                    <Link href='/inventory/home/overview' className='text-xl px-4 py-3 bg-red-500 text-slate-50 rounded-md'>Access Inventory</Link>
                ) : (
                    <Link href='/login' className='text-xl px-4 py-3 bg-red-500 text-slate-50 rounded-md'>Sign In</Link>
                ) }
            </div>
            <div>
                <Image src={mockup} alt='inventory App' />
            </div>
        </div>
    )
}

export default Header