export const header = (toggleOverlay) => {
  // nav left
  const nav_burger = document.getElementById("nav_burger");
  const sidebar = document.querySelector(".sidebar");
  let isSidebarOpen = false;
  nav_burger.addEventListener("click", () => {
    if (isSidebarOpen) {
      sidebar.style.transform = "";
      isSidebarOpen = false;
      toggleOverlay();
    } else {
      sidebar.style.transform = "translateX(0%)";
      isSidebarOpen = true;
      toggleOverlay();
    }
  });

  // nav search
  const nav_search_mic = document.getElementById("nav_search_mic");
  const nav_search_mic_modal = document.querySelector(".nav_search_mic_modal");
  let isMicOpen = false;
  nav_search_mic.addEventListener("click", () => {
    if (isMicOpen) {
      nav_search_mic_modal.style.display = "";
      isMicOpen = false;
      toggleOverlay();
    } else {
      nav_search_mic_modal.style.display = "block";
      isMicOpen = true;
      toggleOverlay();
    }
  });
  nav_search_mic_modal.children[0].addEventListener("click", () => {
    nav_search_mic_modal.style.display = "";
    isMicOpen = false;
    toggleOverlay();
  });

  // nav right
  const nav_create = document.getElementById("nav_create");
  const nav_create_modal = document.querySelector(".nav_create_modal");
  let isCreateOpen = false;
  nav_create.addEventListener("click", () => {
    if (isCreateOpen) {
      nav_create_modal.style.display = "";
      isCreateOpen = false;
      toggleOverlay();
    } else {
      nav_create_modal.style.display = "block";
      isCreateOpen = true;
      toggleOverlay();
    }
  });

  const nav_bell = document.getElementById("nav_bell");
  const nav_bell_modal = document.querySelector(".nav_bell_modal");
  let isBellOpen = false;
  nav_bell.addEventListener("click", () => {
    if (isBellOpen) {
      nav_bell_modal.style.display = "";
      isBellOpen = false;
      toggleOverlay();
    } else {
      nav_bell_modal.style.display = "block";
      isBellOpen = true;
      toggleOverlay();
    }
  });

  const nav_profile = document.getElementById("nav_profile");
  const nav_profile_modal = document.querySelector(".nav_profile_modal");
  let isProfileOpen = false;
  nav_profile.addEventListener("click", () => {
    if (isProfileOpen) {
      nav_profile_modal.style.display = "";
      isProfileOpen = false;
      toggleOverlay();
    } else {
      nav_profile_modal.style.display = "block";
      isProfileOpen = true;
      toggleOverlay();
    }
  });

  // overlay
  document.addEventListener("click", (e) => {
    // sidebar
    if (e.target !== sidebar && e.target !== nav_burger && isSidebarOpen) {
      sidebar.style.transform = "";
      isSidebarOpen = false;
      toggleOverlay();
    }

    // mic
    if (
      e.target !== nav_search_mic &&
      e.target !== nav_search_mic_modal &&
      e.target !== nav_search_mic_modal.children[0] &&
      isMicOpen
    ) {
      nav_search_mic_modal.style.display = "";
      toggleOverlay();
      isMicOpen = false;
    }

    // create
    if (
      e.target !== nav_create &&
      e.target !== nav_create_modal &&
      isCreateOpen
    ) {
      nav_create_modal.style.display = "";
      isCreateOpen = false;
      toggleOverlay();
    }

    // bell
    if (e.target !== nav_bell && e.target !== nav_bell_modal && isBellOpen) {
      nav_bell_modal.style.display = "";
      isBellOpen = false;
      toggleOverlay();
    }

    // profile
    if (
      e.target !== nav_profile &&
      e.target !== nav_profile_modal &&
      isProfileOpen
    ) {
      nav_profile_modal.style.display = "";
      isProfileOpen = false;
      toggleOverlay();
    }
  });
};
