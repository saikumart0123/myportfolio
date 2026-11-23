import { ArrowDown, ArrowRight, ArrowUpRight, Download, GraduationCap } from 'lucide-react'
import { CopyEmail, Navigation } from '../components/interactions'
import { experience, principles, profile, projects, skills } from '../profile'

function ResumeLink({ primary = false }: { primary?: boolean }) {
  return <a className={'button ' + (primary ? 'gold' : 'outline')} href={profile.resume} download><Download size={17} aria-hidden="true" /> Download resume</a>
}

function SocialLinks() {
  return <div className="socials flex flex-wrap gap-x-6">
    <a href={profile.github}>GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
    <a href={profile.linkedin}>LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
  </div>
}

function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2 id={id + '-title'}>{title}</h2></div>
}

function Hero() {
  return <section className="hero wrap" id="home" aria-labelledby="home-title">
    <div className="hero-main">
      <p className="eyebrow hero-name">{profile.name}</p>
      <h1 id="home-title">Building Intelligent Systems That Solve <span>Real-World Problems.</span></h1>
      <p className="hero-copy">I’m a Senior AI/ML Engineer with 11+ years of experience building enterprise applications and production AI systems, from retrieval-augmented generation and multi-agent workflows to cloud-native services.</p>
      <div className="actions flex flex-wrap gap-3">
        <a className="button gold" href="#projects">View projects <ArrowDown size={17} aria-hidden="true" /></a><ResumeLink />
      </div>
      <SocialLinks />
    </div>
    <aside className="hero-index" aria-label="Professional focus">
      <p className="eyebrow">Engineering focus</p>
      <ul><li>Agentic AI</li><li>Generative AI</li><li>Python</li><li>Cloud engineering</li></ul>
      <div className="hero-tenure"><strong>11+</strong><span>Years of experience</span></div>
    </aside>
  </section>
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return <article className="case-study">
    <div className="case-copy">
      <p className="eyebrow">{project.sector} / {project.organization}</p>
      <h3>{project.title}</h3><p>{project.summary}</p>
      <ul className="stack flex flex-wrap" aria-label="Technologies">{project.stack.map(tool => <li key={tool}>{tool}</li>)}</ul>
      <details>
        <summary>Read case study <ArrowRight size={17} aria-hidden="true" /></summary>
        <dl className="case-details">
          <dt>Engineering challenge</dt><dd>{project.challenge}</dd>
          <dt>Engineering approach and responsibilities</dt><dd>{project.approach}</dd>
          <dt>Outcome</dt><dd>{project.outcome}</dd>
        </dl>
      </details>
    </div>
    <figure className="architecture">
      <figcaption className="eyebrow">Architecture overview</figcaption>
      <ol>{project.flow.map(step => <li key={step}>{step}</li>)}</ol>
    </figure>
  </article>
}

export default function Page() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="wrap header-row flex items-center justify-between">
      <a className="brand flex items-center gap-3" href="#home"><span className="monogram" aria-hidden="true">ST</span>{profile.name}</a>
      <Navigation />
    </div></header>
    <main id="main" tabIndex={-1}>
      <Hero />
      <section id="about" className="wrap section split" aria-labelledby="about-title">
        <SectionHeading id="about" label="About me" title="From Python services to production AI" />
        <div className="prose-copy">
          <p>I started by building Python applications for diagnostic labs, then worked on retail forecasting, financial risk models, and backend services for public benefit programs. Today I build agentic systems for clinical review.</p>
          <p>I work across the stack, from data and retrieval pipelines to APIs, deployment, and production monitoring. I collaborate with clinicians, analysts, product teams, and compliance specialists to define success and build around the ways people actually work.</p>
        </div>
      </section>
      <section id="expertise" className="band" aria-labelledby="expertise-title"><div className="wrap section">
        <SectionHeading id="expertise" label="Technical expertise" title="Tools I use in production" />
        <div className="expertise-grid">{skills.map(category => <article key={category.title}>
          <h3>{category.title}</h3><ul>{category.items.map(item => <li key={item}>{item}</li>)}</ul>
        </article>)}</div>
      </div></section>
      <section id="projects" className="wrap section" aria-labelledby="projects-title">
        <SectionHeading id="projects" label="Featured projects" title="Engineering case studies" />
        <div>{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
      </section>
      <section id="experience" className="band" aria-labelledby="experience-title"><div className="wrap section split">
        <SectionHeading id="experience" label="Professional experience" title="Career timeline" />
        <div><ol className="timeline">{experience.map(job => <li key={job.company}>
          <p className="eyebrow">{job.dates}</p><h3>{job.role}</h3><p className="company">{job.company} <span>· {job.location}</span></p>
          <p>{job.description}</p><p className="job-tech">{job.technologies}</p>
        </li>)}</ol>
        <div className="education flex items-start gap-4"><GraduationCap size={23} aria-hidden="true" /><div><p className="eyebrow">Education</p><h3>{profile.degree}</h3><p>{profile.school}</p></div></div></div>
      </div></section>
      <section className="wrap section" aria-labelledby="approach-title">
        <SectionHeading id="approach" label="Engineering approach" title="How I Approach Engineering Problems" />
        <div className="principles">{principles.map(principle => <article key={principle.title}><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div>
      </section>
    </main>
    <footer id="contact" className="band" aria-labelledby="contact-title"><div className="wrap section contact">
      <SectionHeading id="contact" label="Contact" title="Let’s Build Something Meaningful." />
      <p className="hero-copy">I’m open to discussing engineering opportunities, complex technical challenges, and teams building production-ready AI systems.</p>
      <a className="email" href={'mailto:' + profile.email}>{profile.email}</a>
      <div className="actions flex flex-wrap gap-3"><ResumeLink primary /><CopyEmail /></div>
      <SocialLinks />
      <div className="footer-line flex flex-wrap justify-between gap-4"><p>{profile.name} · {profile.title}</p><a href="#home">Back to top ↑</a></div>
    </div></footer>
  </>
}
