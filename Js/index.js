// play pause video
import '../../node_modules/swiper/dist/js/swiper.min.js';
const playBTN =document.getElementById("PlayPuase")
const video = document.getElementById("video-elem")

playBTN.addEventListener('click',()=>{
    video.play()
   
    playBTN.style.display='none'
})
video.addEventListener('click' , ()=>{
    playBTN.style.display='flex'
})
