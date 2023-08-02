// play pause video

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

const nav =document.querySelector('#nav')
window.addEventListener('scroll',()=>{
    if (window.scrollY > nav.offsetTop) {    
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');    
      }
})
let product = document.getElementsByClassName('productBox')
for(let i = 0; i<product.length;i++){
    product[i].addEventListener('mouseover',(e)=>{
    e.stopPropagation()
    hover(e.target)
    })
}
let hover = (Currentelem)=>{
    
    for(let i = 0; i<product.length;i++){
        
        if(product[i].id=== Currentelem.id){
            console.log(product[i].id);
            product[i].classList.add('active')
        }
        
        product[i].classList.add('hover')
    }
}
for(let i = 0; i<product.length;i++){
    product[i].addEventListener('mouseleave',(e)=>{
   
        product[i].style.opacity='1'
    product[i].classList.remove('active')

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

