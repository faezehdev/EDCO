//gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.container #sec1 .one header nav ul li a::after',{duration:2,width:0})

gsap.registerPlugin( ScrollTrigger);
const locoscroll = new LocomotiveScroll({
  el:document.querySelector('.aboutUs'),
  smooth:true
})

const nav =document.querySelector('#nav')
window.addEventListener('scroll',()=>{
    if (window.scrollY > nav.offsetTop) {    
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');    
      }
})


// play pause video

const playBTN =document.getElementById("PlayPuase")
const video = document.getElementById("video-elem")
const pauseBtn = document.querySelector('.aboutUs .three .col1')
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
