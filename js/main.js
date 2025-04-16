import { header } from "./components/header.js";

header(toggleOverlay);

// overlay
function toggleOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}
