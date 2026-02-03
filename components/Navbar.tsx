"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. import usePathname
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 2. ดึงค่า path ปัจจุบัน (เช่น /projects)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path;

  const linkStyle = "text-xl hover:text-blue-800 hover:underline transition-colors";
  
  const activeLinkStyle = "text-blue-800 text-xl font-bold underline decoration-2 underline-offset-4";

  return (
      <nav className="fixed top-0 left-0 w-full z-[9999] shadow-sm border-b border-gray-200/50 backdrop-blur-md transition-all duration-300 bg-white/80 text-gray-900 dark:bg-slate-900/80 dark:text-white dark:border-gray-800">      
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl text-blue-700 font-bold dark:text-white hover:opacity-80 transition-opacity">
              Saksit Jittasopee
            </h1>
          </Link>

          <div className="hidden md:flex md:flex-row md:items-center md:space-x-8">
            <Link href="/certificate">
              <h1 className={isActive('/certificate') ? activeLinkStyle : linkStyle}>Certificate</h1>
            </Link>
            <Link href="/projects">
              <h1 className={isActive('/projects') ? activeLinkStyle : linkStyle}>Projects</h1>
            </Link>
            <Link href="/education">
              <h1 className={isActive('/education') ? activeLinkStyle : linkStyle}>Education</h1>
            </Link>
            <Link href="/contact">
              <h1 className={isActive('/contact') ? activeLinkStyle : linkStyle}>Contact</h1>
            </Link>
            <ThemeToggle/>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle/>
            <button onClick={toggleMenu} className="focus:outline-none cursor-pointer text-gray-700 dark:text-white">
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4 animate-in slide-in-from-top-5 border-t border-gray-100 dark:border-gray-800 pt-4">
            <Link href="/certificate" onClick={() => setIsOpen(false)}>
              <h1 className={isActive('/certificate') ? activeLinkStyle : linkStyle}>Certificate</h1>
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              <h1 className={isActive('/projects') ? activeLinkStyle : linkStyle}>Projects</h1>
            </Link>
            <Link href="/education" onClick={() => setIsOpen(false)}>
              <h1 className={isActive('/education') ? activeLinkStyle : linkStyle}>Education</h1>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <h1 className={isActive('/contact') ? activeLinkStyle : linkStyle}>Contact</h1>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}