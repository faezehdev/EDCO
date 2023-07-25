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