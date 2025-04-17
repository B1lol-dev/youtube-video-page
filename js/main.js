import { header } from "./components/header.js";
import { main_video } from "./components/main_video.js";

header(toggleOverlay);
main_video(toggleOverlay);

// overlay
function toggleOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}
