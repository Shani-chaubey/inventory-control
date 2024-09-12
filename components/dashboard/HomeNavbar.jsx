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
        <div className='h-32 p-5 header-bg bg-slate-50 border-b border-slate-300 '>
            <div className='flex space-x-3'>
                <div className='flex w-12 h-12 rounded-lg bg-white items-center justify-center'>
                    <Users className='text-slate-400'/>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-slate-900'>Hello, Dear Himanshu</p>
                    <span className='text-sm'>Demo Org</span>
                </div>
            </div>
            <nav className='sticky mt-6 flex space-x-4'>
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