const filterButtons = document.querySelectorAll(".filter-btn");
const posts = document.querySelectorAll(".post-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    posts.forEach(post => {
      if (category === "all" || post.dataset.category === category) {
        post.classList.remove("hidden");
      } else {
        post.classList.add("hidden");
      }
    });
  });
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.innerHTML = "☀️";
  } else {
    themeToggle.innerHTML = "🌙";
  }
});

let visits = localStorage.getItem("visits");

if (!visits) {
  visits = 1;
} else {
  visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);
document.getElementById("visitorCount").textContent = visits;

function downloadMessage() {
  alert("Free resource coming soon 💜 You can add a PDF later.");
}

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! Your message section is ready. Later we can connect this to email.");
});