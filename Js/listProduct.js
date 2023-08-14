let product = document.getElementsByClassName('product')
let arrayProduct = Object.keys(product)
const row = document.querySelector('.listProduct #sec2 .two .row2')
const nav =document.querySelector('#nav')
// Enable Scroll
if (document.querySelector(`[data-scroll-container]`) != undefined) {
  let locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
  })
  console.log(locoScroll);
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
  //gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})

