import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <header className="bg-teal">
      <div className="relative grid grid-cols-1 md:grid-cols-[0.65fr_1.35fr] items-center gap-12 max-w-[1080px] mx-auto px-8 pt-[160px] pb-[100px]">
      <div>
        <div className="flex items-center gap-2.5 text-[11px] text-ink font-mono font-bold uppercase tracking-[0.1em] mb-7">
          <span className="w-6 h-px bg-ink" />
          An Independent Forum for Higher Education
        </div>

        <h1 className="font-display font-bold leading-[1.05] tracking-[-0.01em] text-ink text-[clamp(18px,2.6vw,36px)] max-w-[920px]">
          <span className="whitespace-nowrap">Academia &amp; Industry,</span>
          <br />
          at one table.
        </h1>

        <p className="mt-8 max-w-[520px] text-[17px] leading-[1.6] text-ink/80">
          There is a conversation India's universities and India's industry have long needed to
          have with each other, and have too rarely had. This is the table where it happens —
          time to time, without pretension, and always in the open.
        </p>

        <div className="mt-11 flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap">
          <span className="text-[15px] text-ink/70">
            <b className="text-ink font-semibold">Convene</b> — roundtables &amp; conclaves
          </span>
          <span className="text-[15px] text-ink/70">
            <b className="text-ink font-semibold">Disseminate</b> — open publications
          </span>
          <span className="text-[15px] text-ink/70">
            <b className="text-ink font-semibold">Advise</b> — regulator recommendations
          </span>
        </div>
      </div>

      <div className="relative -order-1 md:order-none mt-5 md:mt-0 flex flex-col gap-2">
        <div className="relative w-full overflow-hidden shrink-0">
          <img
            src="/images/hero-chief-guest.webp"
            className="w-full h-auto block"
            alt="Chandrakant Dada Patil, Chief Guest, addressing the gathering"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/0 from-60% to-ink/45" />
          <div className="absolute bottom-4 left-3 right-3 z-10 text-[10px] font-mono uppercase tracking-[0.06em] text-white">
            Chief Guest
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <img
            src="/images/hero-organisers.webp"
            className="w-full h-auto block"
            alt="The M·E·T·T organising team on stage"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/0 from-60% to-ink/45" />
          <div className="absolute bottom-4 left-3 right-3 z-10 text-[10px] font-mono uppercase tracking-[0.06em] text-white">
            Organisers
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-9 left-8 items-center gap-2.5 text-[11px] text-ink/70">
        <span className="relative w-px h-9 bg-ink/40 overflow-hidden">
          {!reduceMotion && (
            <motion.span
              className="absolute left-0 w-full h-full bg-ink"
              animate={{ top: ['-100%', '0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </span>
        Scroll
      </div>
      </div>
    </header>
  )
}
