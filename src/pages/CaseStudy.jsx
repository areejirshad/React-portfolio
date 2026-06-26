import { Link, useParams } from "react-router-dom";

import { flagshipProjects } from "../data/projects";
import { SectionHeading } from "../components/layout/SectionHeading";
import { DeviceStage, ScreenshotRail } from "../components/visuals/DeviceStage";

const tgaOverviewCards = [
  {
    id: "public",
    title: "Public Website Experience",
    kicker: "Frontend storytelling",
    text: "Animated homepage, Seerah course page, Gen-Mumin campaign page, mission sections, project showcases, policy pages, and conversion-focused CTAs.",
    points: ["Video-led hero and Arabic ayah motion", "Seerah and Gen-M campaign landing pages", "Responsive public pages with polished story flow"],
    href: "#public-experience",
  },
  {
    id: "registration",
    title: "Registration & Payments",
    kicker: "Enrollment engine",
    text: "A guided enrollment flow for account creation, programme selection, regional pricing, coupons, subscription/full-course plans, and payment method handling.",
    points: ["Country-based pricing and discount logic", "Stripe, PayPal, bank transfer and JazzCash/manual review", "Saved progress, order summary and confirmation states"],
    href: "#registration-flow",
  },
  {
    id: "operations",
    title: "Admin Operations",
    kicker: "Control room",
    text: "A compact admin workspace for reviewing orders, students, revenue, fee waivers, mission support, notifications, and Gen-Mumin operational visibility.",
    points: ["Orders, students, payments and fee waivers", "Donation and mission-support review", "Operational stats for fast decision-making"],
    href: "#admin-operations",
  },
];

const registrationTimeline = [
  ["Account setup", "Validated details, password confirmation, country selector, phone/WhatsApp input, and programme selection."],
  ["Pricing logic", "Region-based discounts, monthly vs full-course payment, coupons, and real-time order summary."],
  ["Payment paths", "Stripe/Card, PayPal, bank transfer, JazzCash/manual review, and clear confirmation states."],
  ["Access handoff", "Order status connects registration to student dashboard access and admin review workflows."],
];

const adminTimeline = [
  ["Dashboard overview", "Fast view of orders, revenue, pending value, fee waivers, mission support, and Gen-Mumin funding."],
  ["Order management", "Filter and review completed, pending, failed and manual payment orders with student context."],
  ["Fee warrior workflow", "Scholarship applications can be searched, opened, approved, rejected, and tracked."],
  ["Operational visibility", "Students, donations, notifications and Gen-Mumin feed stay visible for admin decisions."],
];

function FeaturePill({ children }) {
  return <span className="tga-pill">{children}</span>;
}

