import { motion } from 'motion/react';
import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import headshot from '../assets/GraceLi_Headshot_Extended.PNG';
import resumePdf from '../assets/GraceLi_Resume.pdf';

const skills = [
  { category: 'programming languages', items: ['java', 'c/c++', 'python', 'javascript/typescript', 'kotlin', 'sql', 'r', 'bash'] },
  { category: 'web dev', items: ['react', 'node.js', 'django', 'supabase', 'aws', 'gcp', 'docker', 'postgresql', 'rest api', 'full-stack development'] },
  { category: 'systems', items: ['mpi/mpich', 'rccl/rocm', 'openshmem', 'high-performance computing', 'distributed systems', 'parallel computing'] },
  { category: 'ai & ml', items: ['pytorch', 'tensorflow', 'huggingface', 'sglang', 'cuda', 'prompt engineering'] },
  { category: 'tooling & quality', items: ['git', 'ci/cd', 'unit testing', 'integration testing', 'static bug analysis'] },
  { category: 'languages', items: ['english (native)', 'chinese (fluent)'] },
];

const leftSkills = skills.filter((_, index) => index % 2 === 0);
const rightSkills = skills.filter((_, index) => index % 2 === 1);

const coursework = [
  '• advanced software engineering (java)',
  '• artificial intelligence (python)',
  '• advanced programming (c)',
  '• data structures & algorithms (java)',
  '• computational linguistics (python)',
  '• discrete mathematics',
  '• modern algebra',
  '• ordinary differential equations',
  '• multivariable calculus',
  '• linear algebra & probability',
];

const activities = [
  '• girls who code - engagement chair',
  '• women in computer science - community chair',
  '• society of women engineers',
  '• columbia organization of rising entrepreneurs',
  '• columbia ballet collaborative',
  '• columbia repertory ballet',
  '• choreography lab',
  '• columbia university ballet ensemble',
];

