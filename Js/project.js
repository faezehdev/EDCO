window.onload = function() {
  //gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.to('#nav',{duration:1,y:'0%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})      
}
const nav =document.querySelector('#nav')
const btnContainer = document.getElementsByClassName('menu__list');
let btns = document.querySelectorAll('.menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('__active')
let images = document.querySelectorAll('.img')
let imagelinkbtn=document.querySelectorAll('a.menu__link')
let imageContainer=document.querySelector('.projectImages')
const sidemenu =document.querySelector('.sideMenu')
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
          // change active menu on scroll           
           images.forEach(img =>{
            let top = scrTop;
            let offset = img.offsetTop+1000;
            let height= img.offsetHeight;
            let id = img.getAttribute('id')
            if(top>= offset && top < offset + height){
                 btns.forEach(btn=>{         
                 btn.classList.remove('__active');
                 document.querySelector('.menu__list .menu__item a[href*='+id + ']').classList.add('__active')
                 menuActive[0].style.top =`calc(${(document.querySelector('.menu__list .menu__item a[href*='+id + ']').offsetTop)+10}px)`              
             })   
          }
         })
              document.querySelector(`header`).classList.add('active')
          } else {
              document.querySelector(`header`).classList.remove('active')
          } 
      }
  })
}
//set image id and href btns 
window.addEventListener('load',()=>{
   
     for(let d = 0 ; d<images.length;d++){
       let imageId= `pic${d}`
        images[d].setAttribute('id',imageId)
       imagelinkbtn[d].setAttribute('href',`#${imageId}`)
      }
     
     })
// active images menu by click
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
    current[0].className = current[0].className.replace('__active', '')
     btns[i].className += ' __active'
    menuActive[0].style.top=`calc(${(btns[i].offsetTop)+5}px)`
  })
}
//swipper
let swiper = new Swiper(".Swipertwo", {
    pagination: {
       
        clickable: true,
       
      },
      slidesPerView: 5,
      loop: true,
      spaceBetween:-85,

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
