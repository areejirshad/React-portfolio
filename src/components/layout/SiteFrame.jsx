import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import CursorAura from "../visuals/CursorAura";
import ParticleField from "../visuals/ParticleField";

const navItems = [
  ["Work", "/#work"],
  ["Story", "/#story"],
  ["Skills", "/#capabilities"],
  ["WordPress", "/#wordpress"],
];

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/in/areej-irshad-1044492b4/", faLinkedinIn],
  ["GitHub", "https://github.com/areejirshad", faGithub],
];

export default function SiteFrame({ children }) {
  return (
    <div className="site-frame">
      <ParticleField />
      <CursorAura />
      <div className="grain" />
      <div className="soft-grid" />
      <nav className="site-nav">
        <Link className="brand-lockup" to="/" aria-label="Areej Irshad portfolio home">
          <span className="brand-mark brand-mark--signature" aria-hidden="true">
            <b>AI</b>
          </span>
          <span className="brand-text brand-text--clean">
            <strong>Areej Irshad</strong>
          </span>
        </Link>
        <div className="site-nav__links">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
        <div className="site-nav__actions">
          {socialLinks.map(([label, href, icon]) => (
            <a className="social-link" key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
          <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
          <a className="nav-pill" href="/#contact">Start</a>
        </div>
      </nav>
      {children}
    </div>
  );
}


