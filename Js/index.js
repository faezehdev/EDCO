let product = document.getElementsByClassName('productBox')
const row = document.querySelector('.container #sec3 .three .row2')
let arrayProduct = Object.keys(product)
const playBTN =document.getElementById("PlayPuase")
const video = document.getElementById("video-elem")
const pauseBtn = document.querySelector('.container .five')
let btn = document.querySelectorAll('.arrow')
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
      }
  })
}
document.addEventListener('scroll', () => {
  let scrTop = document.scrollingElement.scrollTop
  if (scrTop > 80) {
      document.querySelector(`header`).classList.add('active')
  } else {
      document.querySelector(`header`).classList.remove('active')
  }
})
// play pause video--------------------------------------------------
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
// hover product--------------------------------------------------------
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
row.addEventListener('mouseover',(e)=>{
        for(let i = 0; i<product.length;i++){{
          product[i].classList.remove('hover')
        }
    }  
})
//fade effect when load page
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
// arrow button--------------------------------------------------------
btn.forEach((b)=>{
b.addEventListener('mouseenter',()=>{
  b.children[0].children[0].setAttribute('src','../images/icons8-left-arrow-30 (1).png')
})
b.addEventListener('mouseleave',()=>{
  b.children[0].children[0].setAttribute('src','../images/icons8-left-arrow-30.png')
})
})
//gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})

