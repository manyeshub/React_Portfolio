import { useState } from "react";
import { stats } from "../data/portfolioData";

export default function StatsPanel() {
  const [hoveredStat, setHoveredStat] = useState(null);

  // Radar chart geometry
  const cx = 150,
    cy = 150,
    radius = 110;
  const count = stats.length;
  const angleStep = (Math.PI * 2) / count;

  // Build radar polygon path
  const radarPoints = stats.map((s, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const r = (s.value / 100) * radius;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  const radarPath = radarPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";

  // Grid rings
  const rings = [25, 50, 75, 100];

  return (
    <div className="stats-panel">
      <h3 className="section-label">
        <span className="label-icon">📊</span> Player Stats
      </h3>

      <div className="stats-layout">
        {/* Radar Chart */}
        <div className="radar-container">
          <svg viewBox="0 0 300 300" className="radar-svg">
            {/* Grid rings */}
            {rings.map((ring) => (
              <polygon
                key={ring}
                points={Array.from({ length: count })
                  .map((_, i) => {
                    const angle = angleStep * i - Math.PI / 2;
                    const r = (ring / 100) * radius;
                    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="rgba(0,240,255,0.08)"
                strokeWidth="1"
              />
            ))}

            {/* Axis lines */}
            {stats.map((_, i) => {
              const angle = angleStep * i - Math.PI / 2;
              return (
                <line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={cx + radius * Math.cos(angle)}
                  y2={cy + radius * Math.sin(angle)}
                  stroke="rgba(0,240,255,0.06)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Radar fill */}
            <path d={radarPath} fill="rgba(0,240,255,0.12)" stroke="rgba(0,240,255,0.6)" strokeWidth="2" />

            {/* Data points */}
            {radarPoints.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={hoveredStat === i ? 6 : 4}
                fill={hoveredStat === i ? "#00f0ff" : "rgba(0,240,255,0.8)"}
                stroke="#00f0ff"
                strokeWidth="1"
                className="radar-dot"
              />
            ))}

            {/* Labels */}
            {stats.map((s, i) => {
              const angle = angleStep * i - Math.PI / 2;
              const labelR = radius + 28;
              const lx = cx + labelR * Math.cos(angle);
              const ly = cy + labelR * Math.sin(angle);
              return (
                <text
                  key={i}
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="radar-label"
                  fill={hoveredStat === i ? "#00f0ff" : "rgba(180,200,220,0.7)"}
                  fontSize="11"
                >
                  {s.icon} {s.label}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Stat Bars */}
        <div className="stat-bars">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`stat-bar-row ${hoveredStat === i ? "active" : ""}`}
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="stat-bar-header">
                <span className="stat-bar-name">
                  {s.icon} {s.label}
                </span>
                <span className="stat-bar-value">{s.value}</span>
              </div>
              <div className="stat-bar-track">
                <div
                  className="stat-bar-fill"
                  style={{
                    width: `${s.value}%`,
                    background:
                      s.value >= 90
                        ? "linear-gradient(90deg, #00f0ff, #39ff14)"
                        : s.value >= 75
                          ? "linear-gradient(90deg, #00f0ff, #8a2be2)"
                          : "linear-gradient(90deg, #8a2be2, #ff006e)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
