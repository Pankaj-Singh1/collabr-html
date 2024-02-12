document.addEventListener("DOMContentLoaded", function () {
  const faqButtons = document.querySelectorAll("[aria-controls^='faq-']");
  const faqAnswers = document.querySelectorAll("[id^='faq-']");

  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const answerId = button.getAttribute("aria-controls");
      const answer = document.getElementById(answerId);

      // Close all other answers and remove active class from all buttons
      faqAnswers.forEach(function (faqAnswer) {
        faqAnswer.style.height = "0";
      });
      faqButtons.forEach(function (faqButton) {
        faqButton.classList.remove("bg-primary");
        faqButton.classList.remove("text-white");
        faqButton.querySelector(".plus-icon").classList.remove("hidden");
        faqButton.querySelector(".dash-icon").classList.add("hidden");
      });

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !expanded);
      answer.style.height = expanded ? "0" : answer.scrollHeight + "px";

      // Add bg-primary class to the clicked button
      if (!expanded) {
        button.classList.toggle("bg-primary");
        button.classList.toggle("text-white");
        button.querySelector(".plus-icon").classList.add("hidden");
        button.querySelector(".dash-icon").classList.remove("hidden");
      } else {
        button.querySelector(".plus-icon").classList.remove("hidden");
        button.querySelector(".dash-icon").classList.add("hidden");
      }
    });
  });
});
