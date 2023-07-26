// let swiperone = new Swiper(".mySwiper1", {
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
       
//       },
//       spaceBetween: 50,
//       effect: "cube",
//  grabCursor: true,
//  cubeEffect: {
//    shadow: true,
//    slideShadows: true,
//    shadowOffset: 20,
//    shadowScale: 0.94,
//  },
//  navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   }
// });
// var swipertwo = new Swiper(".Swipertwo", {
//     slidesPerView: 1,
//     centeredSlides: false,
//     slidesPerGroupSkip: 1,
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//     },
//     breakpoints: {
//       769: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       },
//     },
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

const items = document.querySelectorAll(".menu__item")
const marker = document.querySelector(".menu__active")
console.log(items);
items.forEach((item)=>{
item.addEventListener('click',(e)=>{
    indicator(e.target)
})
})
function indicator(item){
    console.log(item.offsetTop);
marker.style.top = item.offsetTop;

}
