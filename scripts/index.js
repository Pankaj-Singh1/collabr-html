const searchinput = document.getElementById("searchinput");
const search_drop = document.getElementById("search-drop");
const search_overlay = document.getElementById("searchoverlay");
const home_search_bar = document.getElementById("home-search-bar");
search_drop.classList.add("hidden");

const toggleSearch = () => {
  const isHidden = search_drop.classList.toggle("hidden");
  const isOverlayHidden = search_overlay.classList.toggle("hidden");
  if (!isHidden && !isOverlayHidden) {
    searchinput.focus();
  }
};

home_search_bar.addEventListener("click", toggleSearch);

//How it works tabs section js

// Get references to the tab elements
const brandTab = document.querySelector(".brand-tab");
const creatorTab = document.querySelector(".creator-tab");

// Get references to the content sections
const brandContent = document.querySelector(".brand-content");
const creatorContent = document.querySelector(".creator-content");

// Function to handle tab switching
function switchTabs(activeTab, inactiveTab, activeContent, inactiveContent) {
  // Add bg-black to the active tab and remove it from the inactive tab
  activeTab.classList.add("bg-black", "text-white");
  inactiveTab.classList.remove("bg-black", "text-white");

  // Show the active content and hide the inactive content
  activeContent.classList.remove("hidden");
  inactiveContent.classList.add("hidden");
}

// Add event listeners to the tabs
brandTab.addEventListener("click", () => {
  switchTabs(brandTab, creatorTab, brandContent, creatorContent);
});

creatorTab.addEventListener("click", () => {
  switchTabs(creatorTab, brandTab, creatorContent, brandContent);
});

// dropdown list for dsearch

var selectedOptionValue = "All Platforms"; // Initialize with default value

var selectedOptionValue = "All Platforms"; // Initialize with default value

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  var chevronIcon = document.getElementById("chevronIcon");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    chevronIcon.style.transform = "rotate(0deg)";
  } else {
    dropdownContent.style.display = "block";
    chevronIcon.style.transform = "rotate(180deg)";
  }
}

function selectOption(option) {
  selectedOptionValue = option.textContent;
  updateSelectedOption();
  collapseDropdown();
}

function updateSelectedOption() {
  document.getElementById("selectedOption").textContent = selectedOptionValue;
  document.getElementById("selectedOption2").textContent = selectedOptionValue;
}

function collapseDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  var chevronIcon = document.getElementById("chevronIcon");
  dropdownContent.style.display = "none";
  chevronIcon.style.transform = "rotate(0deg)";
}
