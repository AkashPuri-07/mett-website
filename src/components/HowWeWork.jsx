import Reveal from './Reveal'

const cards = [
  {
    num: '01',
    tag: 'Convenings',
    title: 'Closed-door roundtables',
    body: 'Senior academic and industry leaders speak candidly on the issues shaping higher education.',
    image: '/images/convenings.webp',
    alt: 'Senior leaders in a closed-door roundtable discussion',
  },
  {
    num: '02',
    tag: 'Publications',
    title: 'Open briefs & proceedings',
    body: 'Each convening is translated into a plain record, published for any institution to read and use.',
    image: '/images/publications.webp',
    alt: 'People reviewing published proceedings and briefs',
  },
  {
    num: '03',
    tag: 'Advisory',
    title: 'Non-partisan recommendations',
    body: 'Shared with regulators when a discussion points to a clear, actionable opportunity.',
    image: '/images/advisory.webp',
    alt: 'Leaders in discussion around a table, forming recommendations',
  },
]

export default function HowWeWork() {
  return (
    <section id="how" className="py-[120px] bg-white">
      <div className="max-w-[1080px] mx-auto px-8">
        <Reveal className="flex justify-between items-end mb-16 flex-wrap gap-4">
          <h2 className="font-display font-normal text-[28px] sm:text-[36px] lg:text-[42px] text-ink">
            How We Work
          </h2>
          <span className="text-[12px] text-ink-40 font-mono uppercase tracking-[0.06em]">
            03 / Method
          </span>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {cards.map((card) => (
            <div key={card.tag} className="relative flex flex-col">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-teal flex items-center justify-center">
                <span className="font-accent text-lg font-medium text-white">{card.num}</span>
              </div>
              <div className="h-[200px] shrink-0">
                <img src={card.image} alt={card.alt} className="w-full h-full object-cover" />
              </div>
              <div className="px-7 py-7 bg-paper-alt flex-1">
                <div className="text-[10px] text-teal font-mono font-bold uppercase tracking-[0.1em] mb-4">
                  {card.tag}
                </div>
                <h3 className="font-display font-bold text-[19px] mb-3 text-ink">{card.title}</h3>
                <p className="text-[13.5px] italic leading-[1.6] text-ink-60">{card.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
