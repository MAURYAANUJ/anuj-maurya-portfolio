import { ArrowDownRight } from 'lucide-react';
import { Button } from '../components/Button';
import { SocialLinks } from '../components/SocialLinks';
import { Ticker } from '../components/Ticker';
import { Navbar } from '../components/Navbar';
import { profile } from '../data/profile';
import { withBase } from '../utils/paths';

export const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <Ticker />
      <Navbar />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-[-10%] hidden w-[55%] bg-[radial-gradient(circle_at_70%_40%,rgba(79,140,255,0.16),transparent_58%)] lg:block" />
        <div className="dot-map absolute inset-y-0 right-0 hidden w-[46%] opacity-50 lg:block" />
      </div>
      <div className="section-shell relative flex flex-1 items-center pb-12 pt-8 md:pb-16">
        <div className="max-w-4xl">
          <p className="eyebrow">Hi, I&apos;m {profile.name}</p>
          <h1 className="display-title mt-5 text-[16vw] text-white sm:text-8xl md:text-[7.5rem]">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="display-title mt-4 text-4xl text-white/90 sm:text-5xl md:text-6xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-mist-400 md:text-lg">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects">
              View Projects
              <ArrowDownRight size={16} />
            </Button>
            <Button href={withBase(profile.resumePath)} variant="secondary" download>
              Download Resume
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <SocialLinks links={profile.social} />
            <p className="text-sm text-mist-500">
              {profile.experience} · {profile.company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
