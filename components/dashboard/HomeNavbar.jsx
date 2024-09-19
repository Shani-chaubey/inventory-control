"use client"
import { Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const HomeNavbar = () => {
    const pathname = usePathname()
    
    const navLinks = [
        {
            title: "Dashboard",
            href: "/inventory/home/overview"
        },
        {
            title: "Getting Started",
            href: "/inventory/home/getting-started"
        },
        {
            title: "Announcements",
            href: "/inventory/home/announcements"
        },
        {
            title: "Recent Updates",
            href: "/inventory/home/updates"
        },
    ]
    return (
        <div className='h-32 p-5 border-b header-bg bg-slate-50 border-slate-300 '>
            <div className='flex space-x-3'>
                <div className='flex items-center justify-center w-12 h-12 bg-white rounded-lg'>
                    <Users className='text-slate-400'/>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-slate-900'>Hello, Himanshu</p>
                    <span className='text-sm'>Demo Org</span>
                </div>
            </div>
            <nav className='sticky flex mt-6 space-x-4 overflow-x-auto text-nowrap'>
            {
                navLinks.map((link,i)=>{
                    return <Link key={i} href={link.href} className={`${pathname===link.href ? "py-1 border-b-2 border-blue-600" : "py-1"}`}>{link.title}</Link>
                })
            }
            </nav>
        </div>
    )
}

export default HomeNavbar