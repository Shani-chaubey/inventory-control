import { X } from 'lucide-react'
import Link from 'next/link'

const FormHeader = ({title, href}) => {
    
    return (
        <div className='flex items-center justify-between px-8 py-4 bg-white'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <Link href={href} className='px-4 py-2 font-bold text-blue-600 rounded hover:text-slate-950'><X /></Link>
        </div>
    )
}

export default FormHeader