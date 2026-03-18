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

<!-- Tag filter bar (with url links) -->
<div class="tag-filter-bar">
  <!-- Always include "All" -->
  <a href="/projects" class="tag-badge" data-filter="all">All</a>

  {% assign all_tags = site.projects | map: "tags" | join: "," | split: "," | uniq | sort %}

  {% for tag in all_tags %}
    {% unless tag == "Featured" or tag == "" %}
      {% assign tag_slug = tag | slugify %}
      <a href="/projects?tag={{ tag_slug }}"
         class="tag-badge"
         data-filter="{{ tag_slug }}">
        {{ tag }}
      </a>
    {% endunless %}
  {% endfor %}
</div>
<!-- Projects Grid -->
{% assign sorted_projects = site.projects | sort: "title" %}
<div class="section" id="projects">
  <h2>All Projects</h2>
  <div class="projects-grid">
    {% for project in sorted_projects %}
    <div class="project-card"
         data-tags="{% for tag in project.tags %}{{ tag | slugify }}{% unless forloop.last %},{% endunless %}{% endfor %}">
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
<!-- Javascript (move to js folder later) -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const filters = document.querySelectorAll(".tag-filter-bar .tag-badge");

  // Parse URL tags into an array
  const params = new URLSearchParams(window.location.search);
  let selectedTags = params.get("tag");
  selectedTags = selectedTags ? selectedTags.split(",") : ["all"];

  function applyFilter(tagsArray) {
    cards.forEach(card => {
      const cardTags = card.dataset.tags.split(",");

      if (tagsArray.includes("all")) {
        card.style.display = "block";
      } else {
        // Show card if it has ANY of the selected tags
        const match = tagsArray.every(tag => cardTags.includes(tag));
        card.style.display = match ? "block" : "none";
      }
    });

    // Update active state
    filters.forEach(f => f.classList.remove("active"));
    filters.forEach(f => {
      if (tagsArray.includes(f.dataset.filter)) {
        f.classList.add("active");
      } else if (tagsArray.includes("all") && f.dataset.filter === "all") {
        f.classList.add("active");
      }
    });
  }

  applyFilter(selectedTags);

  // Click handlers
  filters.forEach(filter => {
    filter.addEventListener("click", (e) => {
      e.preventDefault();
      const tag = filter.dataset.filter;

      // Update selectedTags array
      if (tag === "all") {
        selectedTags = ["all"];
      } else {
        // Remove "all" if present
        selectedTags = selectedTags.filter(t => t !== "all");

        // Toggle tag in array
        if (selectedTags.includes(tag)) {
          selectedTags = selectedTags.filter(t => t !== tag);
        } else {
          selectedTags.push(tag);
        }

        // If no tags selected, revert to "all"
        if (selectedTags.length === 0) selectedTags = ["all"];
      }

      // Update URL
      const newUrl = selectedTags.includes("all")
        ? "/projects"
        : `/projects?tag=${selectedTags.join(",")}`;
      window.history.pushState({}, "", newUrl);

      applyFilter(selectedTags);
    });
  });
});
</script>
