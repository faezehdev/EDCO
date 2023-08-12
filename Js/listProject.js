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
            console.log('l');
              document.querySelector(`header`).classList.add('active')
          } else {
              document.querySelector(`header`).classList.remove('active')
          }
          if (scrTop > 100) {
            console.log('baa');
            sidemenu.classList.add('sticky');
          } else {
            sidemenu.classList.remove('sticky'); 
          }
      }
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
    menuActive[0].style.top=`calc(13px + ${i*27}px)`
 
  })
 

  }
  // const nav =document.querySelector('#nav')
  // window.addEventListener('scroll',()=>{
  //     if (window.scrollY > nav.offsetTop) {    
  //         nav.classList.add('active');
  //       } else {
  //         nav.classList.remove('active');    
  //       }
  // })
  const sidemenu =document.querySelector('.list-project .sideMenu')   
//   locoScroll.on('scroll', (args) => {
//     if (args.delta != undefined) {
//         let scrTop1 = args.delta.y
//         if (scrTop1 > 100) {
//           console.log('baa');
//           sidemenu.classList.add('sticky');
//         } else {
//           sidemenu.classList.remove('sticky'); 
//         }
//     }
// })
 


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
//gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.container #sec1 .one header nav ul li a::after',{duration:2,width:0})
