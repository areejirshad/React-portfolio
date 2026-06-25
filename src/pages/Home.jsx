import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { faNodeJs as brandNode, faReact as brandReact, faShopify as brandShopify, faWordpress as brandWordpress } from "@fortawesome/free-brands-svg-icons";

import { flagshipProjects, wordpressProjects } from "../data/projects";
import { journey } from "../data/profile";

const heroRoles = ["MERN Stack Developer", "WordPress Developer & Designer", "Full Stack Developer & Designer"];

const heroTech = [
  { name: "WordPress", icon: brandWordpress },
  { name: "React", icon: brandReact },
  { name: "Node", icon: brandNode },
  { name: "Database", iconText: "DB" },
  { name: "Shopify", icon: brandShopify },
];

const skills = [
  { name: "WordPress", level: "Highest expertise", value: 96, icon: brandWordpress, note: "Themes, Elementor, WPBakery, custom CSS, PHP, forms, and launch-ready business sites." },
  { name: "React / Next.js", level: "Advanced", value: 88, icon: brandReact, note: "Premium interfaces, dashboards, registration flows, animations, and responsive app UI." },
  { name: "Node.js", level: "Strong", value: 78, icon: brandNode, note: "APIs, authentication, payments, roles, admin workflows, and production logic." },
  { name: "Databases", level: "MySQL + MongoDB", value: 76, iconText: "DB", note: "LMS data models, orders, reports, relational schemas, and flexible app storage." },
];

const stats = [
  { value: 2023, suffix: "", label: "Started WordPress journey", iconText: "WP" },
  { value: 20, suffix: "+", label: "Web builds & redesigns", iconText: "UI" },
  { value: 2, suffix: "", label: "Advanced LMS platforms", iconText: "LMS" },
  { value: 100, suffix: "%", label: "Idea to launch mindset", iconText: "GO" },
];

const storyVisuals = [
  { icon: brandWordpress, tone: "wordpress" },
  { iconText: "WEB", tone: "javascript" },
  { icon: brandReact, tone: "react" },
  { iconText: "LMS", tone: "fullstack" },
];

const services = [
  ["WEB", "Any website", "Educational, business, portfolio, agency, nonprofit, landing page, or service website with clear branding and flow."],
  ["SHOP", "Commerce", "Product pages, inquiry systems, Shopify/WordPress ecommerce, payments, and conversion-focused shopping paths."],
  ["APP", "Full-stack apps", "SaaS tools, dashboards, LMS systems, portals, admin panels, auth, APIs, databases, and custom workflows."],
  ["GO", "Idea to launch", "Bring the rough idea. I handle brand direction, UI, content structure, development, deployment, and maintenance."],
];

const testimonials = [
  {
    name: "Muhammad Hassan",
    role: "Founder, Sigma Evolution",
    image: "/showcase/testimonials/muhammad-hassan.jpg",
    logo: "/showcase/testimonials/sigmaevolution-logo.png",
    quote: "Working with Areej has been a wonderful experience. She developed our website projects as per requirements in a professional way. Highly recommended.",
  },
  {
    name: "Umme Rahil",
    role: "The Global Awakening Organization",
    image: "/showcase/testimonials/umme-rahil.png",
    logo: "/showcase/testimonials/global-awakening-logo.webp",
    quote: "It was a genuine pleasure working with Areej. She understood the platform requirements clearly, transformed ideas into effective solutions, communicated strongly, and delivered with professionalism, precision, and a solution-focused mindset.",
  },
  {
    name: "Noon Graphy",
    role: "Digital agency team",
    image: "/showcase/testimonials/noon-entrepreneur.png",
    logo: "/showcase/testimonials/noon-graphy-logo.jpeg",
    quote: "Areej supports WordPress development and design with a reliable eye for layouts, responsive polish, client revisions, and practical website delivery.",
  },
];

const contactInitialState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  engagementType: "",
  message: "",
};

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const duration = 1300;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return <strong ref={ref}>{count}{suffix}</strong>;
}

