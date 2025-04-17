export const main_video = (toggleOverlay) => {
  // set video title
  document.querySelector(".main_video_title").innerText =
    "Undertale - Megolovania";

  // subscribe button
  const subscribe_btn = document.querySelector(".subscribe_btn");
  let isSubscribed = false;
  subscribe_btn.addEventListener("click", () => {
    isSubscribed = !isSubscribed;
    subscribe_btn.innerText = isSubscribed ? "Subscribed" : "Subscribe";
    subscribe_btn.classList.toggle("subscribed");
  });
};
