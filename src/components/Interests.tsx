import { motion } from 'motion/react';
import danceImg from '../assets/dance.jpg';
import bakeImg from '../assets/bake.jpg';
import travelImg from '../assets/travel.jpg';

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
      "i've performed classical and contemporary works worldwide, attended elite intensives, and earned numerous scholarships and awards. i was a soloist @ yagp & adcibc finals and a youngarts winner in contemporary/modern dance.",
    image: danceImg,
    accent: 'var(--color-accent-blue)',
    link: 'https://youtu.be/3EAi5mf2prc',
  },
  {
    title: 'in the kitchen',
    description:
      "food is my favorite way to bond, spend quality time, and exchange culture, whether it's pastries to share or hosting friends over a meal.",
    image: bakeImg,
    accent: 'var(--color-accent)',
  },
  {
    title: 'in the world',
    description:
      'dance has offered me opportunities to travel the world, which i am infinitely grateful for. i have seen the most beautiful places and met incredible people along the way.',
    image: travelImg,
    accent: 'var(--color-accent)',
  },
];

export function Interests() {
  return (
    <section
      id="interests"
      className="py-32 bg-[var(--color-bg-secondary)] overflow-hidden"
    >
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
            <span className="text-[var(--color-text-secondary)] tracking-wider">
              beyond code
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl">personal passions</h2>
          <p className="text-xl text-[var(--color-text-secondary)] mt-6">
            life is richer when technology meets artistry. here&apos;s what fuels
            my creativity outside of academics.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.slice(0, 3).map((interest, index) => (
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
                  style={{
                    objectPosition:
                      interest.title === 'in the kitchen'
                        ? '55% 30%'
                        : interest.title === 'in the studio'
                        ? '59% 80%'
                        : interest.title === 'in the world'
                        ? '50% 70%'
                        : '50% 35%',
                    transform: interest.title === 'in the world' ? 'scale(1.5)' : interest.title === 'in the studio' ? 'scale(1.25)' : 'none',
                  }}
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
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end items-start">
                  <p className="text-white text-left opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 max-w-xl mb-3">
                    {interest.description}
                  </p>

                  <div className="flex items-center justify-between w-full">
                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="text-3xl"
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
