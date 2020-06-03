document.addEventListener("DOMContentLoaded", () => {
  function workAppear() {
    for (let i = 1; i < 6; i++) {
      var workImg = document.getElementsByClassName("work-img")[i];
      var descrip = document.getElementsByClassName("project-descrip")[i];

      var initialPosition = workImg.getBoundingClientRect().top;
      var initialPositionText = descrip.getBoundingClientRect().top;

      var screenPosition = window.innerHeight;
      var screenPositionText = window.innerHeight / 1.2;

      if (initialPosition < screenPosition) {
        workImg.classList.add("animated");
        workImg.classList.add("fadeIn");
      }

      if (initialPositionText < screenPositionText) {
        descrip.classList.add("animated");
        descrip.classList.add("fadeIn");
      }
    }
  }

  window.addEventListener("scroll", workAppear);

  function contactAppear() {
    var contactText = document.getElementsByClassName("contact-text")[0];

    var initialPosition = contactText.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.2;

    if (initialPosition < screenPosition) {
      contactText.classList.add("animated");
      contactText.classList.add("fadeIn");
    }
  }

  window.addEventListener("scroll", contactAppear);
});
