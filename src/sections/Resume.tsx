import { Download } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { profile } from '../data/profile';
import { withBase } from '../utils/paths';

export const Resume = () => {
  return (
    <section id="resume" className="border-t border-white/10 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="border border-white/10 bg-ink-800/60 p-8 md:p-12">
            <SectionHeading
              eyebrow="Resume"
              title="Download a copy for recruiters"
              description="Place your latest PDF at public/assets/resume/Anuj_Maurya_Resume.pdf. The button below points to that file."
            />
            <Button href={withBase(profile.resumePath)} download>
              Download Resume
              <Download size={16} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
