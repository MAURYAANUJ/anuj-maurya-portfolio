import { ArrowDownRight } from 'lucide-react';
import { Button } from '../components/Button';
import { FlutterLogo } from '../components/FlutterLogo';
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
        <div className="absolute inset-y-0 right-[-8%] hidden w-[58%] bg-[radial-gradient(circle_at_70%_35%,rgba(19,185,253,0.22),transparent_58%)] lg:block" />
        <div className="dot-map absolute inset-y-0 right-0 hidden w-[46%] opacity-50 lg:block" />
      </div>
      <div className="section-shell relative grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5">
            <FlutterLogo size={16} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Flutter · Play Store · App Store
            </span>
          </div>
          <p className="eyebrow mt-6">Hi, I&apos;m {profile.name}</p>
          <h1 className="display-title mt-4 text-[15vw] text-white sm:text-8xl lg:text-[6.6rem]">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-3">
            <FlutterLogo size={34} />
            <span className="display-title text-4xl text-accent sm:text-5xl md:text-6xl">
              {profile.role}
            </span>
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
              {profile.experience} · {profile.company} · {profile.location}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gradient-to-br from-accent/50 via-[#0175C2]/20 to-transparent" />
          <div className="absolute -right-3 top-8 hidden rotate-12 rounded-full border border-accent/40 bg-ink-950 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-accent sm:block">
            Shipped apps
          </div>
          <img
            src={withBase(profile.photo)}
            alt={`${profile.name}, ${profile.role}`}
            width={900}
            height={1200}
            className="relative z-10 aspect-[3/4] w-full -rotate-2 rounded-[1.6rem] border-4 border-white/90 object-cover object-top shadow-card"
          />
          <div className="absolute -bottom-5 left-6 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/90 px-4 py-2 backdrop-blur">
            <FlutterLogo size={20} />
            <span className="text-sm font-medium text-white">Built with Flutter</span>
          </div>
        </div>
      </div>
    </section>
  );
};
