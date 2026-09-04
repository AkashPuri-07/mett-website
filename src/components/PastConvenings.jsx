import { useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'

const CATEGORIES = [
  { slug: 'panel-discussion', count: 7, label: 'Panel Discussion' },
  { slug: 'audience', count: 6, label: 'Convening' },
]

const CARD_WIDTH = 280
const GAP = 16
const SPEED_PX_PER_SEC = 40

function buildRow({ slug, count, exclude = [], label }) {
  const photos = Array.from({ length: count }, (_, i) => i + 1)
    .filter((n) => !exclude.includes(n))
    .map((n) => {
      const num = String(n).padStart(2, '0')
      return { key: `${slug}-${num}`, src: `/images/gallery/${slug}-${num}.webp` }
    })
  const rowWidth = photos.length * (CARD_WIDTH + GAP)
  const duration = Math.round(rowWidth / SPEED_PX_PER_SEC)
  return { slug, label, photos: [...photos, ...photos], duration }
}

const rows = CATEGORIES.map(buildRow)

export default function PastConvenings() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-[120px] bg-paper-alt overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-8">
        <Reveal className="mb-16">
          <h2 className="font-display font-normal text-[28px] sm:text-[36px] lg:text-[42px] text-ink">
            Past Convenings
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-12">
        {rows.map((row) => (
          <div key={row.slug}>
            <div className="max-w-[1080px] mx-auto px-8 mb-4">
              <div className="text-[11px] text-teal font-mono font-bold uppercase tracking-[0.1em]">
                {row.label}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-paper-alt to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-paper-alt to-transparent" />

              <div className="marquee-viewport">
                <div
                  className={`marquee-track gap-4 ${reduceMotion ? 'marquee-paused' : ''}`}
                  style={{ '--marquee-duration': `${row.duration}s` }}
                >
                  {row.photos.map((photo, i) => (
                    <div
                      key={`${photo.key}-${i}`}
                      className="relative w-[280px] h-[190px] shrink-0 overflow-hidden"
                    >
                      <img
                        src={photo.src}
                        alt={`${row.label} — M·E·T·T convening`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
