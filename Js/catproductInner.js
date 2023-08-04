const nav =document.querySelector('#nav')
window.addEventListener('scroll',()=>{
    if (window.scrollY > nav.offsetTop) {    
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');    
      }
})

let swiper = new Swiper(".mySwiper", {
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
     
    },
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
