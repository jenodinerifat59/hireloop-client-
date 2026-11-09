import Image from "next/image"
import { Briefcase, ChartColumn, Star, UserSearch } from "lucide-react"

const STATS = [
  { value: "50K", label: "Active Jobs", icon: Briefcase },
  { value: "12K", label: "Companies", icon: ChartColumn },
  { value: "2M", label: "Job Seekers", icon: UserSearch },
  { value: "97%", label: "Satisfaction Rate", icon: Star },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#08080b] pb-20 text-white md:pb-28">
      {/* Globe background (stars + glow baked into the image) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex justify-center">
        <Image
          src="/images/globe.png"
          alt=""
          width={1440}
          height={1255}
          className="h-auto w-[min(1400px,185vw)] max-w-none select-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Headline over the globe */}
        <p className="pt-64 text-center text-2xl font-medium leading-snug tracking-tight text-neutral-100 sm:pt-72 sm:text-3xl md:pt-[330px] md:text-[34px]">
          Assisting over <span className="font-semibold">15,000 job seekers</span>
          <br />
          <span className="font-semibold">find their dream positions.</span>
        </p>

        {/* Stat cards */}
        <div className="mt-9 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex flex-col rounded-xl border border-white/[0.07] bg-[#0c0c0f]/85 p-4 shadow-xl shadow-black/40 backdrop-blur-sm md:p-5"
              >
                <div className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] md:size-9">
                  <Icon
                    className="size-4 text-neutral-300"
                    {...(stat.icon === Star ? { fill: "currentColor" } : {})}
                  />
                </div>
                <div className="mt-8 md:mt-11">
                  <p className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[40px]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs text-neutral-400 lg:text-[13px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
