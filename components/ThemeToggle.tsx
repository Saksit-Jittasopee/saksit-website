"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className="p-2 rounded-md cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <IoSunny size={20}/> : <FaMoon size={20}/> }
    </button>
  )
}