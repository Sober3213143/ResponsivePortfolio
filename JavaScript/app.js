//DOM Elements
const darkModeToggle = document.querySelector("#toggler");
const darkModeTogglePc = document.querySelector("#toggler-pc");
const navOpenBtn = document.querySelector("#open-btn");
const navCloseBtn = document.querySelector("#close-btn");
const navThatNeedToBeOpenAndClose = document.querySelector("#nav");
const cursor = document.querySelector("#cursor");
const loadSc = document.querySelector("#loadingScreen");

//Variable
let darkToggle = localStorage.getItem("darkToggle");

//loading
window.addEventListener("load", () => {
  loadSc.style.opacity = "0";
  loadSc.style.pointerEvents = "none";
  loadSc.addEventListener("transitionend", () => {
    loadSc.remove();
  });
});

// DarkMode Function
const enableDarkMode = () => {
  document.documentElement.style.setProperty("--text-color", "#F5F1F8");
  document.documentElement.style.setProperty("--primary-color", "#7101F9");
  document.documentElement.style.setProperty("--secondary-color", "#29015B");
  document.documentElement.style.setProperty("--bg-color", "#150727");
  localStorage.setItem("darkToggle", "enabled");
};

const disableDarkMode = () => {
  document.documentElement.style.setProperty("--text-color", "#0B070E");
  document.documentElement.style.setProperty("--primary-color", "#7606FE");
  document.documentElement.style.setProperty("--secondary-color", "#CDA4FE");
  document.documentElement.style.setProperty("--bg-color", "#E6D8F8");
  localStorage.setItem("darkToggle", null);
};

darkToggle === "enabled" ? enableDarkMode() : disableDarkMode();
darkToggle === "enabled"
  ? (darkModeToggle.innerHTML = `<i class="bx bx-sun"></i>`)
  : (darkModeToggle.innerHTML = `<i class="bx bx-moon"></i>`);

darkToggle === "enabled" ? enableDarkMode() : disableDarkMode();
darkToggle === "enabled"
  ? (darkModeTogglePc.innerHTML = `<i class="interactable bx bx-sun"></i>`)
  : (darkModeTogglePc.innerHTML = `<i class="interactable bx bx-moon"></i>`);

//Nav Function

const openNav = () => {
  navThatNeedToBeOpenAndClose.style.left = "0%";
};

const closeNav = () => {
  navThatNeedToBeOpenAndClose.style.left = "-100%";
};

//Cursor Function
window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

  const icon = document.querySelector("#cursor i");

  const x = e.clientX - cursor.offsetWidth / 2,
    y = e.clientY - cursor.offsetWidth / 2;

  const keyframe = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
  };

  cursor.animate(keyframe, {
    duration: 800,
    fill: "forwards",
  });

  if (interacting) {
    icon.style.opacity = "1";
  } else {
    icon.style.opacity = "0";
  }
};

//Event Handlers
darkModeToggle.addEventListener("click", () => {
  darkToggle = localStorage.getItem("darkToggle");
  if (darkToggle === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
  darkToggle === "enabled"
    ? (darkModeToggle.innerHTML = `<i class="bx bx-moon"></i>`)
    : (darkModeToggle.innerHTML = `<i class="bx bx-sun"></i>`);
});

darkModeTogglePc.addEventListener("click", () => {
  darkToggle = localStorage.getItem("darkToggle");
  if (darkToggle === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
  darkToggle === "enabled"
    ? (darkModeTogglePc.innerHTML = `<i class="interactable bx bx-moon"></i>`)
    : (darkModeTogglePc.innerHTML = `<i class="interactable bx bx-sun"></i>`);
});

navOpenBtn.addEventListener("click", () => {
  openNav();
});

navCloseBtn.addEventListener("click", () => {
  closeNav();
});
