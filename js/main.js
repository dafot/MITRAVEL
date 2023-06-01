const burger = document.querySelector(".burger");
const close = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");
const playButtonsFirst = document.querySelectorAll(".main-slider__play");
console.log(burger);

burger.addEventListener("click", () => {
  menu.classList.add("menu--visible");
});

close.addEventListener("click", () => {
  menu.classList.remove("menu--visible");
});

playButtonsFirst.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    playButtonsFirst[0].style.opacity=0;
    let video = e.currentTarget
      .closest(".main-slider__media")
      .querySelector("video");
      video.play();
      setTimeout(() => {
        video.volume = 0.2;
      }, 1000)
  });
});
