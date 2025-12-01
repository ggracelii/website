import { motion } from 'motion/react';
import heroImage from 'figma:asset/d157cdc5df39b71ea3c142a299bc5fcc5e81946e.png';
import resumePdf from '../assets/GraceLi_Resume.pdf';

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Static */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImage}
            alt="Hero background"
            className="w-full h-full object-cover grayscale"
            style={{ transform: 'scale(1.8)', transformOrigin: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--color-bg-primary)]" />
        </div>
      </div>

      {/* Abstract Geometric Accent */}
      <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[var(--color-accent)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-64 h-64 border-2 border-[var(--color-accent-blue)]/20 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="mb-6"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
            }}
          >
            building systems.
            <br />
            <span className="text-[var(--color-accent)]">creating art.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-12"
          >
            blending technical precision with creative expression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <button
              onClick={scrollToPortfolio}
              className="px-10 py-4 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/80 transition-all duration-300 hover:scale-105"
            >
              view portfolio
            </button>
            <a
              href={resumePdf}
              download
              className="px-10 py-4 bg-transparent border-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-text-primary)] hover:text-black transition-all duration-300 hover:scale-105"
            >
              download resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
