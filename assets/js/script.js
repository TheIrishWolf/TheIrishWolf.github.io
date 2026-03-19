document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const filters = document.querySelectorAll(".tag-filter-bar .tag-badge");
  const cardTags = document.querySelectorAll(".filter-tag");

  // Get tags from URL
  const params = new URLSearchParams(window.location.search);
  let selectedTags = params.get("tag");
  selectedTags = selectedTags ? selectedTags.split(",") : ["all"];

  function applyFilter(tagsArray) {
    cards.forEach(card => {
      const cardTags = card.dataset.tags.split(",");

      if (tagsArray.includes("all")) {
        card.style.display = "block";
      } else {
        // OR logic (recommended UX)
        const match = cardTags.some(tag => tagsArray.includes(tag));
        card.style.display = match ? "block" : "none";
      }
    });

    // Update active state in filter bar
    filters.forEach(f => f.classList.remove("active"));
    filters.forEach(f => {
      if (
        tagsArray.includes(f.dataset.filter) ||
        (tagsArray.includes("all") && f.dataset.filter === "all")
      ) {
        f.classList.add("active");
      }
    });
  }
  // Make entire card clickable
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Prevent click if user clicked a link inside the card
      if (e.target.closest("a")) return;

      const url = card.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  });

  function updateURL(tagsArray) {
    const newUrl = tagsArray.includes("all")
      ? "/projects"
      : `/projects?tag=${tagsArray.join(",")}`;

    window.history.pushState({}, "", newUrl);
  }

  applyFilter(selectedTags);

  // 🔹 Filter bar clicks
  filters.forEach(filter => {
    filter.addEventListener("click", (e) => {
      e.preventDefault();
      const tag = filter.dataset.filter;

      if (tag === "all") {
        selectedTags = ["all"];
      } else {
        selectedTags = selectedTags.filter(t => t !== "all");

        if (selectedTags.includes(tag)) {
          selectedTags = selectedTags.filter(t => t !== tag);
        } else {
          selectedTags.push(tag);
        }

        if (selectedTags.length === 0) {
          selectedTags = ["all"];
        }
      }

      updateURL(selectedTags);
      applyFilter(selectedTags);
    });
  });

  // 🔹 Card tag clicks
  cardTags.forEach(tagEl => {
    tagEl.addEventListener("click", (e) => {
      e.preventDefault();

      const tag = tagEl.dataset.filter;

      selectedTags = selectedTags.filter(t => t !== "all");

      if (!selectedTags.includes(tag)) {
        selectedTags.push(tag);
      }

      if (selectedTags.length === 0) {
        selectedTags = ["all"];
      }

      updateURL(selectedTags);
      applyFilter(selectedTags);
    });
  });
});
