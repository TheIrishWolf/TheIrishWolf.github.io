---
title: Projects
layout: default
permalink: /projects/
collection: projects
entries_layout: grid
---
# Projects
A list of projects I've worked on

<!-- Tag filter bar -->
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
      data-url="{{ project.url }}"
      data-tags="{% for tag in project.tags %}{{ tag | slugify }}{% unless forloop.last %},{% endunless %}{% endfor %}">
      <!-- Display project image, name, and description -->
      <img src="{{ project.image }}" alt="{{ project.title }}">
      <h3>{{ project.title }}</h3>
      <desc>{{ project.description }}</desc>

      <!-- Display Tag Badges -->
      <div class="project-tags">
        {% for tag in project.tags %}
          {% unless tag == "Featured" %}
            < href="/projects?tag={{ tag | slugify }}"
               class="tag-badge filter-tag"
               data-filter="{{ tag | slugify }}">
              {{ tag }}
            </a>
          {% endunless %}
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>
