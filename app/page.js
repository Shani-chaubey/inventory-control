"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import Login from "./login/page";
import { Navbar } from "@/components/dashboard/main/Navbar";
import Header from "@/components/dashboard/main/Header";


 
export default function Home() {
  const { data:session } = useSession()
  
  return (
    <>
    <Navbar />
    <Header />

    </>
  );
}
