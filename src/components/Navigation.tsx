import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Navigation() {
  const navLinks = ['home', 'about', 'portfolio', 'interests', 'contact'];

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-lg border-b border-[var(--color-border)] font-body"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 font-body">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('Home')}
          >
            <span className="tracking-tight font-semibold font-display text-[var(--color-accent)] text-2xl md:text-3xl">
              grace li
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative group font-body"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ggracelii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ggracelii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:grace.li2@columbia.edu"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
