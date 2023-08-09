gsap.registerPlugin( ScrollTrigger);
const locoscroll = new LocomotiveScroll({
  el:document.querySelector('.catProductInner'),
  smooth:true
})
//gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.container #sec1 .one header nav ul li a::after',{duration:2,width:0})

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


// arrow button--------------------------------------------------------
let btn = document.querySelectorAll('.arrow')
let arrow = document.querySelectorAll('.ar')
btn.forEach((b)=>{
b.addEventListener('mousemove',()=>{
  for(let i=0;i<=arrow.length;i++)
  arrow[i].setAttribute('src','../images/icons8-left-arrow-30 (1).png')
})
b.addEventListener('mouseleave',()=>{
  for(let i=0;i<=arrow.length;i++)
  arrow[i].setAttribute('src','../images/icons8-left-arrow-30.png')
})
})
