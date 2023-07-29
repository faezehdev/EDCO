
let swiper = new Swiper(".Swiperone", {
    pagination: {
       
        clickable: true,
       
      },
      slidesPerView: 5,
      loop: true,
      spaceBetween: 10,
    //   effect: "cube",
 grabCursor: true,
 cubeEffect: {
   shadow: true,
   slideShadows: true,
   shadowOffset: 20,
   shadowScale: 0.94,
 },
 navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 });