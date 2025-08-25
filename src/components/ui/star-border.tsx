"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StarBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function StarBorder({ children, className, ...props }: StarBorderProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-lg border border-[#FF8C42]/30 bg-gradient-to-r from-[#FF8C42]/10 to-[#FFA726]/10" />
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#FF8C42] rounded-full animate-pulse" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF8C42] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#FF8C42] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FF8C42] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
