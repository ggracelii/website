import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[var(--color-bg-primary)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent-blue)]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 relative z-30 pointer-events-auto"
        >
          <h2
            className="font-semibold font-body"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 1.5rem)' }}
          >
            reach me at
          </h2>
          <p className="text-3xl md:text-4xl font-light font-display pointer-events-auto">
            <a
              href="mailto:grace.li2@columbia.edu"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent)]/80 transition-colors underline decoration-2 underline-offset-4 cursor-pointer pointer-events-auto"
              style={{ display: 'inline-flex', position: 'relative', zIndex: 50 }}
              rel="noopener noreferrer"
            >
              grace.li2@columbia.edu
            </a>
          </p>
          <p className="text-[var(--color-text-secondary)] text-lg font-body flex items-center justify-center gap-2">
            or connect with me on
            <a
              href="https://www.linkedin.com/in/ggracelii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors inline-flex"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
