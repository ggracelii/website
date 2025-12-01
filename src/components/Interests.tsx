import { motion } from 'motion/react';
import danceImg from '../assets/dance.jpg';

interface Interest {
  title: string;
  description: string;
  image: string;
  accent: string;
  link?: string;
}

const interests: Interest[] = [
  {
    title: 'in the studio',
    description:
      'i\'ve performed classical and contemporary works worldwide, attended elite intensives, and earning scholarships—including modern/contemporary dance winner for the national foundation for the advancement of artists.',
    image: danceImg,
    accent: 'var(--color-accent-blue)',
    link: 'https://youtu.be/3EAi5mf2prc',
  },
  {
    title: 'in the kitchen',
    description: 'crafting artisanal breads and pastries—where precision meets creativity in the kitchen.',
    image: 'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFraW5nJTIwYnJlYWR8ZW58MXx8fHwxNzY0NDYyMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: 'var(--color-accent)',
  },
  {
    title: 'in the world',
    description: 'exploring new landscapes and cultures—finding inspiration in the diversity of our world.',
    image: 'https://images.unsplash.com/photo-1717586872276-ecf58bbf5574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjBtb3VudGFpbnMlMjB0cmF2ZWx8ZW58MXx8fHwxNzY0NTUyMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    accent: 'var(--color-accent)',
  },
];

export function Interests() {
  return (
    <section id="interests" className="py-32 bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-1 bg-[var(--color-accent)]" />
            <span className="text-[var(--color-text-secondary)] tracking-wider">beyond code</span>
          </div>
          <h2 className="text-5xl lg:text-6xl">
            personal passions
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] mt-6">
            life is richer when technology meets artistry. here's what fuels my creativity outside of academics.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
        >
          {interests.slice(0, 1).map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                {/* Image */}
                <img
                  src={interest.image}
                  alt={interest.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  style={{ objectPosition: '50% 35%' }}
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Decorative Border Element */}
                <div
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                  style={{ backgroundColor: interest.accent }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-4">
                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="text-3xl transition-all duration-500 group-hover:-translate-y-4"
                      style={{ color: interest.accent }}
                    >
                      {interest.title}
                    </motion.h3>
                    {interest.link && (
                      <a
                        href={interest.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-[0.15em] bg-white/10 px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-colors z-10"
                      >
                        watch
                      </a>
                    )}
                  </div>
                  <p className="text-[var(--color-text-secondary)] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 max-w-xl mt-2">
                    {interest.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: interest.accent }}
                />
              </div>

              {/* Film Frame Effect */}
              <div className="absolute -inset-2 border-2 border-[var(--color-border)] rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
