import { useState } from "react";
import { projects } from "../data/portfolioData";
import audio from "./AudioController";

export default function ProjectCarousel() {
  const [activeProject, setActiveProject] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handlePrev = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setExpanded(false);
    audio.navigate();
  };

  const handleNext = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setExpanded(false);
    audio.navigate();
  };

  const handleExpand = () => {
    setExpanded(!expanded);
    audio.blip();
  };

  const project = projects[activeProject];

  const statusColors = {
    Released: "#39ff14",
    "In Development": "#00f0ff",
    "Game Jam Winner": "#ffd700",
    Prototype: "#8a2be2",
    "Open Source": "#ff006e",
  };

  return (
    <div className="project-carousel">
      <h3 className="section-label">
        <span className="label-icon">⚔️</span> Weapon Arsenal
      </h3>

      {/* Navigation */}
      <div className="carousel-nav">
        <button className="carousel-btn" onClick={handlePrev} aria-label="Previous project">
          ◀
        </button>
        <div className="carousel-indicator">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`carousel-dot ${i === activeProject ? "active" : ""}`}
              onClick={() => {
                setActiveProject(i);
                setExpanded(false);
                audio.blip();
              }}
            />
          ))}
        </div>
        <button className="carousel-btn" onClick={handleNext} aria-label="Next project">
          ▶
        </button>
      </div>

      {/* Project Card */}
      <div className="project-card" key={activeProject}>
        <div className="project-header">
          <div className="project-title-row">
            <h4 className="project-title">{project.title}</h4>
            <span
              className="project-status"
              style={{
                color: statusColors[project.status] || "#aaa",
                borderColor: statusColors[project.status] || "#aaa",
              }}
            >
              {project.status}
            </span>
          </div>
          <div className="project-meta">
            <span className="project-engine">🛠️ {project.engine}</span>
            <span className="project-genre">🎮 {project.genre}</span>
            <span className="project-year">📅 {project.year}</span>
          </div>
        </div>

        <p className="project-role">{project.role}</p>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button className="expand-btn" onClick={handleExpand}>
          {expanded ? "▲ Collapse Intel" : "▼ Expand Intel"}
        </button>

        {expanded && (
          <div className="project-expanded">
            <div className="project-links">
              {project.link && project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  🎮 Play
                </a>
              )}
              {project.github && project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  📂 Source
                </a>
              )}
              {((!project.link || project.link === "#") && (!project.github || project.github === "#")) && (
                <span className="project-link-placeholder">🔒 Links coming soon</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
