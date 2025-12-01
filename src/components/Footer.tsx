import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-[var(--color-text-secondary)] text-sm">
            © {currentYear} All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ggracelii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ggracelii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:grace.li2@columbia.edu"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
