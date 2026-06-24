import { Link, useParams } from "react-router-dom";

import { flagshipProjects } from "../data/projects";
import { SectionHeading } from "../components/layout/SectionHeading";
import { DeviceStage, ScreenshotRail } from "../components/visuals/DeviceStage";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = flagshipProjects.find((item) => item.slug === slug) || flagshipProjects[0];

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
