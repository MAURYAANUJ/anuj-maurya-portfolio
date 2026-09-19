import { useCallback, useState } from 'react';
import { PageLoader } from './components/PageLoader';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Expertise } from './sections/Expertise';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';

const App = () => {
  const [ready, setReady] = useState(false);
  const complete = useCallback(() => setReady(true), []);

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      {!ready ? <PageLoader onComplete={complete} /> : null}
      <div className="grain" aria-hidden="true" />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Expertise />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
