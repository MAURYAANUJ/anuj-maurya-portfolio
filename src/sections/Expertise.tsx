import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { expertise } from '../data/expertise';

export const Expertise = () => {
  return (
    <section id="expertise" className="border-t border-white/10 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Technical expertise"
            title="Practical experience across the mobile stack"
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 40}>
              <article className="h-full border border-white/10 bg-ink-800/60 p-6 transition-colors duration-200 hover:border-white/25">
                <p className="text-[11px] uppercase tracking-[0.16em] text-mist-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist-400">{item.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
