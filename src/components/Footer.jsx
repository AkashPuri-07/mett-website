import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink pt-[100px] pb-12">
      <div className="max-w-[1080px] mx-auto px-8">
        <Reveal className="text-center">
          <div className="flex justify-center items-center gap-2.5 text-[11px] text-teal font-mono font-bold uppercase tracking-[0.1em] mb-7">
            <span className="w-6 h-px bg-teal" />
            Get in Touch
            <span className="w-6 h-px bg-teal" />
          </div>
          <h2 className="font-display font-normal text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] max-w-[700px] mx-auto mb-6 text-white">
            Join the Conversation.
          </h2>
          <p className="max-w-[540px] mx-auto mb-9 text-white/70">
            Academic and industry leaders are welcome to engage with the Think Tank's ongoing
            conversations, briefs, and roundtables.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 bg-teal text-ink no-underline font-mono text-[13px] font-bold uppercase tracking-[0.1em] px-9 py-4 transition-colors hover:bg-white"
          >
            Reach out to METT
            <span className="transition-transform group-hover:translate-x-1.5">→</span>
          </a>
        </Reveal>

        <div className="mt-[100px] flex flex-col sm:flex-row justify-between items-center gap-3 pt-7 border-t border-white/15 text-xs text-white/50 text-center">
          <div>M·E·T·T — Maharashtra Education Think Tank</div>
          <div>Policy · Practice · Dialogue</div>
        </div>
      </div>
    </footer>
  )
}
