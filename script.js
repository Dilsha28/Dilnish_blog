const buttons = document.querySelectorAll(".filter-btn");
const posts = document.querySelectorAll(".post-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    let category = button.dataset.category;

    posts.forEach(post => {
      if (category === "all" || post.dataset.category === category) {
        post.classList.remove("hidden");
      } else {
        post.classList.add("hidden");
      }
    });
  });
});

const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.innerHTML = "☀️";
  } else {
    toggle.innerHTML = "🌙";
  }
});

document.getElementById("welcomeBtn").addEventListener("click", function() {
  alert("Welcome to TechBloom 💜");
});