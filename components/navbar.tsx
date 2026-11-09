"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

function LoopMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-[1.1em] w-auto", className)}
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="#f97316"
        strokeWidth="4.5"
      />
      <circle
        cx="20"
        cy="12"
        r="8.5"
        stroke="#14b8a6"
        strokeWidth="4.5"
        className="mix-blend-screen"
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-0.5 text-xl font-extrabold tracking-tight",
        className
      )}
    >
      <span className="text-[#2f6bdb]">hire</span>
      <LoopMark />
      <span className="text-[#f59e0b]">op</span>
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6">
      <nav className="relative flex h-16 items-center justify-between rounded-2xl border border-white/5 bg-gradient-to-b from-neutral-800 to-neutral-950 px-4 shadow-lg shadow-black/20 sm:px-6">
        <Logo />

        {/* Center links (desktop) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/signin"
            className="text-sm text-[#a5b4fc] transition-colors hover:text-[#c7d2fe]"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="flex h-9 items-center justify-center rounded-lg bg-[#7c5cfc] px-4 text-sm font-medium text-white transition-colors hover:bg-[#6b4bfa]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-white hover:bg-white/10 hover:text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </Button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute inset-x-0 top-full z-50 mt-2 rounded-2xl border border-white/5 bg-gradient-to-b from-neutral-800 to-neutral-950 p-4 shadow-lg shadow-black/30 lg:hidden">
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-4">
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg px-3 py-2 text-sm text-[#a5b4fc] transition-colors hover:bg-white/5 hover:text-[#c7d2fe]"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="flex h-9 flex-1 items-center justify-center rounded-lg bg-[#7c5cfc] px-4 text-sm font-medium text-white transition-colors hover:bg-[#6b4bfa]"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
