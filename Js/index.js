
gsap.registerPlugin( ScrollTrigger);
const locoscroll = new LocomotiveScroll({
  el:document.querySelector('.container'),
  smooth:true
})

// play pause video--------------------------------------------------

const playBTN =document.getElementById("PlayPuase")
const video = document.getElementById("video-elem")
const pauseBtn = document.querySelector('.container .five')
playBTN.addEventListener('click',(e)=>{
  e.stopPropagation()
    video.play()
   
    playBTN.style.display='none'
    pauseBtn.addEventListener('click',(e)=>{
    
      video.pause()
     
      playBTN.style.display='flex'
    })
    
})
video.addEventListener('click' , ()=>{
    playBTN.style.display='flex'
})
// fixed menu-----------------------------------------------------------

const nav =document.querySelector('#nav')
window.addEventListener('scroll',()=>{
    if (window.scrollY > nav.offsetTop) {    
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');    
      }
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
const row = document.querySelector('.container #sec3 .three .row2')
row.addEventListener('mouseover',(e)=>{
  
        for(let i = 0; i<product.length;i++){{
          product[i].classList.remove('hover')
        }
    }
   
})
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
//cursor follow-----------------------------------------------------------------
const cursorcontainer = document.querySelectorAll(".project");
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


//follow curoser-------------------------------------------
// let gcursorcontainer = gsap.utils.toArray('.project')
// let gcursor =document.querySelector(".cursor");
// let moveCursor = (e)=>{
//   gcursor.style.display='flex'
// let mouseX=e.clientX
// let mouseY=e.clientY
// tl =gsap.timeline()
// tl.to(
//   gcursor, {
//     duration:1,
//     x:mouseX,
//     y:mouseY,
//     ease:Expo.ease
//   }
// )
// }
// let initAnim =()=>{
//   gcursorcontainer.forEach((item)=>{
// item.addEventListener('mousemove',moveCursor)
//   })
// }
// let init=()=>{
//   initAnim()
 
// }
// window.addEventListener('load',init())
// for(let i=0;i<gcursorcontainer.length;i++){
//   gcursorcontainer[i].addEventListener('mouseleave',()=>{
//     gcursor.style.display='none'
// })
// }
// arrow button--------------------------------------------------------
let btn = document.querySelectorAll('.arrow')
let arrow = document.querySelectorAll('.ar')
btn.forEach((b)=>{
b.addEventListener('mousemove',()=>{
  for(let i=0;i<=arrow.length;i++)
  arrow[i].setAttribute('src','../images/icons8-left-arrow-30 (1).png')
})
b.addEventListener('mouseleave',()=>{
  for(let i=0;i<=arrow.length;i++){}
  arrow[i].setAttribute('src','../images/icons8-left-arrow-30.png')
})
})

//gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.container #sec1 .one header nav ul li a::after',{duration:2,width:0})
