"use client"

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-sm border-b border-gray-200/50 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3">
        
        <div className="flex justify-between items-center">
          <Link href="/"><h1 className="text-2xl font-bold dark:text-white">Saksit Jittasopee</h1></Link>

          <div className="hidden md:flex md:flex-row md:items-center md:space-x-8">
            <Link href="/certificate"><h1 className="dark:text-white text-xl hover:text-blue-900 hover:underline">Certificate</h1></Link>
            <Link href="/projects"><h1 className="dark:text-white text-xl hover:text-blue-900 hover:underline">Projects</h1></Link>
            <Link href="/education"><h1 className="dark:text-white text-xl hover:text-blue-900 hover:underline">Education</h1></Link>
            <Link href="/contact"><h1 className="dark:text-white text-xl hover:text-blue-900 hover:underline">Contact</h1></Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle /> 
            <button onClick={toggleMenu} className="focus:outline-none cursor-pointer">
              {isOpen ? (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>) : (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>)}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4 animate-in slide-in-from-top-5">
            <Link href="/certificate" onClick={() => setIsOpen(false)}><h1 className="text-xl hover:text-blue-900 hover:underline">Certificate</h1></Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}><h1 className="text-xl hover:text-blue-900 hover:underline">Projects</h1></Link>
            <Link href="/education" onClick={() => setIsOpen(false)}><h1 className="text-xl hover:text-blue-900 hover:underline">Education</h1></Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}><h1 className="text-xl hover:text-blue-900 hover:underline">Contact</h1></Link>
          </div>
        )}
      </div>
    </nav>
  );
}