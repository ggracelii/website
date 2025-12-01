import { motion } from 'motion/react';
import { Github, ExternalLink, FileText, Presentation } from 'lucide-react';
import reportPdf from '../assets/LiGrace_Paper.pdf';
import posterPdf from '../assets/LiGrace_Poster.pdf';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  link?: string;
  report?: string;
  poster?: string;
}

const projects: Project[] = [
  {
    title: 'mpich-rccl integration',
    description: 'integrated amd\'s rccl into argonne national lab\'s mpich to enable gpu-accelerated mpi collectives and achieved over 60x speedup. code merged into open-source codebase for community adoption. currently conducting large-scale experiments on frontier @ oak ridge national lab to benchmark performance.',
    image: 'https://images.unsplash.com/photo-1639004643331-9526630beb3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncHUlMjBjaXJjdWl0JTIwYm9hcmR8ZW58MXx8fHwxNzY0NTUyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: [],
    github: 'https://github.com/pmodels/mpich/pull/7493',
    report: reportPdf,
    poster: posterPdf,
  },
  {
    title: 'MPICH Communication Layer',
    description: 'Contributed to MPICH implementation for improved inter-process communication in distributed systems.',
    image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvZGUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDU1MjM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['MPICH', 'C', 'Distributed Systems'],
    github: '#',
  },
  {
    title: 'RISC-V Processor Design',
    description: 'Custom RISC-V processor implementation with optimized pipeline architecture and instruction set extensions.',
    image: 'https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDU1MjM0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['RISC-V', 'Verilog', 'Computer Architecture'],
    github: '#',
    link: '#',
  },
  {
    title: 'Neural Network Visualization Tool',
    description: 'Interactive web-based tool for visualizing and analyzing deep learning model architectures and training metrics.',
    image: 'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjQ1MTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AI/ML', 'React', 'TensorFlow', 'D3.js'],
    github: '#',
    link: '#',
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[var(--color-bg-tertiary)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all duration-500"
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
              <div className="p-8">
                <h3 className="text-2xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] rounded-full border border-[var(--color-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 flex-wrap items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>view code</span>
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
                      download
                    >
                      <FileText className="w-5 h-5" />
                      <span>read report</span>
                    </a>
                  )}
                  {project.poster && (
                    <a
                      href={project.poster}
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      download
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
