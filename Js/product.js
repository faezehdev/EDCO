
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
     slidesPerView:4,
     spaceBetween: 60,
   //   loop: true,
  
   //   effect: "cube",
grabCursor: true,
cubeEffect: {
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
},
scrollbar: {
   el: '.swiper-scrollbar',
   draggable: true,
 
 },
navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
});
scrollPos = (el)=>{
  el.scrollIntoView({
    block:'center',
    behavior:'smooth',
   
  })
}
const btnContainer = document.getElementsByClassName('menu__list');
let btns = btnContainer[0].getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('_active')
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
    
     current[0].className = current[0].className.replace('_active', '')
     btns[i].className += ' _active'
   
     let element = document.getElementsByClassName('scroll')[i];
  element= element.getBoundingClientRect()
   console.log(element.top + document.getElementsByClassName('fixed-element')[0].offsetHeight);
window.scrollTo(0, element.top + document.getElementsByClassName('fixed-element')[0].offsetHeight+10)
    
  })
 

  }
  const nav =document.querySelector('#nav')
  window.addEventListener('scroll',()=>{
      if (window.scrollY > nav.offsetTop) {    
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');    
        }
  })


const sec2 =document.querySelector('#sec2')
  const sidemenu =document.querySelector('.sideMenu')
  window.addEventListener('scroll',(e)=>{

    if (window.scrollY >690.4000244140625) {    
        sidemenu.classList.add('sticky');
      } else {
        sidemenu.classList.remove('sticky');    
      }
})

const internalLinks=document.querySelectorAll('.scroll')
// internalLinks.forEach((link)=>{
//   link.scrollIntoView({
//     behavior:'smooth',
//     block:'center'
//   })
//   console.log(link);
// })
