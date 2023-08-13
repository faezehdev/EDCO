const btnContainer = document.getElementsByClassName('menu__list');
let btns = btnContainer[0].getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('__active')
let images = document.getElementsByClassName('img')
let imagelinkbtn=document.querySelectorAll('a.menu__link')
let imageContainer=document.querySelector('.projectImages')
const sidemenu =document.querySelector('.sideMenu')
// Enable Scroll
if (document.querySelector(`[data-scroll-container]`) != undefined) {
  let locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
  })
  let im = images[1].getBoundingClientRect()
  let contanerImagePosition =imageContainer.getBoundingClientRect();
  console.log(im.bottom -im.top);

  locoScroll.on('scroll', (args) => {
      if (args.delta != undefined) {
          let scrTop = args.delta.y
          if (scrTop > 80) {
         
   
          for(let i = 0; i<images.length;i++){
            
            let pos=images[i].getBoundingClientRect();
           
            if(scrTop >= contanerImagePosition.top){
               if(scrTop>= pos.top ){
                 console.log('img'+i)
               }
             
            }
          }













              document.querySelector(`header`).classList.add('active')
          } else {
              document.querySelector(`header`).classList.remove('active')
          }
          
      }
  })
}

window.addEventListener('load',()=>{
   
     for(let d = 0 ; d<images.length;d++){
       let imageId= `pic${d}`
        images[d].setAttribute('id',imageId)
       imagelinkbtn[d].setAttribute('href',`#${imageId}`)
      }
      console.log(images);
     })
// Enable Scroll
// if (document.querySelector(`[data-scroll-container]`) != undefined) {
//   let locoScroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true
//   })}
//   window.addEventListener('load',()=>{
   
//     for(let i = 0 ; i<=images.length;i++){
//       let imageId= `pic${i}`
//       images[i].setAttribute('id',imageId)
//     }
//     console.log(images);
//   })
// locoScroll.on('scroll', (args) => {
//       if (args.delta != undefined) {
//           let scrTop = args.delta.y
//           if (scrTop > 80) {
          
//               document.querySelector(`header`).classList.add('active')
// for(let i=0;i<=btns.length;i++){
//   let j=0
//   if(images[i].offsetTop >= scrTop){
 
//   }}

// }
//               if(scrTop>=1100){
//                 console.log(current);
//                 current[0].classList.remove('__active')
//                 menuActive[0].style.top=`calc(9px)`
//               }
//               if(scrTop>=1990){
               
//             current[0].className = current[0].className.replace('__active', '')
//             menuActive[0].style.top=`calc(9px + ${1*28}px)`
//               }
//               if(scrTop>=2800){
              
//             current[0].className = current[0].className.replace('__active', '')
          
//             menuActive[0].style.top=`calc(9px + ${2*28}px)`
//               }
//               if(scrTop>=3800){
//                 current[0].className = current[0].className.replace('__active', '')
        
//             menuActive[0].style.top=`calc(9px + ${3*28}px)`
//               }

//           } else {
//               document.querySelector(`header`).classList.remove('active')
//           }
//           if (scrTop >1000) {    
//             sidemenu.classList.add('sticky');
//           } else {
//             sidemenu.classList.remove('sticky');    
//           }
//       }
//      )
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
// active images menu
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
   
    
    current[0].className = current[0].className.replace('__active', '')
     btns[i].className += ' __active'
    
    menuActive[0].style.top=`calc(${(btns[i].offsetTop)+5}px)`


  
  })
 

}
   const nav =document.querySelector('#nav')
  //  window.addEventListener('scroll',()=>{
  //   if(window.scrollY>=1100){
           
  //           current[0].className = current[0].className.replace('__active', '')
  //            btns[0].className += ' __active'
  //             menuActive[0].style.top=`calc(9px)`
  //             }
  //  })
  // window.addEventListener('scroll',()=>{
  //     if (window.scrollY > nav.offsetTop) {    
  //         nav.classList.add('active');
           
  //         if(window.scrollY>=1100){
           
  //           current[0].className = current[0].className.replace('__active', '')
  //           btns[0].classList.add('__active')
  //           menuActive[0].style.top=`calc(9px)`
  //         }
  //         if(window.scrollY>=1990){
           
  //           current[0].className = current[0].className.replace('__active', '')
  //           btns[1].classList.add('__active')
  //           menuActive[0].style.top=`calc(9px + ${1*28}px)`
  //         }
  //         if(window.scrollY>=2800){
           
  //           current[0].className = current[0].className.replace('__active', '')
  //           btns[2].classList.add('__active')
  //           menuActive[0].style.top=`calc(9px + ${2*28}px)`
  //         }
  //         if(window.scrollY>=3800){
           
  //           current[0].className = current[0].className.replace('__active', '')
  //           btns[3].classList.add('__active')
  //           menuActive[0].style.top=`calc(9px + ${3*28}px)`
  //         }
  //       } else {
  //         nav.classList.remove('active');    
  //       }
  // })

//   window.addEventListener('scroll',(e)=>{

//     if (window.scrollY >1000) {    
//         sidemenu.classList.add('sticky');
//       } else {
//         sidemenu.classList.remove('sticky');    
//       }
// })

//gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
