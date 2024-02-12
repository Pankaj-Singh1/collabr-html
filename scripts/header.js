// Header Navigation
const m_menu = document.getElementById("m_menu");
const menubtn = document.getElementById("menubtn");
const hambtn = document.getElementById("hambtn");
const cancelbtn = document.getElementById("cancelbtn");

menubtn.addEventListener("click", () => {
  handleOpenMenu();
});

const handleOpenMenu = () => {
  if (m_menu.classList.contains("h-0")) {
    m_menu.classList.replace("h-0", "h-auto");
    hambtn.classList.add("hidden");
    cancelbtn.classList.remove("hidden");
    m_menu.style.transition = "ease-in-out 0.5s";
  } else {
    m_menu.classList.replace("h-auto", "h-0");
    hambtn.classList.remove("hidden");
    cancelbtn.classList.add("hidden");
    m_menu.style.transition = "ease-in-out 0.5s";
  }
};

// submenu toggle dexktop
function toggleSubMenu() {
  const subMenu = document.getElementById("subMenu");
  const chevronIcon = document.getElementById("chevronIcon");

  if (subMenu.classList.contains("opacity-0")) {
    subMenu.classList.remove("opacity-0", "translate-y-1");
    subMenu.classList.add("opacity-100", "translate-y-0");
    chevronIcon.style.transform = "rotate(180deg)";
  } else {
    subMenu.classList.remove("opacity-100", "translate-y-0");
    subMenu.classList.add("opacity-0", "translate-y-1");
    chevronIcon.style.transform = "rotate(0deg)";
  }
}

// submenu toggle mobile

function toggleMobileSubMenu() {
  const subMenu = document.getElementById("mobile_subMenu");
  const chevronIcon = document.getElementById("chevronIcon_mobile");

  if (subMenu.classList.contains("h-0")) {
    subMenu.classList.remove("h-0");
    subMenu.classList.add("h-auto");
    chevronIcon.style.transform = "rotate(180deg)";
  } else {
    subMenu.classList.remove("h-auto");
    subMenu.classList.add("h-0");
    chevronIcon.style.transform = "rotate(0deg)";
  }
}
