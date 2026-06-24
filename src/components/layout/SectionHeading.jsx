export function SectionHeading({ eyebrow, title, children, align = "left" }) {
  return (
    <header className={`section-heading ${align === "center" ? "section-heading--center" : ""}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </header>
  );
}