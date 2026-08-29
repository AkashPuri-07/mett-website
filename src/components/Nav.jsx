import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-[14px] bg-white/95 backdrop-blur-sm border-b transition-colors ${
        scrolled ? 'border-hairline' : 'border-transparent'
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-8 flex items-center justify-between">
        <div>
          <div className="font-display text-[19px] font-semibold tracking-[0.02em] text-ink leading-tight">
            M<span className="text-teal">·</span>E
            <span className="text-teal">·</span>T
            <span className="text-teal">·</span>T
          </div>
          <div className="font-mono text-[10px] font-semibold text-ink/70 uppercase tracking-[0.08em] leading-tight">
            Maharashtra Education Think Tank
          </div>
        </div>
        <div className="flex items-center">
          <a href="#membership" className="text-ink no-underline text-[13px] font-semibold ml-8">
            Membership
          </a>
          <a href="#work" className="text-ink no-underline text-[13px] font-semibold ml-8">
            What We Do
          </a>
          <a href="#focus" className="text-ink no-underline text-[13px] font-semibold ml-8">
            Focus
          </a>
          <a
            href="#contact"
            className="font-mono text-white no-underline text-[12px] font-bold uppercase tracking-[0.1em] ml-8 bg-ink px-6 py-2.5 hover:bg-teal hover:text-ink transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  )
}
