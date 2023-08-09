gsap.registerPlugin( ScrollTrigger);
const locoscroll = new LocomotiveScroll({
  el:document.querySelector('.catProduct'),
  smooth:true
})
//gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.container #sec1 .one header nav ul li a::after',{duration:2,width:0})

let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
       
      },
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
const nav =document.querySelector('#nav')
window.addEventListener('scroll',()=>{
    if (window.scrollY > nav.offsetTop) {    
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');    
      }
})
// let product = document.getElementsByClassName('productBox')
// for(let i = 0; i<product.length;i++){
//     product[i].addEventListener('mouseover',(e)=>{
//     e.stopPropagation()
//     hover(e.target)
//     })
// }
// let hover = (Currentelem)=>{
    
//     for(let i = 0; i<product.length;i++){
        
//         if(product[i].id=== Currentelem.id){
//             console.log(product[i].id);
//             product[i].classList.add('active')
//         }
        
//         product[i].classList.add('hover')
//     }
// }
// for(let i = 0; i<product.length;i++){
//     product[i].addEventListener('mouseleave',(e)=>{
   
//         product[i].style.opacity='1'
//     product[i].classList.remove('active')

//     })
// }
// const row = document.querySelector('.catProduct #sec2 .two .row2')
// row.addEventListener('mouseover',(e)=>{
  
//         for(let i = 0; i<product.length;i++){{
//           product[i].classList.remove('hover')
//         }
//     }
   
// })

const appearOptions ={
    rootMargin: "0px",
    threshold:.75,
  }
  let t =0
  const faders = document.querySelectorAll('.fade-in')
  const appearOnScroll=new IntersectionObserver((entries,appearOnScroll)=>{
  entries.forEach((entry)=>{
  if(!entry.isIntersecting){
    return
  }else{ 
      entry.target.classList.add('appear')
    appearOnScroll.unobserve(entry.target)
    }
  })
  },appearOptions)
  faders.forEach((fader)=>{
  appearOnScroll.observe(fader)
  })
  

  // hover product--------------------------------------------------------
let product = document.getElementsByClassName('productBox')
let arrayProduct = Object.keys(product)

for(let i = 0; i<product.length;i++){
    product[i].addEventListener('mouseover',(e)=>{
    e.stopPropagation()
    hover(e.currentTarget)
    e.currentTarget.classList.add('active')
    })
}
let hover = ()=>{
 
    for(let i = 0; i<product.length;i++){
        product[i].classList.add('hover')
    }
}
for(let i = 0; i<product.length;i++){
    product[i].addEventListener('mouseleave',()=>{
   
        product[i].style.opacity='1'
    product[i].classList.remove('active')
    product[i].classList.remove('hover')
    })
}
const row = document.querySelector('.catProduct #sec2 .two .row2')
row.addEventListener('mouseover',(e)=>{
  
        for(let i = 0; i<product.length;i++){{
          product[i].classList.remove('hover')
        }
    }
   
})