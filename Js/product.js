// Enable Scroll
if (document.querySelector(`[data-scroll-container]`) != undefined) {
  let locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
  })
  locoScroll.on('scroll', (args) => {
      if (args.delta != undefined) {
          let scrTop = args.delta.y
          if (scrTop > 80) {
          
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

const btnContainer = document.getElementsByClassName('menu__list');
let btns = btnContainer[0].getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('_active')
for(let i=0;i<btns.length ; i++){

  btns[i].addEventListener('click',()=>{
    
     current[0].className = current[0].className.replace('_active', '')
     btns[i].className += ' _active'
     menuActive[0].style.top=`calc(38px + ${i*28}px)`

  })
 

  }
  const nav =document.querySelector('#nav')
  window.addEventListener('scroll',()=>{
      // if (window.scrollY > nav.offsetTop) {  
          
      //     nav.classList.add('active');
      
      //     if(window.scrollY>=700){
           
      //       current[0].className = current[0].className.replace('_active', '')
      //       btns[0].classList.add('_active')
      //       menuActive[0].style.top=`calc(38px)`
      //     }
      //     if(window.scrollY>=1000){
           
      //       current[0].className = current[0].className.replace('_active', '')
      //       btns[1].classList.add('_active')
      //       menuActive[0].style.top=`calc(38px + ${1*28}px)`
      //     }
      //     if(window.scrollY>=1600){
           
      //       current[0].className = current[0].className.replace('_active', '')
      //       btns[2].classList.add('_active')
      //       menuActive[0].style.top=`calc(38px + ${2*28}px)`
      //     }
      //     if(window.scrollY>=2060){
           
      //       current[0].className = current[0].className.replace('_active', '')
      //       btns[3].classList.add('_active')
      //       menuActive[0].style.top=`calc(38px + ${3*28}px)`
      //     }
      //    } 
      //   else {
      //     nav.classList.remove('active');    
      //   }
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

