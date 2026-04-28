// Blog category filter
const filterButtons = document.querySelectorAll(".filter-btn");
const posts = document.querySelectorAll(".post-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    posts.forEach(post => {
      const postCategory = post.dataset.category;

      if (category === "all" || postCategory === category) {
        post.classList.remove("hidden");
      } else {
        post.classList.add("hidden");
      }
    });
  });
});

// Dark / light mode with saved preference
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "🌙";
  }
});

// Local visit counter
let visits = localStorage.getItem("visits");

if (!visits) {
  visits = 1;
} else {
  visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);

const visitorCount = document.getElementById("visitorCount");

if (visitorCount) {
  visitorCount.textContent = visits;
}

// Free resource button
function downloadMessage() {
  alert("Free resume checklist coming soon 💜");
}

// Contact form message
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you 💜 Your message form is ready. Next, we can connect it to email using Formspree.");
    contactForm.reset();
  });
}

// Track blog link clicks in Google Analytics
const blogLinks = document.querySelectorAll(".post-card a");

blogLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "blog_link_click", {
        link_text: link.textContent.trim(),
        link_url: link.href
      });
    }
  });
});