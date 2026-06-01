import { quests } from "../data/portfolioData";

export default function QuestLog() {
  return (
    <div className="quest-log">
      <h3 className="section-label">
        <span className="label-icon">📜</span> Quest Log
      </h3>

      <div className="quest-columns">
        {/* Main Quests */}
        <div className="quest-column">
          <h4 className="quest-column-title">
            <span className="quest-icon">⚔️</span> Main Quests
          </h4>
          {quests.main.map((q, i) => (
            <div key={i} className={`quest-card main-quest ${q.status}`}>
              <div className="quest-status-indicator">
                {q.status === "active" ? (
                  <span className="status-pulse active" />
                ) : (
                  <span className="status-check">✓</span>
                )}
              </div>
              <div className="quest-content">
                <h5 className="quest-title">{q.title}</h5>
                <span className="quest-period">{q.period}</span>
                <p className="quest-description">{q.description}</p>
                <ul className="quest-achievements">
                  {q.achievements.map((a, j) => (
                    <li key={j}>
                      <span className="achievement-icon">★</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Side Quests */}
        <div className="quest-column">
          <h4 className="quest-column-title">
            <span className="quest-icon">🗡️</span> Side Quests
          </h4>
          {quests.side.map((q, i) => (
            <div key={i} className={`quest-card side-quest ${q.status}`}>
              <div className="quest-status-indicator">
                {q.status === "active" ? (
                  <span className="status-pulse active" />
                ) : (
                  <span className="status-check">✓</span>
                )}
              </div>
              <div className="quest-content">
                <h5 className="quest-title">{q.title}</h5>
                <p className="quest-description">{q.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
