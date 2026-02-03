document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("bgContainer") || document.body; // fallback
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const yesWrapper = document.getElementById("yesWrapper");

  const noModal = document.getElementById("noModal");
  const closeModal = document.getElementById("closeModal");

  let activated = false;
  let scale = 1;

  // ANNOYING NO BUTTON
  noBtn.addEventListener("mouseenter", () => {
    // First hover → center Yes button
    if (!activated) {
      activated = true;
      yesWrapper.classList.add(
        "absolute",
        "left-1/2",
        "top-1/2",
        "-translate-x-1/2",
        "-translate-y-1/2"
      );
    }

    // Move No inside the background bounds
    noBtn.style.position = "absolute";

    const bgRect = bg.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const padding = 16;

    const maxX = bgRect.width - btnRect.width - padding;
    const maxY = bgRect.height - btnRect.height - padding;

    const x = Math.random() * 1000 - 150 / 2;
    const y = Math.random() * 500 - 100 / 2;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Panic effect
    noBtn.style.transform = `
      translateZ(0)
      rotate(${Math.random() * 10 - 5}deg)
      scale(0.95)
    `;

    // Grow Yes button
    scale += 1.5;
    yesBtn.style.transform = `scale(${scale})`;
  });

  // SHOW MODAL IF NO IS CLICKED
  noBtn.addEventListener("click", () => {
    noModal.classList.remove("opacity-0", "pointer-events-none");
    noModal.classList.add("opacity-100", "pointer-events-auto");
  });

  // CLOSE MODAL
  closeModal.addEventListener("click", () => {
    noModal.classList.add("opacity-0", "pointer-events-none");
    noModal.classList.remove("opacity-100", "pointer-events-auto");
  });

  // Optional: click outside modal to close
  noModal.addEventListener("click", (e) => {
    if (e.target === noModal) {
      noModal.classList.add("opacity-0", "pointer-events-none");
      noModal.classList.remove("opacity-100", "pointer-events-auto");
    }
  });
});