document.addEventListener("DOMContentLoaded", () => {
  //heading animations
  const tl = new TimelineLite({ paused: true });

  tl.fromTo(
    ".landing-first-h1",
    1,
    {
      opacity: 0,
      ease: Power2.easeIn,
    },
    {
      opacity: 1,
      ease: Power2.easeIn,
    },
    "-=0.5"
  ).fromTo(
    ".landing-first-para",
    1,
    {
      opacity: 0,
      ease: Power2.easeIn,
    },
    {
      opacity: 1,
      ease: Power2.easeIn,
    },
    "-=0.5"
  );

  function cardAppear() {
    for (let i = 1; i < 4; i++) {
      var card = document.querySelector(".card" + i);
      var initialPosition = card.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.3;

      if (initialPosition < screenPosition) {
        card.classList.add("card-appear");
      }
    }
  }

  window.addEventListener("scroll", cardAppear);

  //for only one animation
  var hasPlayed = sessionStorage.getItem("hasMyAnimationPlayed");

  if (!hasPlayed) {
    tl.play();
    sessionStorage.setItem("hasMyAnimationPlayed", true);
  } else {
    document.getElementById("animated-i'm").style.opacity = 1;
    document.getElementById("animated-name").style.opacity = 1;
    document.getElementById("animated-para").style.opacity = 1;
    document.getElementById("animated-para").style.opacity = 1;
  }
});
