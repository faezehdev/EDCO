gsap.registerPlugin( ScrollTrigger);
const locoscroll = new LocomotiveScroll({
  el:document.querySelector('.list-project'),
  smooth:true
})
//gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.container #sec1 .one header nav ul li a::after',{duration:2,width:0})

const btnContainer = document.getElementsByClassName('menu__list');
let btns = btnContainer[0].getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('_active')
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
   
    current[0].className = current[0].className.replace('_active', '')
    btns[i].className += ' _active'
    menuActive[0].style.top=`calc(13px + ${i*27}px)`
 
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
   
 
  const sidemenu =document.querySelector('.list-project .sideMenu')
  window.addEventListener('scroll',(e)=>{
console.log(window.scrollY );
    if (window.scrollY >100) {    
      
        sidemenu.classList.add('sticky');
      } else {
        sidemenu.classList.remove('sticky');    
      }
})

let gcursorcontainer = gsap.utils.toArray('.box')
let gcursor =document.querySelector(".cursor");
let moveCursor = (e)=>{
  gcursor.style.display='flex'
let mouseX=e.clientX
let mouseY=e.clientY
tl =gsap.timeline()
tl.to(
  gcursor, {
    duration:1,
    x:mouseX,
    y:mouseY,
    ease:Expo.ease
  }
)
}
let initAnim =()=>{
  gcursorcontainer.forEach((item)=>{
item.addEventListener('mousemove',moveCursor)
  })
}
let init=()=>{
  initAnim()
 
}
window.addEventListener('load',init())
for(let i=0;i<gcursorcontainer.length;i++){
  gcursorcontainer[i].addEventListener('mouseleave',()=>{
    gcursor.style.display='none'
})
}