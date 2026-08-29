import Reveal from './Reveal'

const rows = [
  { label: 'Higher Education', tag: 'Focus 01' },
  { label: 'Best Education Practices', tag: 'Focus 02' },
  { label: 'Academic Initiatives', tag: 'Focus 03' },
]

export default function Focus() {
  return (
    <section id="focus" className="py-[120px] bg-teal">
      <div className="max-w-[1080px] mx-auto px-8">
        <Reveal className="mb-16">
          <h2 className="font-display font-normal text-[28px] sm:text-[36px] lg:text-[42px] text-ink">
            Areas of Focus
          </h2>
        </Reveal>

        <Reveal className="flex flex-col">
          {rows.map((row, i) => (
            <div
              key={row.tag}
              className={`group flex items-center justify-between py-7 border-t border-ink/15 ${
                i === rows.length - 1 ? 'border-b' : ''
              }`}
            >
              <h3 className="font-display font-medium text-[22px] sm:text-[26px] lg:text-[30px] text-ink transition-all duration-300 group-hover:translate-x-2">
                {row.label}
              </h3>
              <span className="text-[11px] text-ink/70 font-mono uppercase tracking-[0.06em]">
                {row.tag}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
