import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Cpu,
  Download,
  ExternalLink,
  Filter,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Shield,
  Sparkles,
  Sun,
  Trophy,
  X,
} from 'lucide-react';
import {
  achievements,
  certifications,
  experiences,
  githubProfile,
  navLinks,
  skills,
} from './data/portfolioData';
import { projectsData } from './data/projectsData';
import { useTypewriter } from './hooks/useTypewriter';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050';

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const sectionIds = ['home', 'about', 'skills', 'projects', 'github', 'experience', 'certifications', 'achievements', 'resume', 'contact'];

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const orbitY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const driftY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        size: (index % 3) + 2,
        left: `${(index * 17) % 100}%`,
        top: `${(index * 23) % 100}%`,
        delay: `${(index % 8) * 0.5}s`,
        duration: `${7 + (index % 5)}s`,
      })),
    [],
  );

  const typingText = useTypewriter(
    ['Computer Engineering Student', 'Full Stack Developer', 'AI Product Builder', 'Cyber Security Learner'],
    80,
    1200,
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    const onPointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('pointermove', onPointerMove);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/api/projects`);
      if (!response.ok) {
        throw new Error('Unable to load projects');
      }
      const data = await response.json();
      setProjects(data.projects || []);
    } catch {
      setProjects(projectsData);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.55 },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set(['All']);
    projects.forEach((project) => project.techStack.forEach((tag) => tags.add(tag)));
    return [...tags];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.techStack.includes(activeFilter));
  }, [activeFilter, projects]);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitContact = async (event) => {
    event.preventDefault();
    setContactStatus({ state: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send message');
      }

      setContactStatus({ state: 'success', message: 'Message sent successfully. I will get back soon.' });
      setContactForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setContactStatus({ state: 'error', message: error.message });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-100 text-slate-900 transition-colors duration-500 dark:bg-[#050816] dark:text-slate-100">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-[#050816]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-20 w-20 rounded-full border-4 border-slate-700 border-t-brand-400"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_80%_5%,rgba(168,85,247,0.22),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.2),transparent_42%)]" />
      <div className="grid-overlay pointer-events-none fixed inset-0 -z-10 opacity-40 dark:opacity-70" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle-dot"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <motion.div
        className="pointer-events-none fixed -z-10 h-72 w-72 animate-float rounded-full bg-brand-500/20 blur-3xl"
        style={{ top: '12%', left: '-8%', y: driftY }}
      />
      <div className="pointer-events-none fixed -z-10 h-80 w-80 animate-float rounded-full bg-accent-500/25 blur-3xl" style={{ top: '35%', right: '-10%' }} />
      <motion.div
        className="pointer-events-none fixed right-[12%] top-[18%] -z-10 h-48 w-48 rounded-full border border-brand-300/20"
        style={{ rotate: orbitRotate, y: orbitY }}
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-300 shadow-[0_0_20px_rgba(56,189,248,0.9)]" />
      </motion.div>
      <div className="pointer-events-none fixed inset-0 z-40 hidden md:block" style={{ background: `radial-gradient(300px circle at ${cursor.x}px ${cursor.y}px, rgba(56,189,248,0.12), transparent 70%)` }} />

      <div className="fixed left-0 top-0 z-40 h-1 bg-gradient-to-r from-brand-500 to-accent-500" style={{ width: `${progress}%` }} />

      <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/60 dark:bg-slate-950/55 border-b border-slate-200/20 dark:border-slate-800/60">
        <div className="mx-auto flex w-full max-w-[96rem] items-center justify-between px-4 py-7 sm:px-8 lg:px-10">
          <a href="#home" className="font-display text-4xl tracking-wide neon-text">Rohan Shelar</a>
          <nav className="hidden gap-6 lg:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="nav-link text-xl text-slate-600 transition hover:text-brand-500 dark:text-slate-300">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              className="rounded-full border border-slate-300/60 p-2 dark:border-slate-700"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="rounded-full border border-slate-300/60 p-2 lg:hidden dark:border-slate-700" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Open menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-slate-200/25 px-6 lg:hidden dark:border-slate-800/70">
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <a key={link} className="py-2" href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SectionRail activeSection={activeSection} />

      <main className="mx-auto w-full max-w-[110rem] px-4 pb-20 sm:px-8 lg:px-12 xl:px-16">
        <AnimatedSection id="home" className="hero-section grid grid-cols-[1.1fr_0.9fr] items-start gap-10 py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-400/10 px-4 py-2 text-xs font-medium text-brand-300"><Sparkles size={14} /> Diploma in Computer Engineering | India</p>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Building <span className="hero-gradient bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">Intelligent Digital Systems</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 xl:text-xl">{typingText}<span className="animate-pulse">|</span></p>
            <p className="mt-4 max-w-3xl text-base text-slate-600 dark:text-slate-300 xl:text-lg">
              I build recruiter-ready software products that combine AI, full stack engineering, and practical impact. I focus on clean architecture, measurable outcomes, and shipping fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="magnetic-btn rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 font-medium text-white shadow-neon">View Projects</a>
              <button onClick={() => setResumeOpen(true)} className="magnetic-btn rounded-xl border border-slate-300/60 px-6 py-3 font-medium dark:border-slate-700">Download Resume</button>
              <a href="#contact" className="magnetic-btn rounded-xl border border-brand-500/40 px-6 py-3 font-medium text-brand-500">Hire Me</a>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <div className="glass-card stat-card p-4">
                <p className="text-2xl font-display">4+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Major Builds</p>
              </div>
              <div className="glass-card stat-card p-4">
                <p className="text-2xl font-display">3</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Internships</p>
              </div>
              <div className="glass-card stat-card p-4">
                <p className="text-2xl font-display">24/7</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Build Mode</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative ml-auto flex justify-end lg:self-start lg:mt-12 lg:-mr-12"
          >
            <div className="glass-card w-full max-w-lg overflow-hidden p-4">
              <img src="/images/profile.jpg" alt="Rohan Shelar" loading="lazy" className="h-[520px] w-full rounded-xl object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-brand-300/30 bg-slate-950/70 px-4 py-3 backdrop-blur">
              <p className="text-sm text-slate-300">Available for internships and high-impact projects</p>
            </div>
            <div className="absolute -right-4 top-8 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 backdrop-blur">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-300"><Shield size={14} /> Security Focused</p>
            </div>
            <div className="absolute -right-5 bottom-24 rounded-xl border border-brand-400/30 bg-brand-500/10 px-4 py-3 backdrop-blur">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-200"><Cpu size={14} /> AI + Full Stack</p>
            </div>
          </motion.div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="about" className="py-16">
          <SectionTitle title="About" subtitle="From curiosity to engineered execution" />
          <motion.div className="grid gap-6 lg:grid-cols-2" initial="hidden" whileInView="visible" variants={sectionReveal} viewport={{ once: true }}>
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl">Personal Growth Story</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                I am a 2nd year Diploma student in Computer Engineering, building systems that solve real problems. My journey started from static apps and evolved into full stack platforms with AI integration, secure backend practices, and user-focused interfaces.
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Vision: build startup-grade digital products that are scalable, secure, and human-centered.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl">Timeline</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3"><GraduationCap className="text-brand-400" /> Diploma in Computer Engineering (2nd Year)</li>
                <li className="flex gap-3"><Briefcase className="text-brand-400" /> Completed Cyber Security Internship</li>
                <li className="flex gap-3"><Briefcase className="text-brand-400" /> Completed Java Development Internship</li>
                <li className="flex gap-3"><Briefcase className="text-brand-400" /> Completed Backend Development Internship</li>
              </ul>
            </div>
          </motion.div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="skills" className="py-16">
          <SectionTitle title="Skills" subtitle="Full spectrum engineering capability" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.article
                key={category}
                className="glass-card skill-card p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display text-lg">{category}</h3>
                <div className="mt-4 space-y-3">
                  {items.map((skill, skillIndex) => (
                    <div key={skill}>
                      <div className="flex items-center justify-between text-sm">
                        <span>{skill}</span>
                        <span>{95 - skillIndex * 4}%</span>
                      </div>
                      <div className="mt-1 h-2 rounded-full bg-slate-300/30 dark:bg-slate-700/40">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${95 - skillIndex * 4}%` }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="projects" className="py-16">
          <SectionTitle title="Projects" subtitle="Built for impact, scale, and storytelling" />
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Filter size={16} />
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === tag ? 'bg-brand-500 text-white' : 'glass-card'}`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="group glass-card project-card overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <img src={project.image} alt={project.title} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="font-display text-2xl">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tag) => (
                      <span key={tag} className="rounded-full border border-brand-400/40 px-3 py-1 text-xs text-brand-300">{tag}</span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300"><strong>Problem:</strong> {project.problem}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300"><strong>Solution:</strong> {project.solution}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300"><strong>Impact:</strong> {project.impact}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm text-white" href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>
                    {project.demo && (
                      <a className="inline-flex items-center gap-2 rounded-lg border border-slate-300/40 px-4 py-2 text-sm dark:border-slate-700" href={project.demo} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15} /></a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="github" className="py-16">
          <SectionTitle title="GitHub" subtitle="Open-source, code, and contributions" />
          <div className="glass-card grid gap-6 p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="font-display text-2xl">GitHub Profile</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Add your GitHub link here so recruiters can review your codebase, commit history, and open-source work.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brand-400/40 px-4 py-2 text-sm text-brand-300">@{githubProfile.handle}</span>
                <a
                  href={githubProfile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-white"
                >
                  Visit GitHub <Github size={16} />
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-300/30 bg-slate-950/50 p-6 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-300">Recruiter Note</p>
              <p className="mt-3 text-slate-300">
                Highlight your best repositories here and keep the link updated. This section makes your projects instantly verifiable.
              </p>
              <div className="mt-4 space-y-2">
                <div className="rounded-lg border border-slate-700/50 px-3 py-2">AI Storytelling Platform</div>
                <div className="rounded-lg border border-slate-700/50 px-3 py-2">Desk Time Tracker</div>
                <div className="rounded-lg border border-slate-700/50 px-3 py-2">Android Utilities</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="experience" className="py-16">
          <SectionTitle title="Experience" subtitle="Internship timeline with outcomes" />
          <div className="space-y-5">
            {experiences.map((item, index) => (
              <motion.article key={item.title} className="glass-card relative p-6" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-brand-500 to-accent-500" />
                <p className="text-xs uppercase tracking-[0.2em] text-brand-300">{item.period}</p>
                <h3 className="mt-2 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.description}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Achievement: {item.impact}</p>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="certifications" className="py-16">
          <SectionTitle title="Certifications" subtitle="Proof of focused execution" />
          <div className="grid gap-5 md:grid-cols-3">
            {certifications.map((item) => (
              <article key={item.name} className="glass-card p-6">
                <BadgeCheck className="text-brand-400" />
                <h3 className="mt-3 font-display text-lg">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.issuer}</p>
                <a href={item.link} className="mt-4 inline-flex items-center gap-2 text-sm text-brand-300">View Certificate <ArrowUpRight size={14} /></a>
              </article>
            ))}
          </div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="achievements" className="py-16">
          <SectionTitle title="Achievements" subtitle="Signals recruiters and judges care about" />
          <div className="grid gap-5 md:grid-cols-3">
            {achievements.map((point) => (
              <article key={point} className="glass-card p-6">
                <Trophy className="text-brand-400" />
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{point}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="resume" className="py-16">
          <SectionTitle title="Resume" subtitle="ATS-friendly and recruiter-ready" />
          <div className="glass-card flex flex-col items-start justify-between gap-4 p-8 md:flex-row md:items-center">
            <p className="max-w-2xl text-slate-600 dark:text-slate-300">Download the latest ATS-friendly resume. Preview available in modal, and direct link can be updated for hosted PDF.</p>
            <div className="flex gap-3">
              <button onClick={() => setResumeOpen(true)} className="rounded-lg border border-slate-300/50 px-5 py-3 dark:border-slate-700">Preview</button>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-white" download>
                Download <Download size={16} />
              </a>
            </div>
          </div>
        </AnimatedSection>
        <SectionDivider />

        <AnimatedSection id="contact" className="py-16">
          <SectionTitle title="Contact" subtitle="Messages are delivered to rmshelar11@gmail.com" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card p-7">
              <h3 className="font-display text-2xl">Let&apos;s Build Something Big</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">If you are a recruiter, founder, or collaborator, send details here. The backend forwards every valid message to my email inbox.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail size={16} /> rmshelar11@gmail.com</p>
                <p className="flex items-center gap-2"><MapPin size={16} /> India</p>
              </div>
              <div className="mt-5 flex gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300/40 p-3 dark:border-slate-700"><Github size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300/40 p-3 dark:border-slate-700"><Linkedin size={18} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300/40 p-3 dark:border-slate-700"><ArrowUpRight size={18} /></a>
              </div>
            </div>

            <form onSubmit={submitContact} className="glass-card space-y-4 p-7">
              <input className="input" type="text" name="name" value={contactForm.name} onChange={handleContactChange} placeholder="Your Name" required />
              <input className="input" type="email" name="email" value={contactForm.email} onChange={handleContactChange} placeholder="Your Email" required />
              <input className="input" type="text" name="subject" value={contactForm.subject} onChange={handleContactChange} placeholder="Subject" required />
              <textarea className="input min-h-32" name="message" value={contactForm.message} onChange={handleContactChange} placeholder="Tell me about your requirement" required />
              <button disabled={contactStatus.state === 'loading'} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-3 font-medium text-white">
                {contactStatus.state === 'loading' ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>
              {contactStatus.message && (
                <p className={`text-sm ${contactStatus.state === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>{contactStatus.message}</p>
              )}
            </form>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-slate-300/20 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} Rohan Shelar. Designed for recruiter impact and hackathon-level storytelling.
      </footer>

      <a href="#home" className="fixed bottom-6 right-6 rounded-full bg-brand-500 p-3 text-white shadow-neon">
        <ArrowDown className="rotate-180" size={18} />
      </a>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="glass-card w-full max-w-3xl p-6" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-2xl">Resume Preview</h3>
                <button onClick={() => setResumeOpen(false)}><X /></button>
              </div>
              <div className="grid h-[60vh] place-items-center rounded-xl border border-dashed border-slate-400/40">
                <p className="text-center text-slate-500">Add `/client/public/resume.pdf` to enable embedded preview.
                  <br />
                  The download button is already configured.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div className="mb-8" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="text-xs uppercase tracking-[0.3em] text-brand-300">{title}</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl">{subtitle}</h2>
    </motion.div>
  );
}

function AnimatedSection({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section-shell section-panel ${className}`}
      initial={{ opacity: 0, y: 45, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function SectionDivider() {
  return (
    <motion.div
      className="section-divider"
      initial={{ opacity: 0, scaleX: 0.2 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.85 }}
      transition={{ duration: 0.8 }}
    />
  );
}

function SectionRail({ activeSection }) {
  return (
    <aside className="section-rail fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 xl:flex xl:flex-col xl:gap-3">
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`section-dot ${activeSection === id ? 'section-dot-active' : ''}`}
          aria-label={`Go to ${id}`}
          title={id}
        />
      ))}
    </aside>
  );
}

export default App;
