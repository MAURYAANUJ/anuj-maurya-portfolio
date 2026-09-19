import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { experience } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="border-t border-white/10 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Professional timeline" />
        </Reveal>
        <ol className="relative space-y-8 border-l border-accent/30 pl-6 md:pl-8">
          {experience.map((role) => (
            <li key={role.id} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent md:-left-[39px]" />
              <Reveal>
                <article className="rounded-2xl border border-white/10 bg-ink-800/60 p-6 md:p-8">
                  <p className="eyebrow">{role.company}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{role.position}</h3>
                  <p className="mt-2 text-sm text-mist-400">
                    {role.duration}
                    {role.location ? ` · ${role.location}` : ''}
                  </p>
                  <div className="mt-6 grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.16em] text-mist-500">
                        Highlights
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-mist-400">
                        {role.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.16em] text-mist-500">
                        Responsibilities
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-mist-400">
                        {role.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
