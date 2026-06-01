import { useState } from "react";
import audio from "./AudioController";

const QUEST_TYPES = [
  { id: "contract", label: "📋 Contract Work", desc: "Paid freelance project" },
  { id: "fulltime", label: "🏢 Full-Time Role", desc: "Join the party permanently" },
  { id: "gamejam", label: "🎮 Game Jam Collab", desc: "Team up for a jam" },
  { id: "chat", label: "💬 Just Chat", desc: "Say hello!" },
];

export default function CoopForm() {
  const [form, setForm] = useState({ name: "", email: "", questType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Player name required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.questType) errs.questType = "Select a quest type";
    if (!form.message.trim()) errs.message = "Message required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      audio.error();
      return;
    }
    setErrors({});
    audio.unlock();
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  if (submitted) {
    return (
      <div className="coop-form">
        <h3 className="section-label">
          <span className="label-icon">🤝</span> Co-op Lobby
        </h3>
        <div className="coop-success">
          <div className="success-icon">🎮</div>
          <h4>Quest Request Sent!</h4>
          <p>Your co-op request has been queued. I&apos;ll respond within 24 hours.</p>
          <button
            className="reset-btn"
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", questType: "", message: "" });
              audio.blip();
            }}
          >
            ↻ Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="coop-form">
      <h3 className="section-label">
        <span className="label-icon">🤝</span> Co-op Lobby
      </h3>
      <p className="coop-subtitle">Ready to team up? Select your quest type and drop a message.</p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Quest Type Selection */}
        <div className="form-group">
          <label className="form-label">Quest Objective</label>
          <div className="quest-type-grid">
            {QUEST_TYPES.map((qt) => (
              <button
                key={qt.id}
                type="button"
                className={`quest-type-btn ${form.questType === qt.id ? "selected" : ""}`}
                onClick={() => {
                  handleChange("questType", qt.id);
                  audio.blip();
                }}
              >
                <span className="qt-label">{qt.label}</span>
                <span className="qt-desc">{qt.desc}</span>
              </button>
            ))}
          </div>
          {errors.questType && <span className="form-error">{errors.questType}</span>}
        </div>

        {/* Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="coop-name">
            Player Name
          </label>
          <input
            id="coop-name"
            type="text"
            className={`form-input ${errors.name ? "input-error" : ""}`}
            placeholder="Enter your name..."
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label" htmlFor="coop-email">
            Contact Frequency
          </label>
          <input
            id="coop-email"
            type="email"
            className={`form-input ${errors.email ? "input-error" : ""}`}
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        {/* Message */}
        <div className="form-group">
          <label className="form-label" htmlFor="coop-message">
            Mission Briefing
          </label>
          <textarea
            id="coop-message"
            className={`form-input form-textarea ${errors.message ? "input-error" : ""}`}
            placeholder="Describe your quest..."
            rows={4}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn" onClick={() => audio.whoosh()}>
          <span className="submit-icon">🚀</span> Send Quest Request
        </button>
      </form>
    </div>
  );
}
