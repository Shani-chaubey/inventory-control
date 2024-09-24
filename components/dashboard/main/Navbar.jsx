"use client";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { signOut, useSession } from "next-auth/react";
import Loader from "../Loader";
import { ShoppingCart } from "lucide-react";


export function Navbar() {
  const { data: session, status } = useSession();
  
  function getInitials(fullName) {
    // Split the full name into words
    const words = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0];
    }
    initials = initials.toUpperCase();

    return initials;
  }

  const initials = getInitials(session?.user?.name ?? "John Doe");

  return (
    <>
      <header className="sticky bg-blue-900 top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-16 text-slate-50 z-50">
          <Link href='/' className='flex'>
            <ShoppingCart />
            <span className='text-xl font-bold'>Inventory</span>
          </Link>

        
        {status === "authenticated" ? (
          <div className="items-center gap-4 flex">
            <div className=" hidden md:flex items-center space-x-4">
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {initials}
                </span>
              </div>

              <div className="font-medium dark:text-white">
                <div>{session.user.name}</div>
                <div className="text-sm text-slate-50 dark:text-slate-400">
                  {session.user.email}
                </div>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/login">Login</Link>
            
          </div>
        )}
      
      </header>
      
    </>
  );
}