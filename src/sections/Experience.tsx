import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { experience } from '../data/experience';
import { profile } from '../data/profile';

export const Experience = () => {
  return (
    <section id="experience" className="border-t border-white/10 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Professional timeline" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((role, index) => (
            <Reveal key={role.id} delayMs={index * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(19,185,253,0.12)]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-mist-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="eyebrow mt-3">{role.company}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{role.position}</h3>
                <p className="mt-2 text-sm text-mist-400">
                  {role.duration}
                  {role.location ? ` · ${role.location}` : ''}
                </p>
                <div className="mt-6 grid flex-1 gap-6">
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
          ))}
          <Reveal delayMs={experience.length * 80}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(19,185,253,0.12)]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-mist-500">
                {String(experience.length + 1).padStart(2, '0')}
              </p>
              <p className="eyebrow mt-3">Academia</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Education</h3>
              <p className="mt-2 text-sm text-mist-400">{profile.location}</p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-mist-400">
                {profile.education.map((item) => (
                  <li key={item.title}>
                    <span className="block font-medium text-white">{item.title}</span>
                    {item.detail}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
