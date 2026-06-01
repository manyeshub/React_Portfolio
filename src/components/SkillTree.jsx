import { useState } from "react";
import { skills } from "../data/portfolioData";
import audio from "./AudioController";

export default function SkillTree() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleCategoryClick = (i) => {
    setActiveCategory(i);
    setSelectedSkill(null);
    audio.navigate();
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
    audio.blip();
  };

  const getLevelLabel = (level) => {
    if (level >= 90) return "Mastered";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Proficient";
    if (level >= 40) return "Intermediate";
    return "Learning";
  };

  const getLevelColor = (level) => {
    if (level >= 90) return "#39ff14";
    if (level >= 75) return "#00f0ff";
    if (level >= 60) return "#8a2be2";
    if (level >= 40) return "#ff006e";
    return "#ff6b35";
  };

  return (
    <div className="skill-tree">
      <h3 className="section-label">
        <span className="label-icon">🌟</span> Skill Tree
      </h3>

      {/* Category Tabs */}
      <div className="skill-categories">
        {skills.map((cat, i) => (
          <button
            key={i}
            className={`skill-category-btn ${activeCategory === i ? "active" : ""}`}
            onClick={() => handleCategoryClick(i)}
          >
            <span className="cat-icon">{cat.icon}</span>
            <span className="cat-label">{cat.category}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills[activeCategory].items.map((skill, i) => (
          <div
            key={i}
            className={`skill-node ${selectedSkill?.name === skill.name ? "selected" : ""}`}
            onClick={() => handleSkillClick(skill)}
            style={{ "--skill-color": getLevelColor(skill.level) }}
          >
            <div className="skill-node-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level-badge" style={{ color: getLevelColor(skill.level) }}>
                {getLevelLabel(skill.level)}
              </span>
            </div>

            <div className="skill-xp-bar">
              <div
                className="skill-xp-fill"
                style={{
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, ${getLevelColor(skill.level)}44, ${getLevelColor(skill.level)})`,
                }}
              />
            </div>

            <div className="skill-desc">{skill.desc}</div>

            {/* Expanded detail */}
            {selectedSkill?.name === skill.name && (
              <div className="skill-expanded">
                <div className="skill-xp-detail">
                  <span>XP Level</span>
                  <span style={{ color: getLevelColor(skill.level), fontWeight: 700 }}>{skill.level}/100</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
