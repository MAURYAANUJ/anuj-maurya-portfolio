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
            title="Flutter developer shipping production apps"
            description={`${profile.experience} of hands-on Flutter and Dart, with apps live on Play Store and App Store.`}
          />
        </Reveal>
        <div className="max-w-2xl space-y-6">
          {profile.about.map((paragraph, index) => (
            <Reveal key={paragraph} delayMs={index * 90}>
              <p className="text-base leading-7 text-mist-400">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
