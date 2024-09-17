"use client"
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { useState, useEffect, useRef } from 'react'

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false)
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSideBar(false);
    }
  };

  useEffect(() => {
    if (showSideBar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSideBar]);

  return (
    <div className='flex'>
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} sidebarRef={sidebarRef} />
      <main className='w-full min-h-screen ml-0 lg:ml-60 bg-slate-50'>
        <Header setShowSideBar={setShowSideBar} />
        {children}
      </main>
    </div>
  )
}

export default Layout