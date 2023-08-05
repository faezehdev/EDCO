
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
     menuActive[0].style.top=`calc(38px + ${i*28}px)`
     let element = document.getElementsByClassName('scroll')[i];
  element= element.getBoundingClientRect()
   console.log(element.top+ document.getElementsByClassName('fixed-element')[0].offsetHeight);
   let sc =element.top+ document.getElementsByClassName('fixed-element')[0].offsetHeight
  //  .top- document.getElementsByClassName('fixed-element')[0].offsetHeight?
window.scrollTo(0, sc+`100px`)

  })
 

  }
  const nav =document.querySelector('#nav')
  window.addEventListener('scroll',()=>{
      if (window.scrollY > nav.offsetTop) {    
          nav.classList.add('active');
         
          if(window.scrollY>=700){
           
            current[0].className = current[0].className.replace('_active', '')
            btns[0].classList.add('_active')
            menuActive[0].style.top=`calc(38px)`
          }
          if(window.scrollY>=1000){
           
            current[0].className = current[0].className.replace('_active', '')
            btns[1].classList.add('_active')
            menuActive[0].style.top=`calc(38px + ${1*28}px)`
          }
          if(window.scrollY>=1600){
           
            current[0].className = current[0].className.replace('_active', '')
            btns[2].classList.add('_active')
            menuActive[0].style.top=`calc(38px + ${2*28}px)`
          }
          if(window.scrollY>=2060){
           
            current[0].className = current[0].className.replace('_active', '')
            btns[3].classList.add('_active')
            menuActive[0].style.top=`calc(38px + ${3*28}px)`
          }
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


const cursorcontainer = document.querySelectorAll(".project .box");
const cursorBorder = document.querySelector(".cursor");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };
for(let i=0;i<cursorcontainer.length;i++){
  cursorcontainer[i].addEventListener("mousemove", (e) => {
    cursorBorder.style.display="flex"
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;
  });
  cursorcontainer[i].addEventListener("mouseleave", (e) => {
    cursorBorder.style.display="none"
    
  });
}
requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});
