import Link from 'next/link';
import React from 'react'

const OptionCard = ({ optionData }) => {

    const { title, tagLine, link, linkTitle, enabled, icon:Icon, key } = optionData;

    return (
        <div key={key} className='shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded-md'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <div className=''>
                <Icon strokeWidth='.5px' className='w-24 h-24 text-blue-500' />
            </div>
            <p className='line-clamp-1'>{tagLine}</p>
            {
                enabled ? (
                    <Link href={link} className='bg-blue-600 text-white inline-flex items-center rounded-md space-x-2 px-3 py-2'>{linkTitle}</Link>
                ) : (
                    <button className='bg-blue-600 text-white inline-flex items-center rounded-md space-x-2 px-3 py-2'>Enable</button>
                )
            }
        </div>
    )
}

export default OptionCard