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
  .project-card{
    background:var(--card);
    border:1px solid var(--border);
    border-radius:14px;
    padding:22px;
    transition:all .25s ease;
  }
  .project-card:hover{
    transform:translateY(-6px);
    box-shadow:0 12px 28px rgba(0,0,0,.15);
  }
  .project-card p{
    color:var(--muted);
  }
  .project-card a{
    color:var(--accent);
    text-decoration:none;
    font-weight:500;
  }
  .project-card a:hover{
    text-decoration:underline;
  }
  .project-skills{
    display:inline-block;
    background:var(--card);
    order:1px solid var(--border);
    border-radius:8px;
    padding:6px 10px;
    margin:5px;
    font-size:.9rem;
  }
  
  /* SKILLS */
  .skills span{
    margin-top:20px;
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
  <strong>Delaney Fitzpatrick</strong>
  <div class="nav-links">
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </div>
</div>
<div class="hero">
  <h1>Hi, my name is Delaney</h1>
  <p>
    Maker with a passion for craft and quality.
    I enjoy creating beautiful things, solving complex problems, and helping people
  </p>
</div>

<div class="section" id="projects">
  <h2>Featured Projects</h2>
  <div class="projects-grid">
    {% for project in site.projects %}
    <div class="project-card">
      <img src="{{ project.image }}">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-skills">
        <h3 href="{{ project.skills }}"></h3>
      </div>
      <div class="links">
        <a href="{{ project.github }}">Full Project</a>
      </div>
    </div>
  {% endfor %}
  </div>
</div>

<div class="section" id="skills">
  <h2>Skills</h2>
    <div class="skills">
      <span>Woodworking</span> <span>Electronics Engineering</span> <span>PCB Design</span> <span>3D Modeling/Printing</span> <span>Git</span> <span>Linux</span> <span>Sewing</span> <span>Leatherworking</span> <span>Pyrography</span> <span>Machining</span> <span>Welding</span> <span>Bladesmithing</span> <span>Jewelry Making</span> <span>HEMA Swordplay</span> <span>Archery</span> <span>TTRPGs</span>
  </div>
</div>

<div class="section" id="contact">
  <h2>Contact</h2>
  <p>
  GitHub: https://github.com/TheIrishWolf<br>
  Email: delaneyfitzpatrick77@gmail.com
  </p>
</div>
