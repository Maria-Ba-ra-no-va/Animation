var mainAnimation = gsap.timeline();

mainAnimation
  .from(".hero__title", { opacity: 0, y: 50, duration: .7 })
  .from(".hero__btn", { opacity: 0, y: 30, duration: .7 }, "-=.7")
  .from(".hero__descr", { opacity: 0, duration: 1 })
  .from(".photo1", { opacity: 0, duration: 0.4, scale: 0.7 }, "-=.7")
  .from(".photo2", { opacity: 0, duration: 0.4, scale: 0.7 }, "-=.4")
  .from(".photo3", { opacity: 0, duration: 0.4, scale: 0.7 }, "-=.1")
  .from(".photos__author", { opacity: 0, duration: 1.5 }, "-=.1")

const $btnBurger = document.querySelector('.burger');
const $close = document.querySelector('.close');

var burgerAnimation = gsap.timeline({ paused: true });

burgerAnimation
  .fromTo(".menu", { opacity: 0, duration: 1, display: "none" }, { opacity: 1, duration: 1, display: "block" })
  .from(".menu__nav", { opacity: 0, y: 20, duration: 1 }, "-=.8")
  .from(".social", { opacity: 0, y: 20, duration: 1 }, "-=.5")
  .from(".menu__right", { opacity: 0, y: 20, duration: 1 }, "-=1")

$btnBurger.addEventListener("click", () => {
  burgerAnimation.play();
});

$close.addEventListener("click", () => {
  burgerAnimation.reverse();
});
