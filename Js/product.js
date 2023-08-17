window.onload = function() {
  //gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.to('#nav',{duration:1,y:'0%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})      
}
const nav =document.querySelector('#nav')
const btnContainer = document.getElementsByClassName('menu__list');
const sec2 =document.querySelector('#sec2')
const sidemenu =document.querySelector('.sideMenu')
let btns = document.querySelectorAll('.menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('_active')
let sections = document.querySelectorAll('.section')
// Enable Scroll
if (document.querySelector(`[data-scroll-container]`) != undefined) {
  let locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
   
  })
  locoScroll.on('scroll', (args) => {
      if (args.delta != undefined) {
          let scrTop = args.delta.y
          if (scrTop > 80) {
          
 // change active menu on scroll           
sections.forEach(sec =>{
  let top = scrTop;
  let offset = sec.offsetTop+550;
  let height= sec.offsetHeight;
  let id =sec.getAttribute('id')
  if(top>= offset && top < offset + height){
   btns.forEach(btn=>{         
      btn.classList.remove('_active');
      document.querySelector('.menu__list .menu__item a[href*='+id + ']').classList.add('_active')
      menuActive[0].style.top =`calc(${(document.querySelector('.menu__list .menu__item a[href*='+id + ']').offsetTop)+10}px)` 
    
     })
    
  }
 })
          document.querySelector(`header`).classList.add('active')
          } else {
              document.querySelector(`header`).classList.remove('active')
          }
          if (scrTop >690.4000244140625) {    
            sidemenu.classList.add('sticky');
          } else {
            sidemenu.classList.remove('sticky');    
          }
      }
  })
}



// Mouse
let hasCircle = document.querySelectorAll(`.hasCircle`)
let mouseCircle = document.querySelector(`.mouseCircle`)
if (hasCircle.length > 0) {
    hasCircle.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            mouseCircle.classList.add('active')
        })
        el.addEventListener('mousemove', (event) => {
            let x = event.screenX
            let y = event.screenY
            mouseCircle.style.left = `${x}px`
            mouseCircle.style.top = `${y}px`
        })
        el.addEventListener('mouseleave', () => {
            mouseCircle.classList.remove('active')
        })
    })
}
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

// active images menu
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
   
    
    current[0].className = current[0].className.replace('_active', '')
     btns[i].className += ' _active'
    
    menuActive[0].style.top=`calc(${(btns[i].offsetTop)+5}px)`


  
  })
 

}
