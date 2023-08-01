// play pause video

const playBTN =document.getElementById("PlayPuase")
const video = document.getElementById("video-elem")

playBTN.addEventListener('click',()=>{
    video.play()
   
    playBTN.style.display='none'
})
video.addEventListener('click' , ()=>{
    playBTN.style.display='flex'
})

const nav =document.querySelector('#nav')
window.addEventListener('scroll',()=>{
    if (window.scrollY > nav.offsetTop) {    
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');    
      }
})