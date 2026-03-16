<style>

/* ---------- THEME VARIABLES ---------- */

:root {
  --bg: #ffffff;
  --text: #1f2933;
  --muted: #6b7280;
  --card: #f8fafc;
  --border: #e5e7eb;
  --accent: #2563eb;
}

/* Dark mode */

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --text: #e5e7eb;
    --muted: #9ca3af;
    --card: #1e293b;
    --border: #334155;
    --accent: #60a5fa;
  }
}

/* ---------- GLOBAL ---------- */

body {
  background: var(--bg);
  color: var(--text);
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  line-height: 1.6;
}

/* ---------- NAVBAR ---------- */

.navbar {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:40px;
}

.nav-links a {
  margin-left:20px;
  text-decoration:none;
  color:var(--muted);
  font-weight:500;
}

.nav-links a:hover {
  color:var(--accent);
}

/* ---------- HERO ---------- */

.hero {
  margin:60px 0;
}

.hero h1 {
  font-size:2.8rem;
  margin-bottom:10px;
}

.hero p {
  color:var(--muted);
  font-size:1.1rem;
}

/* ---------- SECTION ---------- */

.section {
  margin-top:60px;
}

/* ---------- PROJECT GRID ---------- */

.projects-grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:24px;
  margin-top:25px;
}

.card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:14px;
  padding:22px;
  transition:all 0.25s ease;
}

.card:hover {
  transform:translateY(-6px);
  box-shadow:0 12px 28px rgba(0,0,0,0.15);
}

.card h3 {
  margin-top:0;
}

.card p {
  color:var(--muted);
}

.card a {
  text-decoration:none;
  color:var(--accent);
  font-weight:500;
}

.card a:hover {
  text-decoration:underline;
}

/* ---------- SKILLS ---------- */

.skills span {
  display:inline-block;
  background:var(--card);
  border:1px solid var(--border);
  border-radius:8px;
  padding:6px 10px;
  margin:5px;
  font-size:0.9rem;
}

/* ---------- FOOTER ---------- */

.footer {
  margin-top:80px;
  padding-top:20px;
  border-top:1px solid var(--border);
  color:var(--muted);
  font-size:0.9rem;
}

</style>

<div class="navbar">

**Your Name**

<div class="nav-links">

<a href="#projects">Projects</a> <a href="#skills">Skills</a> <a href="#contact">Contact</a>

</div>
</div>

<div class="hero">

# Hi, I'm Your Name 👋

Software developer focused on building reliable, well-designed software and useful tools.

I enjoy working across the stack, contributing to open source, and learning new technologies.

</div>

---

<div class="section" id="projects">

## Featured Projects

<div class="projects-grid">

<div class="card">

### Project One

A web application designed to solve a specific problem for users.

**Tech:** React • Node.js • PostgreSQL

<a href="https://github.com/username/project-one">Repository</a> <a href="https://username.github.io/project-one">Live Demo</a>

</div>

<div class="card">

### Project Two

Automation tool that simplifies repetitive developer workflows.

**Tech:** Python • FastAPI

<a href="https://github.com/username/project-two">Repository</a>

</div>

<div class="card">

### Project Three

Experimental project exploring modern browser APIs.

**Tech:** JavaScript • Web APIs

<a href="https://github.com/username/project-three">Repository</a>

</div>

<div class="card">

### Project Four

Data visualization dashboard for interactive analytics.

**Tech:** Python • D3.js

<a href="https://github.com/username/project-four">Repository</a>

</div>

</div>

</div>

---

<div class="section" id="skills">

## Skills

<div class="skills">

<span>JavaScript</span> <span>TypeScript</span> <span>Python</span> <span>React</span> <span>Node.js</span> <span>Docker</span> <span>Git</span> <span>Linux</span>

</div>

</div>

---

<div class="section" id="contact">

## Contact

* GitHub: https://github.com/username
* LinkedIn: https://linkedin.com/in/username
* Email: [your.email@example.com](mailto:your.email@example.com)

</div>

<div class="footer">

© 2026 Your Name — Built with GitHub Pages

</div>
