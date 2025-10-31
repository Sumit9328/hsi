document.addEventListener("DOMContentLoaded", () => {
  // Open popup
  document.querySelectorAll(".emi-button").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const overlay = document.getElementById(targetId);
      if (overlay) overlay.style.display = "flex";
    });
  });

  // Close popup
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-popup")) {
      e.target.closest(".emi-overlay").style.display = "none";
    }
    if (e.target.classList.contains("emi-overlay")) {
      e.target.style.display = "none";
    }
  });
});
