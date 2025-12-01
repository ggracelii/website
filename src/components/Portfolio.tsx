import { motion } from 'motion/react';
import { Github, ExternalLink, FileText, Presentation } from 'lucide-react';
import reportPdf from '../assets/LiGrace_Paper.pdf';
import posterPdf from '../assets/LiGrace_Poster.pdf';
import cyberReport from '../assets/report.pdf';
import premedImg from '../assets/premed.jpg';
import celebImg from '../assets/celeb.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  link?: string;
  report?: string;
  poster?: string;
}

const projects: Project[] = [
  {
    title: 'mpich-rccl integration',
    description: 'integrated amd\'s rccl into argonne national lab\'s mpich to enable gpu-accelerated mpi collectives and achieved over 60x speedup. code merged into open-source codebase for community adoption. currently conducting large-scale experiments on frontier @ oak ridge national lab to benchmark performance.',
    image: 'https://www.alcf.anl.gov/sites/default/files/2023-03/Cropped-33410D_036_01_CELS_Aurora-Sunspot-Photos.jpg',
    github: 'https://github.com/pmodels/mpich/pull/7493',
    report: reportPdf,
    poster: posterPdf,
  },
  {
    title: 'cyberbullying detection (model comparison)',
    description:
      'built and compared four pipelines on social comments (tf-idf + ensemble/nn, embeddings + bilstm, bert). bert dominates (f1 up to 0.99) while earlier baselines trade precision/recall, highlighting the jump from classical features to modern transformers.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/ggracelii/curajoy_fellowship_challenge',
    report: cyberReport,
  },
  {
    title: 'bbc keyword classifier',
    description:
      'built a keyword-based classifier on the bbc news corpus (business, entertainment, politics, sport, tech) achieving ~92% train and ~95% test accuracy. strong precision/recall across classes with sports at 0.99 f1 and balanced performance on business/tech.',
    image: 'https://unsplash.com/photos/Tzm3Oyu_6sk/download?force=true&w=1200',
    github: 'https://github.com/ggracelii/bbc-keyword-classifier',
  },
  {
    title: 'bible word2vec analysis',
    description:
      'trained a word2vec model on the bible and compared its analogies to google news vectors, highlighting archaic language and weaker semantic precision versus the google model.',
    image: 'https://unsplash.com/photos/Ft_Wn-K5YH8/download?force=true&w=1200',
    github: 'https://github.com/ggracelii/bible-word2vec',
  },
  {
    title: 'yelp reviews semantic classifier',
    description:
      'cleaned yelp review text and trained a logistic regression model with pca visualization; achieved ~0.82 accuracy with strong positive sentiment recall (0.96) and solid precision across classes.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/ggracelii/yelp-reviews-semantic-classifier',
  },
  {
    title: 'premed pals hub',
    description:
      'first-hackathon project: a forum for pre-meds to swap advice and connect with mentors, with simple posting and outreach workflows.',
    image: premedImg,
    github: 'https://github.com/ggracelii/premed-pals-hub',
    link: 'https://lovable.dev/projects/af84c56b-759c-483d-94b8-a4b34af207e5?permissionView=main',
  },
  {
    title: 'celeb lookalike game',
    description: 'cleaned data, leveraged singular value decomposition, and wired in a webcam flow to build a playful, user-driven lookalike matcher.',
    image: celebImg,
    github: 'https://github.com/ggracelii/celeb_lookalike',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-[var(--color-bg-secondary)]">
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
            <span className="text-[var(--color-text-secondary)] tracking-wider">selected works</span>
          </div>
          <h2 className="text-5xl lg:text-6xl">
            technical portfolio
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[var(--color-bg-tertiary)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all duration-500 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-tertiary)] via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col justify-between flex-1">

                {/* Title + Description */}
                <div>
                  <h3 className="text-2xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Buttons anchored at bottom */}
                <div className="pt-4 flex gap-4 flex-wrap items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>code</span>
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>live demo</span>
                    </a>
                  )}

                  {project.report && (
                    <a
                      href={project.report}
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-5 h-5" />
                      <span>read report</span>
                    </a>
                  )}

                  {project.poster && (
                    <a
                      href={project.poster}
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Presentation className="w-5 h-5" />
                      <span>view poster</span>
                    </a>
                  )}

                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
