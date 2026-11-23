import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, FileSearch, GitBranch, GraduationCap, BriefcaseBusiness, Mail, Network, ShieldCheck } from 'lucide-react'
import { experience, navigation, profile, projects, skills } from './profile.js'
import './styles.css'

const icons = { clinical: BrainCircuit, document: FileSearch, shield: ShieldCheck, chart: ChartNoAxesCombined }

function Tags({ items }) {
  return <ul className="tags flex flex-wrap gap-2" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>
}

function SectionHeading({ id, label, title }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2 id={id + '-title'}>{title}</h2></div>
}

function Header() {
  return <header className="site-header">
    <div className="wrap header-inner flex flex-wrap items-center justify-between">
      <a className="brand inline-flex items-center gap-3" href="#home"><span className="monogram" aria-hidden="true">ST</span><span>{profile.name}</span></a>
      <nav className="flex flex-wrap items-center" aria-label="Main navigation">
        {navigation.map(([id, label]) => <a key={id} href={'#' + id}>{label}</a>)}
      </nav>
    </div>
  </header>
}

function Hero() {
  return <section className="hero" id="home" aria-labelledby="home-title">
    <div className="wrap hero-grid grid items-center">
      <div className="hero-content">
        <p className="eyebrow hero-role">{profile.title}</p>
        <h1 id="home-title">Sai Kumar <span>Tallapaneni</span></h1>
        <p className="hero-copy">I build AI systems that put complex data to work, from agents that review clinical evidence to models that score credit risk and forecast demand.</p>
        <div className="actions flex flex-wrap gap-3">
          <a className="button accent" href="#projects">Explore my projects <ArrowDown size={17} aria-hidden="true" /></a>
          <a className="button outline" href="#contact">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="system-graphic" aria-hidden="true">
        <div className="graphic-orbit orbit-outer"></div><div className="graphic-orbit orbit-inner"></div>
        <div className="graphic-line graphic-line-vertical"></div><div className="graphic-line graphic-line-horizontal"></div>
        <div className="graphic-core"><Network /></div>
        <div className="graphic-node node-retrieval"><FileSearch /> Retrieval</div>
        <div className="graphic-node node-agents"><BrainCircuit /> Agents</div>
        <div className="graphic-node node-evaluation"><ShieldCheck /> Evaluation</div>
        <div className="graphic-node node-serving"><ChartNoAxesCombined /> Serving</div>
      </div>
    </div>
  </section>
}

function About() {
  return <section className="section wrap about-grid grid" id="about" aria-labelledby="about-title">
    <SectionHeading id="about" label="About me" title="From prototype to production" />
    <div className="section-copy">
      <p>I’m a Senior AI Engineer with 11+ years across Python application development, data science, machine learning, and agentic AI. My experience spans healthcare, public services, banking, and retail.</p>
      <p>I build retrieval and evaluation pipelines, deploy model APIs and event-driven services, and work with domain experts to turn requirements into systems teams can operate and monitor.</p>
    </div>
  </section>
}

function ProjectCard({ project }) {
  const Icon = icons[project.icon]
  return <article className={'project-card project-' + project.icon}>
    <div className="project-meta flex items-center gap-3">
      <span className="icon-tile"><Icon size={21} aria-hidden="true" /></span>
      <p>{project.sector} <span aria-hidden="true">·</span> {project.organization}</p>
    </div>
    <h3>{project.title}</h3>
    <p>{project.summary}</p>
    <Tags items={project.stack} />
    <details className="project-details">
      <summary aria-label={'Project details for ' + project.title}>Project details <ArrowRight size={17} aria-hidden="true" /></summary>
      <div className="project-story">
        <h4>Approach</h4><p>{project.approach}</p>
        <h4>Outcome</h4><p>{project.outcome}</p>
      </div>
    </details>
  </article>
}

function Projects() {
  return <section className="project-section" id="projects" aria-labelledby="projects-title">
    <div className="section wrap">
      <SectionHeading id="projects" label="Selected projects" title="Applied AI and ML in production" />
      <div className="card-grid grid items-start">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    </div>
  </section>
}

function Skills() {
  return <section className="section wrap" id="skills" aria-labelledby="skills-title">
    <SectionHeading id="skills" label="Technical skills" title="Tools I work with" />
    <div className="card-grid grid">
      {skills.map(({ title, icon, items }) => {
        const Icon = icons[icon]
        return <article className="skill-card" key={title}><h3 className="flex items-center gap-3"><Icon size={21} aria-hidden="true" />{title}</h3><Tags items={items} /></article>
      })}
    </div>
  </section>
}

function Experience() {
  return <section className="experience-section" id="experience" aria-labelledby="experience-title">
    <div className="section wrap about-grid grid">
      <SectionHeading id="experience" label="Experience" title="Career timeline" />
      <ol className="timeline">
        {experience.map(job => <li key={job.company}>
          <p className="timeline-date">{job.dates}</p>
          <h3>{job.role}</h3>
          <p className="company">{job.company} <span>· {job.location}</span></p>
          <p>{job.description}</p>
        </li>)}
      </ol>
    </div>
  </section>
}

function Education() {
  return <section className="section wrap about-grid grid" id="education" aria-labelledby="education-title">
    <SectionHeading id="education" label="Education" title="Academic background" />
    <div className="education-card flex items-start gap-4">
      <span className="icon-tile"><GraduationCap size={24} aria-hidden="true" /></span>
      <div><h3>{profile.degree}</h3><p>{profile.school}</p></div>
    </div>
  </section>
}

function Contact() {
  return <footer id="contact" className="contact" aria-labelledby="contact-title">
    <div className="section wrap">
      <SectionHeading id="contact" label="Contact" title="Let’s connect" />
      <div className="actions flex flex-wrap gap-3">
        <a className="button accent" href={'mailto:' + profile.email}><Mail size={17} aria-hidden="true" />Email Sai</a>
        <a className="button outline" href={profile.linkedin}><BriefcaseBusiness size={17} aria-hidden="true" />LinkedIn</a>
        <a className="button outline" href={profile.github}><GitBranch size={17} aria-hidden="true" />GitHub</a>
      </div>
      <div className="footer-line flex flex-wrap items-center justify-between gap-4"><span>{profile.name} · {profile.title}</span><a href="#home">Back to top ↑</a></div>
    </div>
  </footer>
}

function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}><Hero /><About /><Projects /><Skills /><Experience /><Education /></main>
    <Contact />
  </>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
