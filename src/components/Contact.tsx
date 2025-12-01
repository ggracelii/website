import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[var(--color-bg-primary)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent-blue)]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold">reach me at</h2>
          <a
            href="mailto:grace.li2@columbia.edu"
            className="text-2xl md:text-3xl font-light text-[var(--color-accent)] hover:text-[var(--color-accent)]/80 transition-colors"
          >
            grace.li2@columbia.edu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
