
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

 
const btnContainer = document.getElementsByClassName('menu__list');
let btns = btnContainer[0].getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('__active')
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
   
    
    current[0].className = current[0].className.replace('__active', '')
    btns[i].className += ' __active'
    menuActive[0].style.top=`calc(10px + ${i*27}px)`
    console.log(current);
  })
 

  }
  const nav =document.querySelector('#nav')
  window.addEventListener('scroll',()=>{
      if (window.scrollY > nav.offsetTop) {    
          nav.classList.add('active');
           
          if(window.scrollY>=1100){
           
            current[0].className = current[0].className.replace('__active', '')
            btns[0].classList.add('__active')
            menuActive[0].style.top=`calc(9px)`
          }
          if(window.scrollY>=1990){
           
            current[0].className = current[0].className.replace('__active', '')
            btns[1].classList.add('__active')
            menuActive[0].style.top=`calc(9px + ${1*28}px)`
          }
          if(window.scrollY>=2800){
           
            current[0].className = current[0].className.replace('__active', '')
            btns[2].classList.add('__active')
            menuActive[0].style.top=`calc(9px + ${2*28}px)`
          }
          if(window.scrollY>=3800){
           
            current[0].className = current[0].className.replace('__active', '')
            btns[3].classList.add('__active')
            menuActive[0].style.top=`calc(9px + ${3*28}px)`
          }
        } else {
          nav.classList.remove('active');    
        }
  })

 
  const sidemenu =document.querySelector('.sideMenu')
  window.addEventListener('scroll',(e)=>{
console.log(window.scrollY );
    if (window.scrollY >1000) {    
        sidemenu.classList.add('sticky');
      } else {
        sidemenu.classList.remove('sticky');    
      }
})
