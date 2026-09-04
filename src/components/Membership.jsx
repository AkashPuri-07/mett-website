import Reveal from './Reveal'

export default function Membership() {
  return (
    <section id="membership" className="py-[120px] bg-white">
      <div className="max-w-[1080px] mx-auto px-8">
        <Reveal className="flex justify-between items-end mb-16 flex-wrap gap-4">
          <h2 className="font-display font-normal text-[28px] sm:text-[36px] lg:text-[42px] text-ink">
            Our Members
          </h2>
          <span className="text-[12px] text-ink-40 font-mono uppercase tracking-[0.06em]">
            01 / Who
          </span>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-9 pt-8">
          <div className="relative text-center px-6 pt-12 pb-11 bg-paper-alt transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-teal flex items-center justify-center">
              <span className="font-accent text-lg font-medium text-white">01</span>
            </div>
            <div className="text-[11px] text-teal font-mono font-bold uppercase tracking-[0.1em] mb-[14px]">
              Academia
            </div>
            <h3 className="font-display font-bold text-2xl text-ink mb-2.5">
              Vice Chancellors, Deans &amp; Academic Leaders
            </h3>
            <p className="text-sm italic text-ink-60">
              Voices from within the institutions shaping how higher education is taught and
              governed.
            </p>
          </div>

          <div className="font-display text-[36px] font-semibold text-teal text-center pt-12">
            &amp;
          </div>

          <div className="relative text-center px-6 pt-12 pb-11 bg-paper-alt transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-teal flex items-center justify-center">
              <span className="font-accent text-lg font-medium text-white">02</span>
            </div>
            <div className="text-[11px] text-teal font-mono font-bold uppercase tracking-[0.1em] mb-[14px]">
              Industry
            </div>
            <h3 className="font-display font-bold text-2xl text-ink mb-2.5">
              Industry Leaders, Employers &amp; Practitioners
            </h3>
            <p className="text-sm italic text-ink-60">
              Voices from the outcomes side — who hire, deploy, and depend on what higher
              education produces.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
