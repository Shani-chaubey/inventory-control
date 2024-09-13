import { X } from 'lucide-react'
import Link from 'next/link'

const FormHeader = ({href, title}) => {
    return (
        <div className='flex items-center justify-between bg-white py-4 px-8'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <Link href={href} className='hover:text-slate-950 text-blue-600 font-bold py-2 px-4 rounded'><X /></Link>
        </div>
    )
}

export default FormHeader