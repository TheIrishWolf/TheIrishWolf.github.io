<style>

:root{
--bg:#ffffff;
--text:#1f2933;
--muted:#6b7280;
--card:#f8fafc;
--border:#e5e7eb;
--accent:#2563eb;
}

@media (prefers-color-scheme: dark){
:root{
--bg:#0f172a;
--text:#e5e7eb;
--muted:#9ca3af;
--card:#1e293b;
--border:#334155;
--accent:#60a5fa;
}
}

body{
background:var(--bg);
color:var(--text);
font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
line-height:1.6;
}

/* NAVBAR */

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:50px;
}

.nav-links a{
margin-left:20px;
text-decoration:none;
color:var(--muted);
font-weight:500;
}

.nav-links a:hover{
color:var(--accent);
}

/* HERO */

.hero{
margin:60px 0;
}

.hero h1{
font-size:2.7rem;
margin-bottom:10px;
}

.hero p{
color:var(--muted);
font-size:1.1rem;
}

/* SECTION */

.section{
margin-top:70px;
}

.section h2{
margin-bottom:20px;
}

/* PROJECT GRID */

.projects-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:24px;
}

.card{
background:var(--card);
border:1px solid var(--border);
border-radius:14px;
padding:22px;
transition:all .25s ease;
}

.card:hover{
transform:translateY(-6px);
box-shadow:0 12px 28px rgba(0,0,0,.15);
}

.card p{
color:var(--muted);
}

.card a{
color:var(--accent);
text-decoration:none;
font-weight:500;
}

.card a:hover{
text-decoration:underline;
}

/* SKILLS */

.skills span{
display:inline-block;
background:var(--card);
border:1px solid var(--border);
border-radius:8px;
padding:6px 10px;
margin:5px;
font-size:.9rem;
}

/* FOOTER */

.footer{
margin-top:80px;
padding-top:20px;
border-top:1px solid var(--border);
color:var(--muted);
font-size:.9rem;
}

</style>

<div class="navbar">

<strong>Your Name</strong>

<div class="nav-links">
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>
</div>

</div>

<div class="hero">

<h1>Hi, I'm Your Name 👋</h1>

<p>
Software developer focused on building reliable, well-designed software and useful tools.
I enjoy working across the stack, contributing to open source, and learning new technologies.
</p>

</div>

<div class="section" id="projects">

<h2>Featured Projects</h2>

<div class="projects-grid">

<div class="card">

<h3>Project One</h3>

<p>A web application designed to solve a specific problem.</p>

<p><strong>Tech:</strong> React • Node.js • PostgreSQL</p>

<a href="https://github.com/username/project-one">Repository</a><br> <a href="https://username.github.io/project-one">Live Demo</a>

</div>

<div class="card">

<h3>Project Two</h3>

<p>Automation tool that simplifies repetitive developer workflows.</p>

<p><strong>Tech:</strong> Python • FastAPI</p>

<a href="https://github.com/username/project-two">Repository</a>

</div>

<div class="card">

<h3>Project Three</h3>

<p>Experimental project exploring modern browser APIs.</p>

<p><strong>Tech:</strong> JavaScript • Web APIs</p>

<a href="https://github.com/username/project-three">Repository</a>

</div>

<div class="card">

<h3>Project Four</h3>

<p>Interactive data visualization dashboard.</p>

<p><strong>Tech:</strong> Python • D3.js</p>

<a href="https://github.com/username/project-four">Repository</a>

</div>

</div>

</div>

<div class="section" id="skills">

<h2>Skills</h2>

<div class="skills">

<span>JavaScript</span> <span>TypeScript</span> <span>Python</span> <span>React</span> <span>Node.js</span> <span>Docker</span> <span>Git</span> <span>Linux</span>

</div>

</div>

<div class="section" id="contact">

<h2>Contact</h2>

<p>
GitHub: https://github.com/username<br>
LinkedIn: https://linkedin.com/in/username<br>
Email: your.email@example.com
</p>

</div>

<div class="footer">
© 2026 Your Name — Built with GitHub Pages
</div>
