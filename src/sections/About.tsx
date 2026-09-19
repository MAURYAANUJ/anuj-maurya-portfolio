import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { profile } from '../data/profile';

export const About = () => {
  return (
    <section id="about" className="border-t border-white/10 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About me"
            title="Flutter developer building production mobile apps"
            description={`${profile.experience} of development experience with Flutter, Dart, and end-to-end mobile delivery.`}
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <Reveal>
            <div className="space-y-5 text-base leading-7 text-mist-400">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <dl className="grid gap-4 border border-white/10 bg-ink-800/60 p-6">
              <div>
                <dt className="eyebrow">Role</dt>
                <dd className="mt-2 text-lg text-white">{profile.role}</dd>
              </div>
              <div>
                <dt className="eyebrow">Experience</dt>
                <dd className="mt-2 text-lg text-white">{profile.experience}</dd>
              </div>
              <div>
                <dt className="eyebrow">Company</dt>
                <dd className="mt-2 text-lg text-white">{profile.company}</dd>
              </div>
              <div>
                <dt className="eyebrow">Focus</dt>
                <dd className="mt-2 text-lg text-white">
                  APIs, Firebase, real-time features, deployment
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
