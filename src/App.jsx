import { useState, useEffect } from "react";
import CanvasBackground from "./components/CanvasBackground";
import StatsPanel from "./components/StatsPanel";
import SkillTree from "./components/SkillTree";
import ProjectCarousel from "./components/ProjectCarousel";
import QuestLog from "./components/QuestLog";
import CoopForm from "./components/CoopForm";
import audio from "./components/AudioController";
import { profile, navItems } from "./data/portfolioData";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("profile");
  const [muted, setMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize audio on first user interaction
  useEffect(() => {
    const initAudio = () => {
      audio.init();
      window.removeEventListener("click", initAudio);
    };
    window.addEventListener("click", initAudio);
    return () => window.removeEventListener("click", initAudio);
  }, []);

  const handleNav = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    audio.navigate();
  };

  const handleSoundToggle = () => {
    audio.init();
    const isMuted = audio.toggle();
    setMuted(isMuted);
    if (!isMuted) audio.blip();
  };

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="profile-section">
            <div className="hud-panel profile-card">
              <div className="profile-header">
                <div className="profile-avatar">🎮</div>
                <div className="profile-info">
                  <h1 className="profile-name">{profile.name}</h1>
                  <p className="profile-class">{profile.class}</p>
                  <div className="profile-level">
                    <span className="level-badge">LVL {profile.level}</span>
                    <div className="xp-bar-container">
                      <div className="xp-bar-track">
                        <div
                          className="xp-bar-fill"
                          style={{ width: `${(profile.xp / profile.xpMax) * 100}%` }}
                        />
                      </div>
                      <div className="xp-text">
                        {profile.xp.toLocaleString()} / {profile.xpMax.toLocaleString()} XP
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="profile-tagline">&gt; {profile.tagline}</p>
              <p className="profile-bio">{profile.bio}</p>

              <div className="profile-links">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  onClick={() => audio.blip()}
                >
                  <span className="profile-link-icon">💼</span> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  onClick={() => audio.blip()}
                >
                  <span className="profile-link-icon">📂</span> GitHub
                </a>
                <a
                  href={profile.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  onClick={() => audio.blip()}
                >
                  <span className="profile-link-icon">🕹️</span> Itch.io
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="profile-link"
                  onClick={() => audio.blip()}
                >
                  <span className="profile-link-icon">📧</span> Email
                </a>
              </div>
            </div>

            <div className="hud-panel">
              <StatsPanel />
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="hud-panel">
            <SkillTree />
          </div>
        );

      case "projects":
        return (
          <div className="hud-panel">
            <ProjectCarousel />
          </div>
        );

      case "quests":
        return (
          <div className="hud-panel">
            <QuestLog />
          </div>
        );

      case "contact":
        return (
          <div className="hud-panel">
            <CoopForm />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <CanvasBackground />

      <div className="app-container">
        {/* Top HUD Bar */}
        <header className="hud-topbar">
          <div className="hud-logo">
            <span className="logo-bracket">[</span> {profile.name.toUpperCase()}{" "}
            <span className="logo-bracket">]</span>
          </div>

          {/* Desktop Nav */}
          <nav className={`hud-nav ${mobileMenuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-tab ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleNav(item.id)}
              >
                <span className="nav-tab-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hud-controls">
            <button
              className={`sound-toggle ${muted ? "muted" : ""}`}
              onClick={handleSoundToggle}
              aria-label={muted ? "Unmute sound" : "Mute sound"}
              title={muted ? "Unmute" : "Mute"}
            >
              {muted ? "🔇" : "🔊"}
            </button>

            {/* Mobile hamburger */}
            <button
              className="mobile-menu-toggle"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                audio.blip();
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">{renderSection()}</main>

        {/* Footer */}
        <footer className="hud-footer">
          <p className="footer-text">
            Designed & built by{" "}
            <span className="footer-highlight">{profile.name}</span> ·{" "}
            {new Date().getFullYear()} · Powered by{" "}
            <span className="footer-highlight">React + Vite</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
