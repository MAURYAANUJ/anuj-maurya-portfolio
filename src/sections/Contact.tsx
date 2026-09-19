import { FormEvent, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { SocialLinks } from '../components/SocialLinks';
import { profile } from '../data/profile';
import { isPlaceholderValue } from '../utils/paths';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const emailReady = !profile.emailIsPlaceholder && !isPlaceholderValue(profile.email);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailReady) {
      setStatus('Add your email in src/data/profile.ts to enable this form.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Opening your email client…');
  };

  return (
    <section id="contact" className="border-t border-white/10 py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about a role or a project"
            description="Use the form to send a message through your email client, or reach me directly through the links below."
          />
          <div className="space-y-3 text-sm text-mist-400">
            <p>
              Email:{' '}
              <a className="text-white hover:text-accent" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p>
              Phone:{' '}
              <a className="text-white hover:text-accent" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                {profile.phone}
              </a>
            </p>
            <p>Location: {profile.location}</p>
            <SocialLinks links={profile.social} />
          </div>
        </Reveal>
        <Reveal delayMs={80}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-ink-800/60 p-6 md:p-8"
            noValidate
          >
            <label className="block text-sm text-mist-400" htmlFor="name">
              Name
              <input
                id="name"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-md border border-white/10 bg-ink-950 px-3 py-2.5 text-white outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="mt-4 block text-sm text-mist-400" htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-md border border-white/10 bg-ink-950 px-3 py-2.5 text-white outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="mt-4 block text-sm text-mist-400" htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 w-full resize-y rounded-md border border-white/10 bg-ink-950 px-3 py-2.5 text-white outline-none transition-colors focus:border-accent"
              />
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit">Send Message</Button>
              <Button href={`mailto:${profile.email}`} variant="secondary">
                Email
              </Button>
            </div>
            {status ? <p className="mt-4 text-sm text-mist-400">{status}</p> : null}
            <p className="mt-4 text-xs text-mist-500">
              No backend is attached. The form uses <span className="font-mono">mailto:</span>.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
