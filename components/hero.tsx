import { Briefcase, MapPin, Search } from "lucide-react"

const TRENDING_TAGS = ["Product Designer", "AI Engineering", "Dev-ops Engineer"]

// Deterministic pseudo-random star field (stable across SSR renders)
const STARS = Array.from({ length: 80 }, (_, i) => {
  const rand = (n: number) => {
    const v = Math.sin(i * n) * 10_000
    return v - Math.floor(v)
  }
  return {
    left: rand(127.1) * 100,
    top: rand(311.7) * 72,
    size: 1 + rand(74.7) * 1.6,
    opacity: 0.15 + rand(91.3) * 0.55,
    blues: i % 11 === 0,
  }
})

function StarField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {STARS.map((star, i) => (
        <span
          key={i}
          className={
            star.blues
              ? "absolute rounded-full bg-indigo-300"
              : "absolute rounded-full bg-white"
          }
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  )
}

function Planet() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-1/2 w-[min(1000px,200vw)] -translate-x-1/2 translate-y-[68%]"
    >
      <div className="relative aspect-square w-full">
        {/* Ambient glow */}
        <div className="absolute -bottom-[10%] left-1/2 h-[80%] w-[120%] -translate-x-1/2 rounded-[100%] bg-indigo-600/25 blur-3xl" />
        <div className="absolute bottom-[55%] left-1/2 h-24 w-[110%] -translate-x-1/2 rounded-[100%] bg-indigo-500/20 blur-2xl" />

        {/* Planet sphere */}
        <div
          className="absolute inset-0 overflow-hidden rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 12%, #98a4ff 0%, #554699 7%, #2c2454 15%, #14101f 30%, #07060a 48%)",
            boxShadow:
              "0 -16px 80px -4px rgba(129, 110, 255, 0.45), 0 0 160px 10px rgba(79, 70, 229, 0.25)",
          }}
        >
          {/* Continents */}
          <div className="absolute left-[6%] top-[10%] h-[26%] w-[30%] -rotate-6 rounded-full bg-slate-400/25 blur-md" />
          <div className="absolute left-[38%] top-[4%] h-[18%] w-[24%] rotate-3 rounded-full bg-slate-300/30 blur-md" />
          <div className="absolute left-[66%] top-[12%] h-[24%] w-[26%] rotate-2 rounded-full bg-slate-400/25 blur-md" />
          <div className="absolute left-[26%] top-[20%] h-[16%] w-[18%] -rotate-3 rounded-full bg-slate-500/20 blur-lg" />
          <div className="absolute left-[58%] top-[26%] h-[14%] w-[20%] rotate-6 rounded-full bg-slate-500/15 blur-lg" />

          {/* Inner shadow for sphere depth */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 10%, transparent 30%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.9) 80%)",
            }}
          />
        </div>

        {/* Top rim highlight */}
        <div className="absolute left-1/2 top-0 h-[2px] w-[64%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-indigo-200/80 to-transparent blur-[1px]" />
        <div className="absolute left-1/2 top-[-1px] h-6 w-[40%] -translate-x-1/2 rounded-[100%] bg-indigo-200/15 blur-md" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08080b] text-white">
      <StarField />
      <Planet />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-72 pt-16 text-center sm:px-6 sm:pt-24 md:pb-96 md:pt-28">
        {/* Badge */}
        <div className="mx-auto flex max-w-full items-center justify-center gap-3">
          <div
            aria-hidden
            className="hidden h-px w-24 bg-gradient-to-r from-transparent via-white/15 to-white/20 sm:block md:w-44"
          />
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[#131316] px-3.5 py-1.5 shadow-lg shadow-black/30">
            <Briefcase className="size-4 text-orange-500" fill="currentColor" />
            <span className="text-sm font-semibold tracking-tight">
              50,000+
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              New jobs this month
            </span>
          </div>
          <div
            aria-hidden
            className="hidden h-px w-24 bg-gradient-to-l from-transparent via-white/15 to-white/20 sm:block md:w-44"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:mt-8 sm:text-5xl md:text-6xl">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:mt-5 sm:text-base">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search bar */}
        <form
          action="/jobs"
          className="mx-auto mt-7 flex h-11 max-w-2xl items-center gap-2 rounded-xl border border-white/10 bg-[#111113] px-2 shadow-xl shadow-black/40 transition-colors focus-within:border-indigo-500/40 sm:mt-8 sm:h-12"
        >
          <div className="flex min-w-0 flex-1 items-center gap-2.5 px-2">
            <Search className="size-4 shrink-0 text-neutral-500" />
            <input
              type="text"
              name="q"
              placeholder="Job title, skill or company"
              className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
            />
          </div>

          <div aria-hidden className="h-5 w-px shrink-0 bg-white/10" />

          <div className="hidden min-w-0 flex-1 items-center gap-2.5 border-l-0 px-2 sm:flex">
            <MapPin className="size-4 shrink-0 text-neutral-500" />
            <input
              type="text"
              name="location"
              placeholder="Location or Remote"
              className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
            />
          </div>

          <button
            type="submit"
            aria-label="Search jobs"
            className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#6d3bf5] text-white transition-colors hover:bg-[#5c2ee0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 sm:size-9"
          >
            <Search className="size-4" />
          </button>
        </form>

        {/* Trending tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-[13px]">
          <span className="text-neutral-500">Trending Position:</span>
          {TRENDING_TAGS.map((tag) => (
            <a
              key={tag}
              href={`/jobs?q=${encodeURIComponent(tag)}`}
              className="rounded-lg border border-white/10 bg-[#131316] px-3 py-1.5 text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