function LineIcon({ type }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    DB: <><ellipse cx="12" cy="5" rx="7" ry="3" {...common} /><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5" {...common} /><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" {...common} /></>,
    WP: <><circle cx="12" cy="12" r="9" {...common} /><path d="M6.8 8.2h10.4" {...common} /><path d="M8.2 8.2l2.5 8.8 1.9-5.5 1.9 5.5 2.8-8.8" {...common} /></>,
    UI: <><rect x="4" y="5" width="16" height="14" rx="3" {...common} /><path d="M8 9h8M8 13h4M15 13h1" {...common} /></>,
    LMS: <><path d="M4 7.5 12 4l8 3.5-8 3.5-8-3.5Z" {...common} /><path d="M7 10v5.5c2.7 1.7 7.3 1.7 10 0V10" {...common} /><path d="M20 8v6" {...common} /></>,
    GO: <><path d="M5 19c4.4-.5 8.5-2.5 12-6" {...common} /><path d="M13 5h6v6" {...common} /><path d="M19 5c-1.8 6.5-6.5 11.2-13 13" {...common} /></>,
    WEB: <><circle cx="12" cy="12" r="9" {...common} /><path d="M3 12h18M12 3c2.3 2.6 3.5 5.6 3.5 9S14.3 18.4 12 21M12 3c-2.3 2.6-3.5 5.6-3.5 9s1.2 6.4 3.5 9" {...common} /></>,
    API: <><path d="M8 8 4 12l4 4" {...common} /><path d="m16 8 4 4-4 4" {...common} /><path d="m14 5-4 14" {...common} /></>,
    SHOP: <><path d="M6 8h12l-1 12H7L6 8Z" {...common} /><path d="M9 8a3 3 0 0 1 6 0" {...common} /><path d="M9 13h6" {...common} /></>,
    APP: <><rect x="4" y="4" width="16" height="16" rx="4" {...common} /><path d="M8 9h8M8 13h3M13 13h3M8 17h8" {...common} /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type] || icons.UI}</svg>;
}

function IconBubble({ icon, iconText }) {
  return <span className="tech-icon" aria-hidden="true">{icon ? <FontAwesomeIcon icon={icon} /> : <LineIcon type={iconText} />}</span>;
}

function SkillProgress({ item, index }) {
  return (
    <article className="skill-progress" data-reveal style={{ "--value": `${item.value}%`, "--i": index }}>
      <div className="skill-progress__top">
        <IconBubble icon={item.icon} iconText={item.iconText} />
        <div><h3>{item.name}</h3><span>{item.level}</span></div>
        <strong>{item.value}%</strong>
      </div>
      <div className="skill-progress__bar"><i /></div>
      <p>{item.note}</p>
    </article>
  );
}

function StackBadge({ item }) {
  const lower = item.toLowerCase();
  const iconMap = [["react", brandReact], ["node", brandNode], ["wordpress", brandWordpress], ["shopify", brandShopify]];
  const match = iconMap.find(([key]) => lower.includes(key));
  const label = lower.includes("next") ? "N" : lower.includes("mysql") || lower.includes("prisma") ? "DB" : lower.includes("tailwind") ? "TW" : lower.includes("type") ? "TS" : item.slice(0, 2).toUpperCase();
  return <span className="stack-badge" title={item} aria-label={item}>{match ? <FontAwesomeIcon icon={match[1]} /> : <b>{label}</b>}</span>;
}