function TgaTimeline({ items }) {
  return (
    <div className="tga-timeline">
      {items.map(([title, text], index) => (
        <article key={title} data-reveal>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function TgaCaseStudy({ project }) {
  return (
    <>
      <section className="tga-case-hero">
        <div className="tga-case-hero__copy" data-reveal>
          <Link className="back-link" to="/">Back to portfolio</Link>
          <span className="eyebrow">Full-stack Islamic education platform</span>
          <h1>TGA Awakening case study</h1>
          <p>
            A production platform joining animated public storytelling, course registration, payments,
            student access, fee-waiver workflows, donations, and admin operations.
          </p>
          <div className="case-actions">
            <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live preview</a>
            <a className="button button--quiet" href="#registration-flow">View workflows</a>
          </div>
          <div className="tga-role-line">
            <FeaturePill>UI/UX</FeaturePill>
            <FeaturePill>Next.js</FeaturePill>
            <FeaturePill>Payments</FeaturePill>
            <FeaturePill>Admin systems</FeaturePill>
          </div>
        </div>
        <div className="tga-case-hero__visual" data-reveal>
          <img src="/showcase/mern/tga-case-public.png" alt="TGA public website, Gen-Mumin campaign and Seerah page mockup" />
        </div>
      </section>

      <section id="public-experience" className="tga-section tga-overview-section">
        <div className="section-intro" data-reveal>
          <span className="eyebrow">System overview</span>
          <h2>Three parts of the build, without making the story heavy.</h2>
        </div>
        <div className="tga-overview-grid">
          {tgaOverviewCards.map((card) => (
            <a className="tga-overview-card" href={card.href} key={card.id} data-reveal>
              <span>{card.kicker}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ul>
                {card.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <b>Explore</b>
            </a>
          ))}
        </div>
      </section>

      <section id="registration-flow" className="tga-section tga-deep-dive">
        <div className="tga-deep-dive__media" data-reveal>
          <img src="/showcase/mern/tga-case-registration.png" alt="TGA registration and payment flow mockup" />
        </div>
        <div className="tga-deep-dive__copy" data-reveal>
          <span className="eyebrow">Registration to payment</span>
          <h2>Enrollment flow with real pricing and payment decisions.</h2>
          <p>
            The registration system feels guided for parents and students while complex pricing,
            order and payment logic runs behind the scenes.
          </p>
          <TgaTimeline items={registrationTimeline} />
        </div>
      </section>

      <section id="admin-operations" className="tga-section tga-deep-dive tga-deep-dive--reverse">
        <div className="tga-deep-dive__copy" data-reveal>
          <span className="eyebrow">Admin operations</span>
          <h2>A control room for payments, students, waivers and mission support.</h2>
          <p>
            The admin system keeps operational decisions clear: what came in, what needs review,
            who has access, and where support workflows need action.
          </p>
          <TgaTimeline items={adminTimeline} />
        </div>
        <div className="tga-deep-dive__media" data-reveal>
          <img src="/showcase/mern/tga-case-admin.png" alt="TGA admin dashboard operations mockup" />
        </div>
      </section>

      <section className="tga-section tga-cta" data-reveal>
        <span className="eyebrow">Need a platform like this?</span>
        <h2>Bring the idea. I can shape the brand, pages, logic, dashboards, payments and launch path.</h2>
        <div className="case-actions">
          <a className="button button--primary" href="/#contact">Start a project</a>
          <a className="button button--quiet" href="https://wa.me/923181602388?text=Assalamu%20alaikum%20Areej%2C%20I%20want%20to%20discuss%20a%20platform%20like%20TGA." target="_blank" rel="noreferrer">Ask on WhatsApp</a>
        </div>
      </section>
    </>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = flagshipProjects.find((item) => item.slug === slug) || flagshipProjects[0];

  if (project.slug === "tga-awakening") {
    return <TgaCaseStudy project={project} />;
  }

  return (
    <>
      <section className="case-hero layout-grid">
        <div data-reveal>
          <Link className="back-link" to="/">Back to portfolio</Link>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="case-actions">
            <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live preview</a>
            <a className="button button--ghost" href="#case-features">Feature map</a>
          </div>
          <div className="metric-row">
            {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
          </div>
        </div>
        <div data-reveal>
          <DeviceStage main={project.heroImage} secondary={project.secondaryImage} label={project.title} />
        </div>
      </section>

      <section className="section-block">
        <SectionHeading eyebrow="My role" title="The work was not only UI. It was the product system behind the UI.">
          {project.role}
        </SectionHeading>
        <div className="mini-tags mini-tags--large" data-reveal>
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section-block case-impact-section">
        <SectionHeading eyebrow="Project value" title="Why this platform matters for clients." />
        <div className="case-impact-grid">
          {project.impact.map((item, index) => (
            <article key={item} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="case-features">
        <SectionHeading eyebrow="Feature system" title="The advanced parts, grouped clearly." />
        <div className="feature-system-grid">
          {project.featureGroups.map((group) => (
            <article key={group.title} data-reveal>
              <h3>{group.title}</h3>
              <ul>
                {group.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeading eyebrow="User journey" title="A clear implementation story from visitor to operations." />
        <div className="system-map system-map--wide">
          {project.journey.map(([title, text], index) => (
            <article key={title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block case-gallery-section">
        <SectionHeading eyebrow="Visual evidence" title="Screenshots are framed as readable product panels." />
        <ScreenshotRail items={project.gallery} />
      </section>

      <section className="section-block mockup-brief-section">
        <SectionHeading eyebrow="Next mockups" title="Best images to prepare for a stronger detailed page." />
        <div className="mockup-brief-list">
          {project.mockupsNeeded.map((item, index) => (
            <article key={item} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-panel" data-reveal>
        <div>
          <span className="eyebrow">Need something similar?</span>
          <h2>I can turn a rough education or business idea into a working platform.</h2>
        </div>
        <a className="button button--primary" href="mailto:irshadzakia21@gmail.com">Discuss a platform build</a>
      </section>
    </>
  );
}
