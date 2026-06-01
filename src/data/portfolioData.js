// ============================================================
// portfolioData.js — Edit YOUR details here
// ============================================================

export const profile = {
  name: "Shubham Mane",
  title: "Game Developer",
  class: "Gameplay Programmer · Tech Artist",
  level: 23,
  xp: 7800,
  xpMax: 10000,
  tagline: "Crafting immersive worlds, one system at a time.",
  bio: `Passionate game developer specializing in gameplay systems, shader programming, 
and interactive experiences. From architecting combat systems to hand-crafting GPU shaders, 
I bring games to life with clean code and creative flair. Always leveling up.`,
  location: "India",
  email: "shubhammane.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubham-mane-b197a5352/",
  github: "https://github.com/shubhammane",
  itch: "https://shubhammane.itch.io",
  resume: "#",
};

export const stats = [
  { label: "Gameplay", value: 92, icon: "🎮" },
  { label: "Graphics", value: 85, icon: "🎨" },
  { label: "Systems", value: 88, icon: "⚙️" },
  { label: "Optimization", value: 80, icon: "⚡" },
  { label: "Game Jams", value: 75, icon: "🏆" },
  { label: "Caffeine", value: 99, icon: "☕" },
];

export const skills = [
  {
    category: "Languages",
    icon: "⌨️",
    items: [
      { name: "C++", level: 90, desc: "Core engine & systems programming" },
      { name: "C#", level: 92, desc: "Unity gameplay & tools scripting" },
      { name: "HLSL / GLSL", level: 78, desc: "Custom shaders & VFX pipelines" },
      { name: "Python", level: 70, desc: "Build tools & automation scripts" },
      { name: "JavaScript", level: 65, desc: "Web-based game prototypes" },
      { name: "Lua", level: 60, desc: "Modding & scripting layers" },
    ],
  },
  {
    category: "Engines & Tools",
    icon: "🛠️",
    items: [
      { name: "Unity", level: 95, desc: "Primary engine — 3+ years" },
      { name: "Unreal Engine 5", level: 80, desc: "Blueprint & C++ gameplay" },
      { name: "Godot", level: 60, desc: "Rapid prototyping & game jams" },
      { name: "Blender", level: 72, desc: "3D modeling & animation pipeline" },
      { name: "Substance Painter", level: 55, desc: "PBR texturing workflows" },
      { name: "Git / Perforce", level: 85, desc: "Version control & collaboration" },
    ],
  },
  {
    category: "Specializations",
    icon: "🎯",
    items: [
      { name: "Combat Systems", level: 88, desc: "Melee, ranged, combo trees" },
      { name: "AI / Behavior Trees", level: 82, desc: "NPC decision-making & FSMs" },
      { name: "Shader Programming", level: 78, desc: "Post-processing, toon, water" },
      { name: "Procedural Generation", level: 70, desc: "Terrain, dungeons, loot" },
      { name: "Multiplayer / Netcode", level: 65, desc: "Client-server architecture" },
      { name: "UI / UX Systems", level: 75, desc: "HUD, menus, inventory" },
    ],
  },
];

