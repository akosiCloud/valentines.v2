document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card");
  const backBtn = document.getElementById("backBtn");

  // Animate card in
  requestAnimationFrame(() => {
    card.classList.remove("opacity-0", "translate-y-10");
  });

  // Animate back button slightly after
  setTimeout(() => {
    backBtn.classList.remove("opacity-0", "translate-y-4");
  }, 300);
});