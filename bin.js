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
