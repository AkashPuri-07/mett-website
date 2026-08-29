import Reveal from './Reveal'

export default function Leadership() {
  return (
    <section id="leadership" className="py-[120px] bg-white">
      <div className="max-w-[1080px] mx-auto px-8">
        <Reveal className="mb-16">
          <h2 className="font-display font-normal text-[28px] sm:text-[36px] lg:text-[42px] text-ink">
            Leadership
          </h2>
        </Reveal>

        <Reveal className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
          <img
            src="/images/abhijit-puri.webp"
            alt="Abhijit Puri, Chief Member"
            className="w-[160px] h-[160px] rounded-full object-cover shrink-0"
          />
          <div>
            <h3 className="text-[22px] font-semibold text-ink">Abhijit Puri</h3>
            <p className="text-[13px] font-mono text-ink-60 uppercase tracking-[0.08em] mt-1">
              Chief Member
            </p>

            <ul className="mt-4 flex flex-col gap-2 items-center md:items-start">
              <li className="flex items-center gap-2.5 text-sm text-ink-60">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                25+ years of Industry HR/TA domain experience
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-60">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                Board of Advisor in multiple HR forums
              </li>
            </ul>

            <p className="mt-4 max-w-[480px] text-ink-60">
              Supported by a growing membership of academic and industry leaders from across
              Maharashtra.
            </p>

            <a
              href="tel:+919890645786"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink hover:text-teal transition-colors"
            >
              <span aria-hidden="true">☎</span>
              +91 98906 45786
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
