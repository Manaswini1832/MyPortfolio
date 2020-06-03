document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dot1").addEventListener("click", function () {
    console.log("Clicked");
  });

  function textAppear() {
    for (let i = 0; i < 6; i++) {
      var valueText = document.getElementsByClassName("value-text")[i];
      var initialPosition = valueText.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.2;

      if (initialPosition < screenPosition) {
        valueText.classList.add("animated");
        valueText.classList.add("fadeInUp");
      }
    }
  }

  window.addEventListener("scroll", textAppear);

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