const experience = [
  {
    role: 'mathematics & computer science division researcher',
    organization: 'argonne national laboratory',
    period: 'sept 2025 – present',
    description: 'integrating amd rccl into mpich and scaling mpi collectives on frontier for distributed ai workloads',
  },
  {
    role: 'large-scale sustainable systems group researcher',
    organization: 'university of chicago',
    period: 'sept 2025 – present',
    description: 'implementing parallel-thread openshmem collective ops on the updown weave architecture in c++',
  },
  {
    role: 'data, agents, and processes lab researcher',
    organization: 'columbia university',
    period: 'sept 2025 – present',
    description: 'building cortex, a workflow-aware serving system for agentic llms using sglang, nl2sql, and aws',
  },
  {
    role: 'software engineering intern',
    organization: 'nori (new york, ny)',
    period: 'oct 2025 – present',
    description: 'shipped core platform features (search, explore) with node, react, supabase, transformer.js; built scalable data pipelines',
  },
  {
    role: 'software engineering intern',
    organization: 'venuai (remote)',
    period: 'dec 2024 – present',
    description: 'delivered full-stack features with django + react, improved onboarding flows, and optimized llm prompts for matching accuracy',
  },
  {
    role: 'doe suli intern — mathematics & computer science division',
    organization: 'argonne national laboratory',
    period: 'may 2025 – aug 2025',
    description: 'integrated amd rccl into mpich and evaluated hybrid collectives, achieving over 60x speedup in allreduce latency',
  },
  {
    role: 'cs department ta (coms1002/1012)',
    organization: 'columbia university',
    period: 'sept 2025 – present',
    description: 'led recitations, graded, and held office hours for 250+ students (nlp/digital humanities focus)',
  },
  {
    role: 'private tutor',
    organization: 'amikka learning | bethesda scholars',
    period: 'jan 2025 – present',
    description: 'individual tutoring across standardized tests (act/sat) and ap subjects (csa, physics, calculus, chinese, statistics) with tailored study plans',
  },
  {
    role: 'campus partner',
    organization: 'crew dog',
    period: 'oct 2024 – present',
    description: 'partnered with student clubs to streamline apparel orders, contributing to 40k+ in sales in one semester',
  },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-[var(--color-bg-primary)]">
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
            <div className="w-16 h-1 bg-[var(--color-accent-blue)]" />
            <span className="text-[var(--color-text-secondary)] tracking-wider">get to know me</span>
          </div>
          <h2 className="text-5xl lg:text-6xl">
             introduction
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Summary, Education, Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div>
              <p className="text-[var(--color-text-secondary)] mb-4">
                originally from san diego, ca, i am a sophomore at columbia university pursuing a double major in computer science and mathematics, as well as a minor in dance. growing up, i dedicated myself to competitive dance and professional ballet training, culminating in a gap year dancing with the pittsburgh ballet theatre before matriculating in university.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-4">
                as a national merit scholar at columbia, i balance rigorous academics with exciting projects and part-time work. i'm integrating amd's gpu-accelerated rccl into mpich with argonne national laboratory, prototyping openshmem collectives on novel hardware with uchicago, and building a workflow-aware llm serving system at columbia. i also ship full-stack features with venuai (backed by y-combinator and harvard) and nori, while remaining deeply engaged in the campus dance community. i’m passionate about merging technical innovation with creativity and pursuing opportunities that emphasize problem-solving, collaboration, and impact.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-4">
                i'm passionate about building things that matter - i want to feel the impact of my work. beyond academics and tech, i love exploring new places, baking, and dancing (of course!). feel free to reach out — i'd love to connect!
              </p>
            </div>

            {/* Education */}
            <div className="bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-[var(--color-accent)]" />
                <h4 className="text-xl">education</h4>
              </div>
              <div>
                <p className="text-lg">columbia university — new york, ny</p>
                <p className="text-[var(--color-text-secondary)]">
                  double major: computer science & mathematics</p>
                <p className="text-[var(--color-text-secondary)]">
                    minor: dance</p>
                <p className="text-[var(--color-text-secondary)]">
                    expected graduation: may 2028</p>
                <p className="text-[var(--color-text-secondary)]">
                   dean's list</p>
                <div className="text-[var(--color-text-secondary)] text-sm mt-6 space-y-1">
                  <p className="font-semibold text-[var(--color-text-primary)]">coursework</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {coursework.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-[var(--color-text-secondary)] text-sm mt-6 space-y-4">
                  <p className="font-semibold text-[var(--color-text-primary)]">activities</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-4 border-[var(--color-border)]">
                <img
                  src={headshot}
                  alt="grace li portrait"
                  className="w-full aspect-square object-cover grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-[var(--color-accent)]/30 rounded-full -z-10" />
            </div>

            {/* Download Resume Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-8 py-4 bg-[var(--color-accent-blue)] text-white rounded-xl hover:bg-[var(--color-accent-blue)]/80 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5" />
              view resume (pdf)
            </motion.a>
          </motion.div>

          {/* Right Column - Experience & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-[var(--color-accent-blue)]" />
                <h4 className="text-xl">experience</h4>
              </div>
              <div className="space-y-0">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 py-4 border-l-2 border-[var(--color-border)]"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 bg-[var(--color-accent)] rounded-full transform -translate-x-[7px]" />
                    <p className="text-lg">{exp.role}</p>
                    <p className="text-[var(--color-text-secondary)]">{exp.organization}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{exp.period}</p>
                    <p className="text-[var(--color-text-secondary)] mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-[var(--color-accent)]" />
                <h4 className="text-xl"> skills</h4>
              </div>

              <div className="grid grid-cols-2 gap-12 items-start">
                {/* Left column: programming → systems → tooling */}
                <div className="space-y-6">
                  {leftSkills.map((skillGroup) => (
                    <div key={skillGroup.category} className="flex flex-col">
                      <p className="text-[var(--color-accent)] mb-2">{skillGroup.category}</p>
                      <ul className="text-[var(--color-text-secondary)] text-sm space-y-1">
                        {skillGroup.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Right column: web → ai/ml → languages */}
                <div className="space-y-6">
                  {rightSkills.map((skillGroup) => (
                    <div key={skillGroup.category} className="flex flex-col">
                      <p className="text-[var(--color-accent)] mb-2">{skillGroup.category}</p>
                      <ul className="text-[var(--color-text-secondary)] text-sm space-y-1">
                        {skillGroup.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
