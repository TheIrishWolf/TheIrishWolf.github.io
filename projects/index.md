---
title: Projects
layout: default
#layout: collection
permalink: /projects/
collection: projects
entries_layout: grid
---
# Projects
A list of projects I've worked on
{% assign sorted_projects = site.projects | sort: "title" %}

<div class="tag-filter-bar">
  <!-- Always include "All" -->
  <span class="tag-badge active" data-filter="all">All</span>

  {% assign all_tags = site.projects | map: "tags" | join: "," | split: "," | uniq | sort %}

  {% for tag in all_tags %}
    {% unless tag == "Featured" or tag == "" %}
      <span class="tag-badge" data-filter="{{ tag }}">{{ tag }}</span>
    {% endunless %}
  {% endfor %}
</div>

<div class="section" id="projects">
  <h2>All Projects</h2>
  <div class="projects-grid">
    {% for project in sorted_projects %}
    <div class="project-card" data-tags="{{ project.tags | join: ',' }}">
      <!-- Display project image, name, and description -->
      <img src="{{ project.image }}" alt="{{ project.title }}">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>

      <!-- Display Tag Badges -->
      <div class="project-tags">
        {% for tag in project.tags %}
          {% unless tag == "Featured" %}
            <a href="/tags/{{ tag | slugify }}" class="tag-badge">{{ tag }}</a>
          {% endunless %}
        {% endfor %}
      </div>

      <!-- Display link to project page -->
      <div class="links">
        <a href="{{ project.github }}">Full Project</a>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const filters = document.querySelectorAll("[data-filter]");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      const selected = filter.dataset.filter;

      // update active state
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");

      cards.forEach(card => {
        const tags = card.dataset.tags.split(",");

        if (selected === "all" || tags.includes(selected)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // OPTIONAL: clicking a tag on a card filters too
  const tagButtons = document.querySelectorAll(".filter-tag");

  tagButtons.forEach(tag => {
    tag.addEventListener("click", () => {
      const selected = tag.dataset.tag;

      cards.forEach(card => {
        const tags = card.dataset.tags.split(",");
        card.style.display =
          tags.includes(selected) ? "block" : "none";
      });
    });
  });
});
</script>
