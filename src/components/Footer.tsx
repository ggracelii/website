import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Copyright */}
          <p className="text-[var(--color-text-secondary)] text-sm font-body text-center md:text-left md:justify-self-start">
            © {currentYear} all rights reserved. last updated {lastUpdated}.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 md:justify-center md:justify-self-center">
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
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-sm font-body md:justify-self-end"
          >
            back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
