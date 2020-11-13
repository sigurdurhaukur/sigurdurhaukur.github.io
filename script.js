// parrallax
window.addEventListener("scroll", function (e) {
  const target = document.querySelectorAll(".scroll");

  var index = 0,
    length = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if (target[index].dataset.direction === "vertical") {
      target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.ratey;

      target[index].style.transform =
        "translate3d(" + posX + "px, " + posY + "px, 0px)";
    }
  }
});

// fade / slide in
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
