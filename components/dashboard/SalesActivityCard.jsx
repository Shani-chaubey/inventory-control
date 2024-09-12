import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const SalesActivityCard = ({href, key, color, qty, unit, status }) => {
    return (
        <Link href={href} key={key} className='shadow rounded-lg bg-white border border-slate-200 hover:border-blue-600 px-3 py-4 cursor-pointer
                                flex items-center flex-col gap-3 transition-all duration-300'>
            <h4 className={`font-semibold text-3xl ${color}`}>{qty}</h4>
            <small className='text-slate-500'>{unit}</small>
            <div className='flex items-center space-x-2 text-slate-500'>
                <CheckCircle2 className='w-4 h-4' />
                <span className='uppercase text-xs'>{status}</span>
            </div>
        </Link>
    )
}

export default SalesActivityCard