export const projects = [
  {
    title: "Hollow Descent",
    engine: "Unity",
    genre: "Action RPG",
    description:
      "A dark souls-inspired action RPG featuring hand-crafted combat systems with hitbox-based melee, stamina management, and a procedurally generated dungeon crawler. Built a custom shader pipeline for stylized toon lighting and real-time shadows.",
    tags: ["C#", "Combat System", "Procedural Gen", "Custom Shaders"],
    role: "Lead Gameplay Programmer",
    status: "Released",
    year: "2025",
    link: "#",
    github: "#",
  },
  {
    title: "Neon Circuit",
    engine: "Unreal Engine 5",
    genre: "Cyberpunk Racer",
    description:
      "High-speed anti-gravity racing game set in a neon-drenched cyberpunk city. Implemented vehicle physics, boost mechanics, dynamic track obstacles, and a replay system. Custom post-processing stack for the signature neon glow.",
    tags: ["C++", "Blueprints", "Vehicle Physics", "Post-Processing"],
    role: "Gameplay & VFX Programmer",
    status: "In Development",
    year: "2026",
    link: "#",
    github: "#",
  },
  {
    title: "Whispers in the Static",
    engine: "Unity",
    genre: "Psychological Horror",
    description:
      "A first-person psychological horror experience using spatial audio, dynamic lighting, and AI-driven scare events. Built an adaptive difficulty system that monitors player heartbeat (controller input patterns) to dynamically adjust tension.",
    tags: ["C#", "AI Director", "Spatial Audio", "Adaptive Difficulty"],
    role: "Solo Developer",
    status: "Game Jam Winner",
    year: "2024",
    link: "#",
    github: "#",
  },
  {
    title: "Forge & Frontier",
    engine: "Godot",
    genre: "Colony Sim",
    description:
      "A settlement builder with resource management, tech trees, and real-time strategy combat. Features a custom ECS-like architecture for handling 1000+ entities, procedural world generation with biome blending, and a modular building system.",
    tags: ["GDScript", "ECS", "Proc-Gen", "RTS Mechanics"],
    role: "Systems Architect",
    status: "Prototype",
    year: "2024",
    link: "#",
    github: "#",
  },
  {
    title: "Shader Playground",
    engine: "Custom WebGL",
    genre: "Tech Demo",
    description:
      "A collection of real-time shader experiments: volumetric fog, stylized water, dissolve effects, hologram projections, and procedural skyboxes. All written from scratch in GLSL with a custom WebGL renderer.",
    tags: ["GLSL", "WebGL", "Ray Marching", "Procedural"],
    role: "Graphics Programmer",
    status: "Open Source",
    year: "2023–Present",
    link: "#",
    github: "#",
  },
];

export const quests = {
  main: [
    {
      title: "Gameplay Programmer — Indie Studio",
      period: "2024 – Present",
      description:
        "Architecting combat systems, AI behavior trees, and gameplay mechanics for an unannounced action-RPG title. Collaborating with a team of 8 across art, design, and engineering.",
      achievements: [
        "Built modular combo system supporting 40+ unique attack chains",
        "Optimized entity update loop — 3x performance improvement",
        "Implemented custom navmesh solution for dynamic terrain",
      ],
      status: "active",
    },
    {
      title: "Junior Game Developer — Freelance",
      period: "2022 – 2024",
      description:
        "Delivered gameplay prototypes and technical art solutions for multiple indie clients. Specialized in Unity-based projects ranging from mobile puzzle games to PC action titles.",
      achievements: [
        "Shipped 3 titles across mobile and PC platforms",
        "Developed reusable shader library used across 5 projects",
        "Reduced build times by 40% through asset pipeline optimization",
      ],
      status: "completed",
    },
  ],
  side: [
    {
      title: "🏆 Global Game Jam 2024 — Winner",
      description: "Created 'Whispers in the Static' in 48 hours. Won Best Gameplay award.",
      status: "completed",
    },
    {
      title: "🎓 B.Tech Computer Science",
      description: "Graduated with focus on graphics programming and game engine architecture.",
      status: "completed",
    },
    {
      title: "📖 Open Source Contributor",
      description: "Contributing to Godot engine docs and community shader libraries.",
      status: "active",
    },
    {
      title: "🎮 Ludum Dare 55 — Top 100",
      description: "Solo entry placing in top 100 out of 3000+ submissions.",
      status: "completed",
    },
  ],
};

export const navItems = [
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "skills", label: "Skill Tree", icon: "🌟" },
  { id: "projects", label: "Arsenal", icon: "⚔️" },
  { id: "quests", label: "Quest Log", icon: "📜" },
  { id: "contact", label: "Co-op", icon: "🤝" },
];
