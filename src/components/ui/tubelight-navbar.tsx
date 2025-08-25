"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-4 sm:pt-4",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#404040] backdrop-blur-lg py-1.5 px-2 rounded-full shadow-lg hover:shadow-xl hover:border-[#FF8C42] transition-all duration-300 ease-out">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-300 ease-out",
                "text-[#E0E0E0] hover:text-[#FF8C42] hover:scale-105 hover:shadow-lg",
                "transform hover:-translate-y-1",
                isActive && "bg-[#FF8C42]/20 text-[#FF8C42]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-1 bg-[#FF8C42] rounded-t-full">
                    <div className="absolute w-10 h-4 bg-[#FF8C42]/20 rounded-full blur-md -top-1.5 -left-2 animate-pulse" />
                    <div className="absolute w-6 h-4 bg-[#FF8C42]/20 rounded-full blur-md -top-1 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="absolute w-3 h-3 bg-[#FF8C42]/20 rounded-full blur-sm top-0 left-1.5 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
