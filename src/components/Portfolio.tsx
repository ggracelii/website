import { motion } from 'motion/react';
import { Github, ExternalLink, FileText, Presentation } from 'lucide-react';
import reportPdf from '../assets/LiGrace_Paper.pdf';
import posterPdf from '../assets/LiGrace_Poster.pdf';
import cyberReport from '../assets/report.pdf';
import premedImg from '../assets/premed.jpg';
import celebImg from '../assets/celeb.jpg';
import websiteImg from '../assets/website.jpg';
import bibleGraph from '../assets/bible.png';
import bbcResults from '../assets/bbc.png';
import celebDemo from '../assets/celeb.mp4';
import yelpResults from '../assets/yelp.png';
import updownImg from '../assets/updown.jpg';
import noriImg from '../assets/nori.png';
import cortexImg from '../assets/cortex.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  link?: string;
  linkLabel?: string;
  report?: string;
  poster?: string;
}

const projects: Project[] = [
  {
    title: 'mpich-rccl integration',
    description: 'message passing interface (mpi) remains the core standard for distributed communication in high-performance computing. however, as ai and scientific workloads increasingly rely on gpus, traditional cpu-based collectives in mpi become bottlenecks. libraries like nvidia\'s nccl and amd\'s rccl offer better performance through direct gpu memory access, but lack portability. therefore, this project integrates rccl into mpich, argonne\s reference mpi implementation, enabling tunable, dynamic, message-size-aware switching between cpu/gpu backends for the allreduce operation. small-scale testing demonstrates over 60× lower latency for large messages (>1 mb) on a single node and over 35× on multiple nodes. currently running experiments on frontier @ oak ridge national lab to benchmark at scale and validate correctness.',
    image: 'https://www.alcf.anl.gov/sites/default/files/2023-03/Cropped-33410D_036_01_CELS_Aurora-Sunspot-Photos.jpg',
    github: 'https://github.com/pmodels/mpich/pull/7493',
    report: reportPdf,
    poster: posterPdf,
  },
  {
    title: 'ml model comparison for cyberbullying detection',
    description:
      'built a cyberbullying detection system using classical machine learning, deep learning, and transformers. preprocessed labeled dataset of social media comments through stopword removal,lemmatization, tokenization, and smote oversampling to correct class imbalance. 3 feature-engineering pipelines: tf-idf vectors, token-based embedding, and distilbert subword tokenization. implemented 4 models: tf-idf ensembles, tf-idf + neural network, bilstm + word embeddings, and fine-tuned distilbert. evaluated accuracy, precision, recall, and f1 score with threshold tuning. ensemble methods offer the strongest performance among non-transformer models,  but distilbert clearly outperforms all baselines.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    report: cyberReport,
  },
  {
    title: 'yelp reviews semantic classifier',
    description:
      'built a sentiment classifier for yelp reviews. dataset is cleaned by removing punctuation, numbers, stopwords, and converting to lowercase. each review receives a sentiment label based on star rating. tf-idf vectorizer with unigram and bigram features converts cleaned text into numerical vectors. regularized logistic regression model is trained with custom class weights to account for stronger polarity at 1/5 stars. classifier achieves strong accuracy for positive and negative reviews but struggles with neutral reviews due to class imbalance, consistent with expectations for real yelp data. pca graph shows global separability trends in the tf-idf feature space, illustrating how rating-based sentiment clusters distribute across principal components.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    link: yelpResults,
    linkLabel: 'results',
  },
  {
    title: 'bbc keyword classifier',
    description:
      'built a keyword-based text classifier for the bbc news dataset. text is cleaned by lowercasing, removing stopwords and punctuation, and lemmatizing each token. the most common content words for each category (business, politics, entertainment, tech, sport) are extracted with nltk. words appearing across multiple categories are removed to increase discriminative power. classifier counts category-specific keywords in each input text and evaluation shows-5r4 strong accuracy, precision, recall, and f1 scores, with no meaningful overfitting.',
    image: 'https://unsplash.com/photos/Tzm3Oyu_6sk/download?force=true&w=1200',
    link: bbcResults,
    linkLabel: 'results',
  },
  {
    title: 'bible word2vec analysis',
    description:
      'trained and evaluated a custom word2vec model on the gutenberg bible. text is cleaned by removing digits, lowercasing, filtering stopwords, and collapsing multi-word phrases into single tokens. after sentence and word tokenization with nltk, the processed corpus is used to train a word2vec model, evaluated with standard analogy tests and probed using similarity queries for selected words. these results are compared directly against the googlenews embeddings to highlight how corpus size and domain affect learned semantic relationships.',
    image: 'https://unsplash.com/photos/Ft_Wn-K5YH8/download?force=true&w=1200',
    link: bibleGraph,
    linkLabel: 'results',
  },
  {
    title: 'medlink',
    description:
      'first-hackathon project: a forum for pre-meds to swap advice and connect with mentors. users can create an account, switch between forum and mentorship tabs, post questions, and respond to others. the mentorship feature allows users to reach out to various mentors. chatbot feature is also integrated to help answer questions.',
    image: premedImg,
    link: 'https://youtu.be/zIhKLaUMeus?si=JB5P7Z6mb_Rc0goL',
  },
  {
    title: 'celeb lookalike game',
    description: 'cleaned dataset of 115k+ images by scoring face resemblance and leveraged truncated singular value decomposition for dimensionality reduction. wired in a webcam flow to build an interactive, user-driven lookalike matcher.',
    image: celebImg,
    link: celebDemo,
    linkLabel: 'demo',
  },
  {
    title: 'asknori',
    description: 'implementing full-stack features at nori, a startup building a mom-mentorship platform. currently working on a refined search functionality with both syntactic and semantic matching - can\'t share too much but check out the website here!',
    image: noriImg,
    link: 'https://asknori.com',
    linkLabel: 'visit',
  },
  {
    title: 'udshmem',
    description: 'implementing openshmem runtimes on the novel updown architecture, a flexible, general-purpose data-movement and graph computing system - can\'t share too much but read more about it here!',
    image: updownImg,
    link: 'https://people.cs.uchicago.edu/~aachien/lssg/research/10x10/',
    linkLabel: 'info',
  },
  {
    title: 'cortex',
    description: 'improving cortex, a workflow-aware serving platform for llm-based agents that isolates each stage of an agentic workflow into dedicated resource pools - can\'t share too much but read more about it here!',
    image: cortexImg,
    link: 'https://daplab.cs.columbia.edu/projects/cortex/',
    linkLabel: 'info',
  },
  {
    title: 'personal website',
    description: 'the website you\'re looking at right now! node & typescript react site with clear sections, an end-to-end portfolio, and contact flow.',
    image: websiteImg,
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{project.linkLabel ?? 'demo'}</span>
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
                      <span>report</span>
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
                      <span>poster</span>
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
