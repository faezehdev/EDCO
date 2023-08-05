const btnContainer = document.getElementsByClassName('menu__list');
let btns = btnContainer[0].getElementsByClassName('menu__link');
let menuActive = document.getElementsByClassName('menu__active')
let current = document.getElementsByClassName('_active')
for(let i=0;i<btns.length ; i++){
  btns[i].addEventListener('click',()=>{
   
    current[0].className = current[0].className.replace('_active', '')
    btns[i].className += ' _active'
    menuActive[0].style.top=`calc(13px + ${i*27}px)`
  })
 

  }
  const nav =document.querySelector('#nav')
  window.addEventListener('scroll',()=>{
      if (window.scrollY > nav.offsetTop) {    
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');    
        }
  })
   
 
  const sidemenu =document.querySelector('.list-project .sideMenu')
  window.addEventListener('scroll',(e)=>{
console.log(window.scrollY );
    if (window.scrollY >100) {    
        sidemenu.classList.add('sticky');
      } else {
        sidemenu.classList.remove('sticky');    
      }
})