function FeaturedProject({ project }) {
  return (
    <article className="featured-card featured-card--compact" data-reveal>
      <Link to={`/case/${project.slug}`} className="featured-card__media" aria-label={`Open ${project.title} case study`}><img src={project.heroImage} alt={project.title} /></Link>
      <div className="featured-card__body">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="mini-tags mini-tags--icons">{project.stack.slice(0, 5).map((item) => <StackBadge key={item} item={item} />)}</div>
        <div className="featured-actions">
          <Link className="icon-link" to={`/case/${project.slug}`} aria-label={`View ${project.title} case study`}><LineIcon type="UI" /><span>Case study</span></Link>
          <a className="icon-link icon-link--live" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live preview`}><LineIcon type="GO" /><span>Live preview</span></a>
        </div>
      </div>
    </article>
  );
}

function WordpressStrip() {
  const first = wordpressProjects.slice(0, 6);
  const second = wordpressProjects.slice(5).concat(wordpressProjects.slice(0, 4));
  const renderCard = (project, index, suffix = "") => (
    <article className="work-tile" key={`${project.name}-${index}-${suffix}`} style={{ "--accent": project.accent || "#d6ad62" }}>
      <img src={project.image} alt={`${project.name} website mockup`} />
      <div className="work-tile__overlay">
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="work-tile__meta">
          <span>{project.tags.join(" / ")}</span>
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live website`}>Live view</a> : null}
        </div>
      </div>
    </article>
  );
  return <div className="work-marquee" aria-label="WordPress and web design project showcase"><div className="work-track">{[...first, ...first].map((project, index) => renderCard(project, index, "a"))}</div><div className="work-track work-track--reverse">{[...second, ...second].map((project, index) => renderCard(project, index, "b"))}</div></div>;
}

