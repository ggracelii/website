import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen lowercase">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <div id="resume" className="h-0" /> {/* Anchor for Resume navigation */}
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
