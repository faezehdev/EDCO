window.onload = function() {
    //gsap-----------------------------------------------------------------
gsap.from('#nav',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})
gsap.to('#nav',{duration:1,y:'0%',ease: "slow(0.7, 0.7, false)"})
gsap.from('.header.active',{duration:1,y:'-100%',ease: "slow(0.7, 0.7, false)"})      
  }
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
