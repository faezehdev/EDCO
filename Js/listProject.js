let header=document.querySelector('.bg')
window.onload = function() {
  //gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.to('#nav',{duration:1,y:'0%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})      
header.classList.remove('bg')    
}
const sidemenu =document.querySelector('.list-project .sideMenu')   
const btnContainer = document.getElementsByClassName('menu__list');
let btns = btnContainer[0].getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('_active')
let projects= document.querySelectorAll('.box')
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
          if (scrTop > 100) {
            sidemenu.classList.add('sticky');
          } else {
            sidemenu.classList.remove('sticky'); 
          }
      }
  })
}
// active projects menu
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
    current[0].className = current[0].className.replace('_active', '')
     btns[i].className += ' _active'
     menuActive[0].style.top=`calc(${(btns[i].offsetTop)+5}px)`
  })
}
//set href attr
window.addEventListener('load',()=>{
  for(let d = 0 ; d<projects.length;d++){
    let projectId= `project${d}`
    projects[d].setAttribute('id',projectId)
  }
  })
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
