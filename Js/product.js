
let swiper = new Swiper(".Swiperone", {
   pagination: {
      
       clickable: true,
      
     },
     loop: true,
     spaceBetween: 50,
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
let swiper1 = new Swiper(".Swipertwo", {
   pagination: {
      
       clickable: true,
      
     },
     slidesPerView: 3,
     spaceBetween: 30,
     loop: true,
  
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