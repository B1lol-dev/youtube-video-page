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

  // likes
  const like_btn = document.getElementById("like_btn");
  const dislike_btn = document.getElementById("dislike_btn");

  const default_like_html = like_btn.innerHTML;
  const default_dislike_html = dislike_btn.innerHTML;

  let isLiked = false,
    isDisliked = false;

  like_btn.addEventListener("click", () => {
    if (!isLiked) {
      like_btn.innerHTML = /*html*/ `
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 270 270"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
      style="transform: scale(3) rotateX(180deg) rotateY(180deg) translateY(1px) !important; margin-right: 10px; margin-left: 0.5rem"
    >
      <defs>
        <clipPath id="__lottie_element_65">
          <rect width="270" height="270" x="0" y="0"></rect>
        </clipPath>
        <clipPath id="__lottie_element_67">
          <path d="M0,0 L480,0 L480,480 L0,480z"></path>
        </clipPath>
        <clipPath id="__lottie_element_70">
          <path d="M0,0 L480,0 L480,480 L0,480z"></path>
        </clipPath>
        остальные clipPath'ы опущены для краткости
      </defs>
      <g clip-path="url(#__lottie_element_65)">
        <g
          clip-path="url(#__lottie_element_67)"
          transform="matrix(0.435,0,0,0.435,28.475,26.725)"
          opacity="1"
        >
          <g
            clip-path="url(#__lottie_element_70)"
            transform="matrix(-1,0,0,-1,480,480)"
            opacity="1"
          >
            <g transform="matrix(10,0,0,10,190,230)" opacity="1">
              <path
                fill="rgb(255,255,255)"
                fill-opacity="1"
                d=" M-4,0 C-4,0 -1,0 -1,0 C-1,0 -1,2.549999952316284 -1,10 C-1.5,10 -3.4000000953674316,10 -4,10 C-4,2.549999952316284 -4,0 -4,0z M11.770000457763672,0 C11.770000457763672,0 0,0 0,0 C0,0 0,10 0,10 C0,10 10.430000305175781,10 10.430000305175781,10 C11.489999771118164,10 12.40999984741211,9.329999923706055 12.619999885559082,8.390000343322754 C12.619999885559082,8.390000343322754 13.960000038146973,2.390000104904175 13.960000038146973,2.390000104904175 C14.229999542236328,1.149999976158142 13.180000305175781,0 11.770000457763672,0z M7.539999961853027,0 C7.8460001945495605,-1.0260000228881836 9.0600004196167,-4.940000057220459 9.0600004196167,-4.940000057220459 C9.48799991607666,-6.724999904632568 7.074999809265137,-7.5 6.179999828338623,-6.63700008392334 C5.756999969482422,-6.230000019073486 4.618000030517578,-5.001999855041504 3.8480000495910645,-4.175000190734863 C2.558000087738037,-2.7899999618530273 0,0 0,0 C0,0 5.875,5.574999809265137 7.539999961853027,0z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    
      2.2M
    `;
      isDisliked = false;
      dislike_btn.innerHTML = default_dislike_html;
      isLiked = true;
    } else {
      like_btn.innerHTML = default_like_html;
      dislike_btn.innerHTML = default_dislike_html;
      isLiked = false;
    }
  });

  dislike_btn.addEventListener("click", () => {
    if (!isDisliked) {
      dislike_btn.innerHTML = /*html*/ `
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 270 270"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
      style="transform: scale(3) translateY(1px) !important; margin-right: 10px; margin-left: 0.5rem"
    >
      <defs>
        <clipPath id="__lottie_element_65">
          <rect width="270" height="270" x="0" y="0"></rect>
        </clipPath>
        <clipPath id="__lottie_element_67">
          <path d="M0,0 L480,0 L480,480 L0,480z"></path>
        </clipPath>
        <clipPath id="__lottie_element_70">
          <path d="M0,0 L480,0 L480,480 L0,480z"></path>
        </clipPath>
        остальные clipPath'ы опущены для краткости
      </defs>
      <g clip-path="url(#__lottie_element_65)">
        <g
          clip-path="url(#__lottie_element_67)"
          transform="matrix(0.435,0,0,0.435,28.475,26.725)"
          opacity="1"
        >
          <g
            clip-path="url(#__lottie_element_70)"
            transform="matrix(-1,0,0,-1,480,480)"
            opacity="1"
          >
            <g transform="matrix(10,0,0,10,190,230)" opacity="1">
              <path
                fill="rgb(255,255,255)"
                fill-opacity="1"
                d=" M-4,0 C-4,0 -1,0 -1,0 C-1,0 -1,2.549999952316284 -1,10 C-1.5,10 -3.4000000953674316,10 -4,10 C-4,2.549999952316284 -4,0 -4,0z M11.770000457763672,0 C11.770000457763672,0 0,0 0,0 C0,0 0,10 0,10 C0,10 10.430000305175781,10 10.430000305175781,10 C11.489999771118164,10 12.40999984741211,9.329999923706055 12.619999885559082,8.390000343322754 C12.619999885559082,8.390000343322754 13.960000038146973,2.390000104904175 13.960000038146973,2.390000104904175 C14.229999542236328,1.149999976158142 13.180000305175781,0 11.770000457763672,0z M7.539999961853027,0 C7.8460001945495605,-1.0260000228881836 9.0600004196167,-4.940000057220459 9.0600004196167,-4.940000057220459 C9.48799991607666,-6.724999904632568 7.074999809265137,-7.5 6.179999828338623,-6.63700008392334 C5.756999969482422,-6.230000019073486 4.618000030517578,-5.001999855041504 3.8480000495910645,-4.175000190734863 C2.558000087738037,-2.7899999618530273 0,0 0,0 C0,0 5.875,5.574999809265137 7.539999961853027,0z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    Dislikes
    `;
      isLiked = false;
      like_btn.innerHTML = default_like_html;
      isDisliked = true;
    } else {
      dislike_btn.innerHTML = default_dislike_html;
      like_btn.innerHTML = default_like_html;
      isDisliked = false;
    }
  });

  // share
  const share_btn = document.getElementById("share_btn");
  const share_modal = document.querySelector(".share_modal");
  const share_modal_close = document.querySelector(".share_modal_close");
  let isShareOpen = false;
  share_btn.addEventListener("click", () => {
    if (isShareOpen) {
      share_modal.style.display = "";
      isShareOpen = false;
      toggleOverlay();
    } else {
      share_modal.style.display = "block";
      isShareOpen = true;
      toggleOverlay();
    }
  });
  share_modal_close.addEventListener("click", () => {
    share_modal.style.display = "";
    isShareOpen = false;
    toggleOverlay();
  });

  // overlay
  document.addEventListener("click", (e) => {
    // share
    if (
      e.target !== share_btn &&
      e.target !== share_modal_close &&
      e.target !== share_modal &&
      isShareOpen
    ) {
      share_modal.style.display = "";
      isShareOpen = false;
      toggleOverlay();
    }
  });
};
