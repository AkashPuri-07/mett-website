import Reveal from './Reveal'

const items = [
  {
    num: 'i',
    title: 'Convene',
    body: "Meetings, conferences, conclaves and roundtables held time to time, bringing academic and industry leaders together to read the sector's opportunities and challenges.",
  },
  {
    num: 'ii',
    title: 'Disseminate',
    body: 'Findings and proceedings are published openly on our website, for the benefit of the wider academic community.',
  },
  {
    num: 'iii',
    title: 'Advise Regulators',
    body: 'Where our discussions surface a clear opportunity or concern, we offer considered suggestions to the regulators who govern the sector.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="work" className="py-[120px] bg-teal">
      <div className="max-w-[1080px] mx-auto px-8">
        <Reveal className="flex justify-between items-end mb-16 flex-wrap gap-4">
          <h2 className="font-display font-normal text-[28px] sm:text-[36px] lg:text-[42px] text-ink">
            What We Do
          </h2>
          <span className="text-[12px] text-ink/70 font-mono uppercase tracking-[0.06em]">
            02 / Mandate
          </span>
        </Reveal>

        <Reveal className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={item.num}
              className={`grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 py-8 border-t border-ink/15 items-start ${
                i === items.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="w-[52px] h-[52px] rounded-full bg-ink flex items-center justify-center">
                <span className="font-accent text-lg font-medium text-white">{item.num}</span>
              </div>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="text-sm leading-[1.6] text-ink/80">{item.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