export default function Home() {
  const [contactForm, setContactForm] = useState(contactInitialState);
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  useEffect(() => {
    const currentRole = heroRoles[roleIndex];
    let charIndex = 0;
    setTypedRole("");

    const typingTimer = window.setInterval(() => {
      charIndex += 1;
      setTypedRole(currentRole.slice(0, charIndex));
      if (charIndex >= currentRole.length) {
        window.clearInterval(typingTimer);
        window.setTimeout(() => {
          setRoleIndex((current) => (current + 1) % heroRoles.length);
        }, 1800);
      }
    }, 92);

    return () => window.clearInterval(typingTimer);
  }, [roleIndex]);
  const handleContactChange = (event) => setContactForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const handleContactSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setFormStatus("");
    emailjs.send("service_k55cosk", "template_arnm3hj", {
      from_name: contactForm.name,
      to_name: "Areej Irshad",
      from_email: contactForm.email,
      to_email: "irshadzakia21@gmail.com",
      phone: contactForm.phone,
      message: `Phone: ${contactForm.phone || "Not provided"}\nProject type: ${contactForm.projectType || "Not selected"}\nEngagement: ${contactForm.engagementType || "Not selected"}\n\n${contactForm.message}`,
    }, "2WiDUAWcCdlAJjphv").then(() => {
      setIsSending(false);
      setContactForm(contactInitialState);
      setFormStatus("Your project idea has been sent successfully.");
    }).catch(() => {
      setIsSending(false);
      setFormStatus("Something went wrong. Please email me directly at irshadzakia21@gmail.com.");
    });
  };

  return (
    <>
      <section id="home" className="home-hero home-hero--refined">
        <div className="home-hero__copy" data-reveal>
          <span className="hero-kicker">I am Areej Irshad</span>
          <h1 className="hero-rotating-title hero-rotating-title--js" aria-label={heroRoles[roleIndex]}><span>{typedRole}</span><i aria-hidden="true" /></h1>
          <p><span className="hero-line">From Idea to Launch.</span>I build websites and full-stack products for education, business, ecommerce, SaaS, dashboards, and custom ideas, from branding and content flow to development, deployment, and maintenance.</p>
          <div className="hero-actions"><a className="button button--primary" href="#work">View work</a><a className="button button--quiet" href="#story">My journey</a></div>
        </div>
        <div className="hero-portrait" data-reveal><div className="hero-tech-orbit" aria-label="Main tech stack">{heroTech.map((item, index) => <div className="orbit-chip" key={item.name} style={{ "--i": index }}><IconBubble icon={item.icon} iconText={item.iconText} /><span>{item.name}</span></div>)}</div></div>
        <div className="hero-stats hero-stats--counters" data-reveal>{stats.map((item) => <article key={item.label}><IconBubble icon={item.icon} iconText={item.iconText} /><CountUp value={item.value} suffix={item.suffix} /><span>{item.label}</span></article>)}</div>
      </section>

      <section id="story" className="story-panel story-panel--visual section-block"><div className="story-visual story-visual--image"><img src="/showcase/hero/journey-growth-visual.png" alt="My journey from beginner designer to advanced full-stack developer" /></div><div className="story-panel__steps">{journey.map((item, index) => <article className="story-step" key={item.title} data-tone={storyVisuals[index]?.tone}><span className="story-step__icon"><IconBubble icon={storyVisuals[index]?.icon} iconText={storyVisuals[index]?.iconText} /></span><span>{item.year}</span><h3>{item.title}</h3><p>{item.text}</p><ul>{item.points.slice(0, 2).map((point) => <li key={point}>{point}</li>)}</ul><i>{String(index + 1).padStart(2, "0")}</i></article>)}</div></section>

      <section id="work" className="featured-section section-block"><div className="section-intro" data-reveal><span className="eyebrow">Featured case studies</span><h2>Flagship LMS platforms.</h2></div><div className="featured-grid">{flagshipProjects.map((project) => <FeaturedProject key={project.slug} project={project} />)}</div></section>

      <section id="capabilities" className="skills-section section-block"><div className="section-intro section-intro--center" data-reveal><span className="eyebrow">Core expertise</span><h2>Any idea, shaped into a real web experience.</h2></div><div className="skill-progress-grid">{skills.map((item, index) => <SkillProgress key={item.name} item={item} index={index} />)}</div><div className="service-flow service-flow--process">{services.map(([icon, title, text], index) => <article key={title} data-reveal style={{ "--step": String(index + 1).padStart(2, "0") }}><IconBubble iconText={icon} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="wordpress" className="wordpress-showcase section-block"><div className="section-intro" data-reveal><span className="eyebrow">WordPress & web design</span><h2>Visual demos of websites I designed and built.</h2></div><WordpressStrip /></section>

      <section className="testimonial-section section-block"><div className="section-intro section-intro--center" data-reveal><span className="eyebrow">Client-ready promise</span><h2>You bring the idea. I turn it into a live system.</h2></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name} data-reveal><div className="testimonial-card__top"><img className="testimonial-card__avatar" src={item.image} alt={item.name} />{item.logo ? <img className="testimonial-card__logo" src={item.logo} alt={`${item.role} logo`} /> : <span className="testimonial-card__mark">NG</span>}</div><p>{item.quote}</p><div><h3>{item.name}</h3><span>{item.role}</span></div></article>)}</div></section>

      <section id="contact" className="quote-section" data-reveal><div><span className="eyebrow">Let's build clearly</span><h2>Have an idea for any kind of website or full-stack app?</h2><p>Educational, business, ecommerce, SaaS, dashboard, portal, WordPress customization, or a completely custom concept. Share the idea and I can take care of branding, design, development, launch, and maintenance.</p></div><form className="quote-form" onSubmit={handleContactSubmit}><input aria-label="Name" name="name" value={contactForm.name} onChange={handleContactChange} placeholder="Your name" required /><input aria-label="Email" name="email" type="email" value={contactForm.email} onChange={handleContactChange} placeholder="Email address" required /><input aria-label="Phone number" name="phone" type="tel" value={contactForm.phone} onChange={handleContactChange} placeholder="Phone / WhatsApp number" /><select aria-label="Project type" name="projectType" value={contactForm.projectType} onChange={handleContactChange} required><option value="" disabled>Project type</option><option>WordPress website</option><option>Business website</option><option>Ecommerce / Shopify</option><option>MERN / Next.js app</option><option>SaaS / dashboard system</option><option>Educational / LMS platform</option><option>Website redesign</option></select><select aria-label="Engagement type" name="engagementType" value={contactForm.engagementType} onChange={handleContactChange}><option value="" disabled>Engagement type</option><option>Full time</option><option>Part time</option><option>Freelance / contract</option></select><textarea aria-label="Project idea" name="message" value={contactForm.message} onChange={handleContactChange} placeholder="Tell me what you want to build" required /><button className="button button--primary" type="submit" disabled={isSending}>{isSending ? "Sending..." : "Send project idea"}</button>{formStatus ? <p className="form-status">{formStatus}</p> : null}</form></section>
    </>
  );
}






