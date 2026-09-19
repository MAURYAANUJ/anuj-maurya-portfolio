import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { FlutterLogo } from '../components/FlutterLogo';
import { profile } from '../data/profile';
import { withBase } from '../utils/paths';

export const About = () => {
  return (
    <section id="about" className="border-t border-white/10 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About me"
            title="Flutter developer shipping production apps"
            description={`${profile.experience} of hands-on Flutter and Dart, with apps live on Play Store and App Store.`}
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
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60">
              <img
                src={withBase(profile.photo)}
                alt=""
                className="h-48 w-full object-cover object-top md:h-40"
              />
              <dl className="grid gap-4 p-6">
                <div className="flex items-center gap-2">
                  <FlutterLogo size={18} />
                  <div>
                    <dt className="eyebrow">Role</dt>
                    <dd className="mt-1 text-lg text-white">{profile.role}</dd>
                  </div>
                </div>
                <div>
                  <dt className="eyebrow">Experience</dt>
                  <dd className="mt-2 text-lg text-white">{profile.experience}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Current company</dt>
                  <dd className="mt-2 text-lg text-white">{profile.company}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Location</dt>
                  <dd className="mt-2 text-lg text-white">{profile.location}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Education</dt>
                  <dd className="mt-2 space-y-2 text-sm text-mist-400">
                    {profile.education.map((item) => (
                      <p key={item.title}>
                        <span className="text-white">{item.title}</span>
                        <br />
                        {item.detail}
                      </p>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
